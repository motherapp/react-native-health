//
//  RCTAppleHealthKit+Methods_Symptoms.h
//  RCTAppleHealthKit
//
//  Created by tom on 2022/3/16.
//  Copyright © 2022 Greg Wilson. All rights reserved.
//

#import "RCTAppleHealthKit.h"

@interface RCTAppleHealthKit (Methods_Symptoms)
- (void)symptoms_getSymptomsSample:(NSDictionary *)input callback:(RCTResponseSenderBlock)callback;
- (void)symptoms_saveSymptomsSample:(NSDictionary *)input callback:(RCTResponseSenderBlock)callback;
@end
