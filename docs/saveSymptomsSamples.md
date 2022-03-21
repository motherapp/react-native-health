# saveSymptomsSamples

Save symptoms samples.


The options object is used to setup a query to retrieve relevant samples.
The options must contain `startDate` and `symptoms` and may also optionally include `endDate` and `metadata` options.

Example input options:

```javascript
let options = {
  startDate: new Date(2022, 2, 13).toISOString(), // required
  endDate: new Date(2022, 2, 13).toISOString(), // optional; default startDate
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
```

`Only the above 22 symptoms are supported`

```javascript
AppleHealthKit.saveSymptomsSamples(options, (err: Object, results: Array<HealthValue>) => {
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
      "UUID":"6B33BC38-0C74-4D56-864B-4BB5D491A2FA",
      "symptom":"Mood Changes"
   },
   {
      "UUID":"3E012AC8-6D41-4CE0-9D1A-3E395F55E22C",
      "symptom":"Constipation"
   },
   {
      "UUID":"B8D1B6F4-F4CB-4097-8278-4DEDB54084C8",
      "symptom":"Fatigue"
   },
   {
      "UUID":"EE550553-8FFE-46DD-AAD1-9FB46C46C76D",
      "symptom":"Hot Flashes"
   },
   {
      "UUID":"13E395D7-6157-470A-96C9-1BF825205588",
      "symptom":"Lower Back Pain"
   },
   {
      "UUID":"E27D62A4-5D5B-430B-8D28-FFD1E4356D8F",
      "symptom":"Sleep Changes"
   },
   {
      "UUID":"53677DFF-2AA8-4194-A3E8-76FF77EE0C5B",
      "symptom":"Pelvic Pain"
   },
   {
      "UUID":"DE49B7AA-B590-4665-A3B8-237B5C911B80",
      "symptom":"Night Sweats"
   },
   {
      "UUID":"BD530004-3E45-4605-9550-E114D1B754F7",
      "symptom":"Abdominal Cramps"
   },
   {
      "UUID":"459A9F96-0829-4C57-B5BF-4E7BB7D7CA39",
      "symptom":"Acne"
   },
   {
      "UUID":"1F8A4D59-1F32-4DA8-AD02-D19D8F4D1207",
      "symptom":"Memory Lapse"
   },
   {
      "UUID":"88E391BF-6C63-417E-8BD6-FCC217EE54A7",
      "symptom":"Bladder Incontinence"
   },
   {
      "UUID":"9EE4E8C9-76C9-40FC-A7BF-D7AFAF11727D",
      "symptom":"Headache"
   },
   {
      "UUID":"86E29943-2D57-4034-B582-8C9BE429D65E",
      "symptom":"Nausea"
   },
   {
      "UUID":"B7878FED-7EAB-4D6C-BCEB-09D9AFF353C0",
      "symptom":"Hair Loss"
   },
   {
      "UUID":"DB45DC04-D09E-41D8-98D0-8704D08C6234",
      "symptom":"Bloating"
   },
   {
      "UUID":"8580F379-10AC-45B6-9860-5FCDC8A97C43",
      "symptom":"Diarrhea"
   },
   {
      "UUID":"2F54EF99-48C3-4C10-9DD8-690BCC0C4AE4",
      "symptom":"Chills"
   },
   {
      "UUID":"865CB261-62AC-44F7-AD91-4DE2CB158887",
      "symptom":"Dry Skin"
   },
   {
      "UUID":"56D23980-482D-4C49-9D89-4B7D971613B8",
      "symptom":"Vaginal Dryness"
   },
   {
      "UUID":"4930C8AB-8017-4FF1-8D87-679B2CAAA4BC",
      "symptom":"Breast Pain"
   },
   {
      "UUID":"74B1AA2C-AAB0-4CE2-BAF9-B6BD7948E664",
      "symptom":"Appetite Changes"
   }
]
```
