# getSymptomsSamples

Query for menstrual flow samples.


The options object is used to setup a query to retrieve relevant samples.
The options must contain `startDate` and may also optionally include `endDate`
and `limit` options

Example input options:

```javascript
let options = {
  startDate: new Date(2021, 0, 0).toISOString(), // required
  endDate: new Date().toISOString(), // optional; default now
  limit: 10, // optional; default no limit
}
```

```javascript
AppleHealthKit.getSymptomsSamples(options, (err: Object, results: Array<HealthValue>) => {
  if (err) {
    return;
  }
  console.log(results).
});
```

Example output:

```json
[
   {
      "endDate":"2022-04-08T00:00:00.000+0800",
      "startDate":"2022-04-08T00:00:00.000+0800",
      "symptom":"Abdominal Cramps",
      "value":"Present"
   },
   {
      "endDate":"2022-04-08T00:00:00.000+0800",
      "startDate":"2022-04-08T00:00:00.000+0800",
      "symptom":"Sleep Changes",
      "value":"Present"
   },
   {
      "endDate":"2022-04-08T12:00:00.000+0800",
      "startDate":"2022-04-08T12:00:00.000+0800",
      "symptom":"Lower Back Pain",
      "value":"Present"
   },
   {
      "endDate":"2022-04-08T00:00:00.000+0800",
      "startDate":"2022-04-08T00:00:00.000+0800",
      "symptom":"Lower Back Pain",
      "value":"Present"
   },
   {
      "endDate":"2022-04-08T00:00:00.000+0800",
      "startDate":"2022-04-08T00:00:00.000+0800",
      "symptom":"Hot Flashes",
      "value":"Present"
   },
   {
      "endDate":"2022-04-08T00:00:00.000+0800",
      "startDate":"2022-04-08T00:00:00.000+0800",
      "symptom":"Acne",
      "value":"Present"
   },
   {
      "endDate":"2022-04-08T00:00:00.000+0800",
      "startDate":"2022-04-08T00:00:00.000+0800",
      "symptom":"Nausea",
      "value":"Present"
   },
   {
      "endDate":"2022-04-08T00:00:00.000+0800",
      "startDate":"2022-04-08T00:00:00.000+0800",
      "symptom":"Night Sweats",
      "value":"Present"
   },
   {
      "endDate":"2022-04-08T00:00:00.000+0800",
      "startDate":"2022-04-08T00:00:00.000+0800",
      "symptom":"Pelvic Pain",
      "value":"Present"
   },
   {
      "endDate":"2022-04-08T00:00:00.000+0800",
      "startDate":"2022-04-08T00:00:00.000+0800",
      "symptom":"Bladder Incontinence",
      "value":"Present"
   },
   {
      "endDate":"2022-04-08T00:00:00.000+0800",
      "startDate":"2022-04-08T00:00:00.000+0800",
      "symptom":"Memory Lapse",
      "value":"Present"
   },
   {
      "endDate":"2022-04-08T00:00:00.000+0800",
      "startDate":"2022-04-08T00:00:00.000+0800",
      "symptom":"Hair Loss",
      "value":"Present"
   },
   {
      "endDate":"2022-04-08T00:00:00.000+0800",
      "startDate":"2022-04-08T00:00:00.000+0800",
      "symptom":"Headache",
      "value":"Present"
   },
   {
      "endDate":"2022-04-08T00:00:00.000+0800",
      "startDate":"2022-04-08T00:00:00.000+0800",
      "symptom":"Vaginal Dryness",
      "value":"Present"
   },
   {
      "endDate":"2022-04-08T00:00:00.000+0800",
      "startDate":"2022-04-08T00:00:00.000+0800",
      "symptom":"Chills",
      "value":"Present"
   },
   {
      "endDate":"2022-04-08T00:00:00.000+0800",
      "startDate":"2022-04-08T00:00:00.000+0800",
      "symptom":"Diarrhea",
      "value":"Present"
   },
   {
      "endDate":"2022-04-08T00:00:00.000+0800",
      "startDate":"2022-04-08T00:00:00.000+0800",
      "symptom":"Appetite Changes",
      "value":"Present"
   },
   {
      "endDate":"2022-04-08T12:00:00.000+0800",
      "startDate":"2022-04-08T12:00:00.000+0800",
      "symptom":"Breast Pain",
      "value":"Present"
   },
   {
      "endDate":"2022-04-08T00:00:00.000+0800",
      "startDate":"2022-04-08T00:00:00.000+0800",
      "symptom":"Breast Pain",
      "value":"Present"
   },
   {
      "endDate":"2022-04-08T00:00:00.000+0800",
      "startDate":"2022-04-08T00:00:00.000+0800",
      "symptom":"Bloating",
      "value":"Present"
   },
   {
      "endDate":"2022-04-08T12:00:00.000+0800",
      "startDate":"2022-04-08T12:00:00.000+0800",
      "symptom":"Dry Skin",
      "value":"Present"
   },
   {
      "endDate":"2022-04-08T00:00:00.000+0800",
      "startDate":"2022-04-08T00:00:00.000+0800",
      "symptom":"Dry Skin",
      "value":"Present"
   }
]
```
