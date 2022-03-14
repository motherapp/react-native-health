# saveMenstrualFlowSamples

Save a menstrual flow samples.


The options object is used to setup a query to retrieve relevant samples.
The options must contain `startDate` and `HKMenstrualCycleStart` and may also optionally include `endDate`
and `value` options.

Example input options:

```javascript
let options = {
  startDate: new Date(2022, 2, 13).toISOString(), // required
  endDate: new Date(2022, 2, 13).toISOString(), // optional; default startDate
  value: "LIGHT", // optional; (NONE, LIGHT, MEDIUM, HEAVY)
  metadata:{
    HKMenstrualCycleStart:0, // required
    HKWasUserEntered:1
  },
}
```

`HKMenstrualCycleStart`: https://developer.apple.com/documentation/healthkit/hkmetadatakeymenstrualcyclestart?language=objc


```javascript
AppleHealthKit.saveMenstrualFlowSamples(options, (err: Object, results: HealthValue) => {
  if (err) {
    return;
  }
  console.log(results).
});
```

Example output:

```json
"8D5D6761-DFFE-4BA3-8D04-EF26E3EC2DA6"
```
