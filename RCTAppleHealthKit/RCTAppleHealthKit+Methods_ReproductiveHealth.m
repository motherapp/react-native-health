//
//  RCTAppleHealthKit+Methods_ReproductiveHealth.m
//  RCTAppleHealthKit
//
//  Created by Ivanka Todorova on 17/05/2021.

//  This source code is licensed under the MIT-style license found in the
//  LICENSE file in the root directory of this source tree.

#import "RCTAppleHealthKit+Methods_ReproductiveHealth.h"
#import "RCTAppleHealthKit+Queries.h"
#import "RCTAppleHealthKit+Utils.h"
#import "RCTAppleHealthKit+TypesAndPermissions.h"

@implementation RCTAppleHealthKit (Methods_ReproductiveHealth)

- (void)reproductiveHealth_getBasalBodyTemperatureSamples:(NSDictionary *)input callback:(RCTResponseSenderBlock)callback
{
    HKQuantityType *basalBodyTemperatureType = [HKQuantityType quantityTypeForIdentifier:HKQuantityTypeIdentifierBasalBodyTemperature];
    HKUnit *unit = [RCTAppleHealthKit hkUnitFromOptions:input key:@"unit" withDefault:[HKUnit degreeCelsiusUnit]];
    NSUInteger limit = [RCTAppleHealthKit uintFromOptions:input key:@"limit" withDefault:HKObjectQueryNoLimit];
    BOOL ascending = [RCTAppleHealthKit boolFromOptions:input key:@"ascending" withDefault:false];
    NSDate *startDate = [RCTAppleHealthKit dateFromOptions:input key:@"startDate" withDefault:nil];
    NSDate *endDate = [RCTAppleHealthKit dateFromOptions:input key:@"endDate" withDefault:[NSDate date]];
    if(startDate == nil){
        callback(@[RCTMakeError(@"startDate is required in options", nil, nil)]);
        return;
    }
    NSPredicate * predicate = [RCTAppleHealthKit predicateForSamplesBetweenDates:startDate endDate:endDate];

    [self fetchQuantitySamplesOfType:basalBodyTemperatureType
                                unit:unit
                           predicate:predicate
                           ascending:ascending
                               limit:limit
                          completion:^(NSArray *results, NSError *error) {
        if(results){
            callback(@[[NSNull null], results]);
            return;
        } else {
            NSLog(@"An error occured while retrieving the basal body temperature sample %@. The error was: ", error);
            callback(@[RCTMakeError(@"An error occured while retrieving the basal body temperature sample", error, nil)]);
            return;
        }
    }];
}


- (void)reproductiveHealth_getMenstrualFlowSamples:(NSDictionary *)input callback:(RCTResponseSenderBlock)callback
{
    NSDate *startDate = [RCTAppleHealthKit dateFromOptions:input key:@"startDate" withDefault:nil];
    NSDate *endDate = [RCTAppleHealthKit dateFromOptions:input key:@"endDate" withDefault:[NSDate date]];
    if(startDate == nil){
        callback(@[RCTMakeError(@"startDate is required in options", nil, nil)]);
        return;
    }

    NSPredicate *predicate = [RCTAppleHealthKit predicateForSamplesBetweenDates:startDate endDate:endDate];
    NSUInteger limit = [RCTAppleHealthKit uintFromOptions:input key:@"limit" withDefault:HKObjectQueryNoLimit];


    [self fetchMenstrualFlowSamplesForPredicate:predicate
                                          limit:limit
                                     completion:^(NSArray *results, NSError *error) {
                                         if(results){
                                             callback(@[[NSNull null], results]);
                                             return;
                                         } else {
                                             callback(@[RCTJSErrorFromNSError(error)]);
                                             return;
                                         }
                                     }];

}

- (void)deleteMenstrualSymptomsSample:(NSPredicate *)predicate
{
    NSDictionary *symptomsMapping = [self getSymptomsMapping];
    for (NSString *symptom in symptomsMapping) {

        HKCategoryType *symptomType = [HKObjectType categoryTypeForIdentifier:[symptomsMapping valueForKey:symptom]];

        [self.healthStore deleteObjectsOfType:symptomType predicate:predicate withCompletion:^(BOOL success, NSUInteger deletedObjectCount, NSError * _Nullable error) {
            if (!success) {
                NSLog(@"An error occured while deleting the %@ sample %@. The error was: ", symptom, error);
                return;
            }
            NSLog(@"delete %@ object count: %@", symptom, @(deletedObjectCount));
        }];
    }
}

- (void)reproductiveHealth_saveSymptomsSample:(NSDictionary *)input callback:(RCTResponseSenderBlock)callback
{
    NSArray *symptoms = [input valueForKey:@"symptoms"];
    NSDate *startDate = [RCTAppleHealthKit dateFromOptions:input key:@"startDate" withDefault:nil];
    NSDate *endDate = [RCTAppleHealthKit dateFromOptions:input key:@"endDate" withDefault:startDate];
    NSDictionary *symptomsMapping = [self getSymptomsMapping];
    NSPredicate *predicate = [RCTAppleHealthKit predicateForSamplesOnDay:startDate];
    NSMutableArray *data = [NSMutableArray arrayWithCapacity:1];

    if (!symptoms || !startDate) {
        callback(@[RCTMakeError(@"symptoms / startDate is required in options", nil, nil)]);
        return;
    }

    [self deleteMenstrualSymptomsSample:predicate];

    for (NSString *symptom in symptoms) {
        NSString *keySymptom = [symptom stringByReplacingOccurrencesOfString:@" " withString:@""];

        if ([symptomsMapping valueForKey:keySymptom]) {

            HKCategoryType *symptomType = [HKObjectType categoryTypeForIdentifier:[symptomsMapping valueForKey:keySymptom]];

            HKCategorySample *symptomSample = [HKCategorySample categorySampleWithType:symptomType
                                                                                       value:HKCategoryValueSeverityUnspecified
                                                                                   startDate:startDate
                                                                                     endDate:endDate];

            [self.healthStore saveObject:symptomSample withCompletion:^(BOOL success, NSError *error) {
                if (!success) {
                    NSLog(@"An error occured while saving the %@ sample %@. The error was: ", symptom, error);
                    callback(@[RCTMakeError(@"An error occured while saving the symptom sample", error, nil)]);
                    return;
                }
            }];

            NSDictionary *elem = @{
                @"symptom" : symptom,
                @"UUID" : [symptomSample.UUID UUIDString],
            };

            [data addObject:elem];
        }
    }

    callback(@[[NSNull null], data]);
}

- (void)reproductiveHealth_saveMenstrualFlowSample:(NSDictionary *)input callback:(RCTResponseSenderBlock)callback
{
    HKCategoryType *menstrualFlowType = [HKObjectType categoryTypeForIdentifier:HKCategoryTypeIdentifierMenstrualFlow];
    NSDate *startDate = [RCTAppleHealthKit dateFromOptions:input key:@"startDate" withDefault:nil];
    NSDate *endDate = [RCTAppleHealthKit dateFromOptions:input key:@"endDate" withDefault:startDate];
    NSString *value = [RCTAppleHealthKit stringFromOptions:input key:@"value" withDefault:@"UNSPECIFIED"];
    NSPredicate *predicate = [RCTAppleHealthKit predicateForSamplesOnDay:startDate];
    NSDictionary *metadata = [RCTAppleHealthKit metadataFromOptions:input withDefault:nil];

    if (![metadata valueForKey:@"HKMenstrualCycleStart"] || !startDate) {
        callback(@[RCTMakeError(@"HKMenstrualCycleStart / startDate is required in options", nil, nil)]);
        return;
    }

    NSInteger *menstrualFlowValue;

    if ([value isEqualToString:@"NONE"]) {
        menstrualFlowValue = HKCategoryValueMenstrualFlowNone;
    } else if ([value isEqualToString:@"LIGHT"]) {
        menstrualFlowValue = HKCategoryValueMenstrualFlowLight;
    } else if ([value isEqualToString:@"MEDIUM"]) {
        menstrualFlowValue = HKCategoryValueMenstrualFlowMedium;
    } else if ([value isEqualToString:@"HEAVY"]) {
        menstrualFlowValue = HKCategoryValueMenstrualFlowHeavy;
    } else {
        menstrualFlowValue = HKCategoryValueMenstrualFlowUnspecified;
    }

    HKCategorySample *menstrualFlowSample = [HKCategorySample categorySampleWithType:menstrualFlowType
                                                                               value:menstrualFlowValue
                                                                           startDate:startDate
                                                                             endDate:endDate
                                                                            metadata:metadata];

    // delete startDate data and save new data
    [self.healthStore deleteObjectsOfType:menstrualFlowType predicate:predicate withCompletion:^(BOOL success, NSUInteger deletedObjectCount, NSError * _Nullable error) {
        if (!success) {
            NSLog(@"An error occured while deleting the menstrual flow sample %@. The error was: ", error);
            callback(@[RCTMakeError(@"An error occured while deleting the menstrual flow sample", error, nil)]);
            return;
        }
        NSLog(@"delete menstrual flow object count: %@", @(deletedObjectCount));
    }];

    [self.healthStore saveObject:menstrualFlowSample withCompletion:^(BOOL success, NSError *error) {
        if (!success) {
            NSLog(@"An error occured while saving the menstrual flow sample %@. The error was: ", error);
            callback(@[RCTMakeError(@"An error occured while saving the menstrual flow sample", error, nil)]);
            return;
        }
        callback(@[[NSNull null], [menstrualFlowSample.UUID UUIDString]]);
    }];
}
@end
