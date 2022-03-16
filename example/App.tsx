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

export default function App() {
  const [menstrualData, setMenstrualData] = useState<any>({});
  const [menstrualResult, setMenstrualResult] = useState<any>({});
  const [symptomsData, setSymptomsData] = useState<any>({});
  const [symptomsResult, setSymptomsResult] = useState<any>({});

  const handleGetPermissionPressed = () => {
    AppleHealthKit.initHealthKit(permissions, (error: string) => {
      /* Called after we receive a response from the system */
    
      AppleHealthKit.getAuthStatus(permissions, (err, results) => {
        console.log(err, results, 'AUTH STATUS')
      })
    
      if (error) {
        console.log('[ERROR] Cannot grant permissions!');
      }
    });
  }

  const handleGetDataPressed = () => {
    let options = {
      startDate: new Date(1900, 0, 0).toISOString(), // required
      // endDate: "2022-03-14T12:00:00.000+0800",
      // limit: 10, // optional; default no limit
    }
  
    AppleHealthKit.getMenstrualFlowSamples(options, (err: Object, results: Array<HealthValue>) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(results)
      setMenstrualData(results)
    })
  };

  const handleSaveMenstrualDataPressed = () => {
    let options = {
      startDate: new Date(2022, 2, 14).toISOString(), // required
      endDate: new Date(2022, 2, 14).toISOString(), // optional; default startDate
      value: "MEDIUM", // optional; (NONE, LIGHT, MEDIUM, HEAVY)
      metadata:{
        HKMenstrualCycleStart:0, // required
        HKWasUserEntered:1
      },
    }
  
    AppleHealthKit.saveMenstrualFlowSamples(options, (err: Object, results: Array<HealthValue>) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(results)
      setMenstrualResult(results)
    })
  };

  const handleGetSymptomsDataPressed = () => {
    let options = {
      startDate: new Date(1900, 0, 0).toISOString(), // required
      // endDate: "2022-03-14T12:00:00.000+0800",
      // limit: 10, // optional; default no limit
    }
  
    AppleHealthKit.getSymptomsSamples(options, (err: Object, results: Array<HealthValue>) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(results)
      setSymptomsData(results)
    })
  };

  const handleSaveSymptomsDataPressed = () => {
    let options = {
      startDate: new Date(2022, 2, 14).toISOString(), // required
      endDate: new Date(2022, 2, 14).toISOString(), // optional; default startDate
      symptoms:[
        "Mood Changes",
        "Constipation",
        "Fatigue",
        "Hot Flashes",
        "Lower Back Pain",
        "Sleep Changes",
        "Pelvic Pain",
        "Night Sweats",
        "Abdominal Cramps",
        "Acne",
        "Memory Lapse",
        "Bladder Incontinence",
        "Headache",
        "Nausea",
        "Hair Loss",
        "Bloating",
        "Diarrhea",
        "Chills",
        "Dry Skin",
        "Vaginal Dryness",
        "Breast Pain",
        "Appetite Changes"
      ],
      metadata:{
        HKWasUserEntered:1
      },
    }
  
    AppleHealthKit.saveSymptomsSamples(options, (err: Object, results: Array<HealthValue>) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(results)
      setSymptomsResult(results)
    })
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
              <Text onPress={handleGetPermissionPressed}>
                Press me to get permissions
              </Text>
              <Text style={styles.sectionDescription}>
                {}
              </Text>
              <Text onPress={handleGetDataPressed}>
                Press me to get menstrual flow data
              </Text>
              <Text style={styles.sectionDescription}>
                {JSON.stringify(menstrualData, null, 2)}
              </Text>
              <Text onPress={handleSaveMenstrualDataPressed}>
                Press me to save menstrual flow data
              </Text>
              <Text style={styles.sectionDescription}>
                {JSON.stringify(menstrualResult, null, 2)}
              </Text>
              <Text onPress={handleGetSymptomsDataPressed}>
                Press me to get symptoms data
              </Text>
              <Text style={styles.sectionDescription}>
                {JSON.stringify(symptomsData, null, 2)}
              </Text>
              <Text onPress={handleSaveSymptomsDataPressed}>
                Press me to save symptoms data
              </Text>
              <Text style={styles.sectionDescription}>
                {JSON.stringify(symptomsResult, null, 2)}
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
