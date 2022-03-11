import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppleHealthKit, {
  HealthValue,
  HealthKitPermissions,
} from 'react-native-health';

/* Permission options */
const permissions = {
  permissions: {
    read: [
      AppleHealthKit.Constants.Permissions.MenstrualFlow,
      AppleHealthKit.Constants.Permissions.Chills,
      AppleHealthKit.Constants.Permissions.Fatigue,
      AppleHealthKit.Constants.Permissions.SleepChanges,
      AppleHealthKit.Constants.Permissions.AbdominalCramps,
      AppleHealthKit.Constants.Permissions.Acne,
      AppleHealthKit.Constants.Permissions.AppetiteChanges,
      AppleHealthKit.Constants.Permissions.BladderIncontinence,
      AppleHealthKit.Constants.Permissions.Bloating,
      AppleHealthKit.Constants.Permissions.BreastPain,
      AppleHealthKit.Constants.Permissions.Constipation,
      AppleHealthKit.Constants.Permissions.Diarrhea,
      AppleHealthKit.Constants.Permissions.DrySkin,
      AppleHealthKit.Constants.Permissions.HairLoss,
      AppleHealthKit.Constants.Permissions.Headache,
      AppleHealthKit.Constants.Permissions.HotFlashes,
      AppleHealthKit.Constants.Permissions.LowerBackPain,
      AppleHealthKit.Constants.Permissions.MemoryLapse,
      AppleHealthKit.Constants.Permissions.MoodChanges,
      AppleHealthKit.Constants.Permissions.Nausea,
      AppleHealthKit.Constants.Permissions.NightSweats,
      AppleHealthKit.Constants.Permissions.PelvicPain,
      AppleHealthKit.Constants.Permissions.VaginalDryness,
    ],
    write: [
      AppleHealthKit.Constants.Permissions.MenstrualFlow,
      AppleHealthKit.Constants.Permissions.Chills,
      AppleHealthKit.Constants.Permissions.Fatigue,
      AppleHealthKit.Constants.Permissions.SleepChanges,
      AppleHealthKit.Constants.Permissions.AbdominalCramps,
      AppleHealthKit.Constants.Permissions.Acne,
      AppleHealthKit.Constants.Permissions.AppetiteChanges,
      AppleHealthKit.Constants.Permissions.BladderIncontinence,
      AppleHealthKit.Constants.Permissions.Bloating,
      AppleHealthKit.Constants.Permissions.BreastPain,
      AppleHealthKit.Constants.Permissions.Constipation,
      AppleHealthKit.Constants.Permissions.Diarrhea,
      AppleHealthKit.Constants.Permissions.DrySkin,
      AppleHealthKit.Constants.Permissions.HairLoss,
      AppleHealthKit.Constants.Permissions.Headache,
      AppleHealthKit.Constants.Permissions.HotFlashes,
      AppleHealthKit.Constants.Permissions.LowerBackPain,
      AppleHealthKit.Constants.Permissions.MemoryLapse,
      AppleHealthKit.Constants.Permissions.MoodChanges,
      AppleHealthKit.Constants.Permissions.Nausea,
      AppleHealthKit.Constants.Permissions.NightSweats,
      AppleHealthKit.Constants.Permissions.PelvicPain,
      AppleHealthKit.Constants.Permissions.VaginalDryness,
    ],
  },
} as HealthKitPermissions;

AppleHealthKit.initHealthKit(permissions, (error: string) => {
  /* Called after we receive a response from the system */

  if (error) {
    console.log('[ERROR] Cannot grant permissions!');
  }

  /* Can now read or write to HealthKit */

  let options = {
    startDate: new Date(1900, 0, 0).toISOString(), // required
    endDate: new Date().toISOString(), // optional; default now
    // limit: 10, // optional; default no limit
  }

  AppleHealthKit.getMenstrualFlowSamples(options, (err: Object, results: Array<HealthValue>) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(results, results.length, "@44")
  })
});

export default function App() {
  const [authStatus, setAuthStatus] = useState<any>({});

  const handlePressGetAuthStatus = () => {
    AppleHealthKit.getAuthStatus(permissions, (err, result) => {
      if (err) {
        console.error(err);
      }
      setAuthStatus(result);
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                React Native Health Example
              </Text>
              <Text onPress={handlePressGetAuthStatus}>
                Press me to get Auth Status
              </Text>
              <Text style={styles.sectionDescription}>
                {JSON.stringify(authStatus, null, 2)}
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
