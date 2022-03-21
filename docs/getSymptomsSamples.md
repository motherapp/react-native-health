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
      "endDate":"2022-03-14T00:00:00.000+0800",
      "startDate":"2022-03-14T00:00:00.000+0800",
      "symptom":"Constipation"
   },
   {
      "endDate":"2022-03-14T00:00:00.000+0800",
      "startDate":"2022-03-14T00:00:00.000+0800",
      "symptom":"Mood Changes"
   },
   {
      "endDate":"2022-03-14T00:00:00.000+0800",
      "startDate":"2022-03-14T00:00:00.000+0800",
      "symptom":"Fatigue"
   },
   {
      "endDate":"2022-03-14T00:00:00.000+0800",
      "startDate":"2022-03-14T00:00:00.000+0800",
      "symptom":"Lower Back Pain"
   },
   {
      "endDate":"2022-03-14T00:00:00.000+0800",
      "startDate":"2022-03-14T00:00:00.000+0800",
      "symptom":"Abdominal Cramps"
   },
   {
      "endDate":"2022-03-05T12:00:00.000+0800",
      "startDate":"2022-03-05T12:00:00.000+0800",
      "symptom":"Abdominal Cramps"
   },
   {
      "endDate":"2022-03-14T00:00:00.000+0800",
      "startDate":"2022-03-14T00:00:00.000+0800",
      "symptom":"Sleep Changes"
   },
   {
      "endDate":"2022-03-14T00:00:00.000+0800",
      "startDate":"2022-03-14T00:00:00.000+0800",
      "symptom":"Hot Flashes"
   },
   {
      "endDate":"2022-03-14T00:00:00.000+0800",
      "startDate":"2022-03-14T00:00:00.000+0800",
      "symptom":"Acne"
   },
   {
      "endDate":"2022-03-05T12:00:00.000+0800",
      "startDate":"2022-03-05T12:00:00.000+0800",
      "symptom":"Acne"
   },
   {
      "endDate":"2022-03-14T00:00:00.000+0800",
      "startDate":"2022-03-14T00:00:00.000+0800",
      "symptom":"Nausea"
   },
   {
      "endDate":"2022-03-14T00:00:00.000+0800",
      "startDate":"2022-03-14T00:00:00.000+0800",
      "symptom":"Pelvic Pain"
   },
   {
      "endDate":"2022-03-14T00:00:00.000+0800",
      "startDate":"2022-03-14T00:00:00.000+0800",
      "symptom":"Night Sweats"
   },
   {
      "endDate":"2022-03-14T00:00:00.000+0800",
      "startDate":"2022-03-14T00:00:00.000+0800",
      "symptom":"Memory Lapse"
   },
   {
      "endDate":"2022-03-14T00:00:00.000+0800",
      "startDate":"2022-03-14T00:00:00.000+0800",
      "symptom":"Hair Loss"
   },
   {
      "endDate":"2022-03-14T00:00:00.000+0800",
      "startDate":"2022-03-14T00:00:00.000+0800",
      "symptom":"Bladder Incontinence"
   },
   {
      "endDate":"2022-03-07T12:00:00.000+0800",
      "startDate":"2022-03-07T12:00:00.000+0800",
      "symptom":"Bladder Incontinence"
   },
   {
      "endDate":"2022-03-06T12:00:00.000+0800",
      "startDate":"2022-03-06T12:00:00.000+0800",
      "symptom":"Bladder Incontinence"
   },
   {
      "endDate":"2022-03-14T00:00:00.000+0800",
      "startDate":"2022-03-14T00:00:00.000+0800",
      "symptom":"Headache"
   },
   {
      "endDate":"2022-03-14T00:00:00.000+0800",
      "startDate":"2022-03-14T00:00:00.000+0800",
      "symptom":"Chills"
   },
   {
      "endDate":"2022-03-14T00:00:00.000+0800",
      "startDate":"2022-03-14T00:00:00.000+0800",
      "symptom":"Vaginal Dryness"
   },
   {
      "endDate":"2022-03-14T00:00:00.000+0800",
      "startDate":"2022-03-14T00:00:00.000+0800",
      "symptom":"Diarrhea"
   },
   {
      "endDate":"2022-03-14T00:00:00.000+0800",
      "startDate":"2022-03-14T00:00:00.000+0800",
      "symptom":"Appetite Changes"
   },
   {
      "endDate":"2022-03-05T12:00:00.000+0800",
      "startDate":"2022-03-05T12:00:00.000+0800",
      "symptom":"Appetite Changes"
   },
   {
      "endDate":"2022-03-14T00:00:00.000+0800",
      "startDate":"2022-03-14T00:00:00.000+0800",
      "symptom":"Breast Pain"
   },
   {
      "endDate":"2022-03-07T12:00:00.000+0800",
      "startDate":"2022-03-07T12:00:00.000+0800",
      "symptom":"Breast Pain"
   },
   {
      "endDate":"2022-03-06T12:00:00.000+0800",
      "startDate":"2022-03-06T12:00:00.000+0800",
      "symptom":"Breast Pain"
   },
   {
      "endDate":"2022-03-14T00:00:00.000+0800",
      "startDate":"2022-03-14T00:00:00.000+0800",
      "symptom":"Dry Skin"
   },
   {
      "endDate":"2022-03-14T00:00:00.000+0800",
      "startDate":"2022-03-14T00:00:00.000+0800",
      "symptom":"Bloating"
   },
   {
      "endDate":"2022-03-07T12:00:00.000+0800",
      "startDate":"2022-03-07T12:00:00.000+0800",
      "symptom":"Bloating"
   },
   {
      "endDate":"2022-03-06T12:00:00.000+0800",
      "startDate":"2022-03-06T12:00:00.000+0800",
      "symptom":"Bloating"
   }
]
```
