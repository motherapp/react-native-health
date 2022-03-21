//
//  RCTAppleHealthKit+Methods_Symptoms.m
//  RCTAppleHealthKit
//
//  Created by tom on 2022/3/16.
//  Copyright © 2022 Greg Wilson. All rights reserved.
//

#import "RCTAppleHealthKit+Methods_Symptoms.h"
#import "RCTAppleHealthKit+Queries.h"
#import "RCTAppleHealthKit+Utils.h"
#import "RCTAppleHealthKit+TypesAndPermissions.h"

@implementation RCTAppleHealthKit (Methods_Symptoms)

- (void)symptoms_getSymptomsSample:(NSDictionary *)input callback:(RCTResponseSenderBlock)callback
{
    NSDate *startDate = [RCTAppleHealthKit dateFromOptions:input key:@"startDate" withDefault:nil];
    NSDate *endDate = [RCTAppleHealthKit dateFromOptions:input key:@"endDate" withDefault:[NSDate date]];
    if(startDate == nil){
        callback(@[RCTMakeError(@"startDate is required in options", nil, nil)]);
        return;
    }

    NSPredicate *predicate = [RCTAppleHealthKit predicateForSamplesBetweenDates:startDate endDate:endDate];
    NSUInteger limit = [RCTAppleHealthKit uintFromOptions:input key:@"limit" withDefault:HKObjectQueryNoLimit];


    [self fetchMenstrualFlowWithStmptomsSamplesForPredicate:predicate
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

- (void)symptoms_saveSymptomsSample:(NSDictionary *)input callback:(RCTResponseSenderBlock)callback
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

@end
