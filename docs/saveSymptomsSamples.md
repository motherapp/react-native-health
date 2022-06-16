# saveSymptomsSamples

Save symptoms samples.


The options object is used to setup a query to retrieve relevant samples.
The options must contain `startDate` and `symptoms` and may also optionally include `endDate` and `metadata` options.

Example input options:

```javascript
let options = {
   startDate: new Date(2022, 5, 14).toISOString(), // required
   endDate: new Date(2022, 5, 14).toISOString(), // optional; default startDate
   symptoms:[
      {symptom: "Mood Changes", value: "Not Present"}, // value is optional; (Not Present, Present, Mild, Moderate, Severe)
      {symptom: "Constipation", value: "Severe"},
      {symptom: "Fatigue", value: "Severe"},
      {symptom: "Hot Flashes", value: "Severe"},
      {symptom: "Lower Back Pain", value: "Severe"},
      {symptom: "Sleep Changes", value: "Moderate"},
      {symptom: "Pelvic Pain", value: "Moderate"},
      {symptom: "Night Sweats", value: "Moderate"},
      {symptom: "Abdominal Cramps", value: "Present"},
      {symptom: "Acne", value: "Present"},
      {symptom: "Memory Lapse", value: "Present"},
      {symptom: "Bladder Incontinence", value: "Mild"},
      {symptom: "Headache", value: "Mild"},
      {symptom: "Nausea", value: "Mild"},
      {symptom: "Hair Loss", value: "Not Present"},
      {symptom: "Bloating", value: "Severe"},
      {symptom: "Diarrhea", value: "Severe"},
      {symptom: "Chills", value: "Severe"},
      {symptom: "Dry Skin", value: "Severe"},
      {symptom: "Vaginal Dryness", value: "Severe"},
      {symptom: "Breast Pain", value: "Severe"},
      {symptom: "Appetite Changes", value: "Not Present"},
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
      "UUID":"76F34A40-E4FC-4672-BA7E-0A8BED74A0C0",
      "symptom":"MoodChanges",
      "value":"Not Present"
   },
   {
      "UUID":"914BCD52-EC8D-4252-97D7-39CE7AE51C69",
      "symptom":"Constipation",
      "value":"Severe"
   },
   {
      "UUID":"BBBF4504-87C0-4FCE-86A4-726E9EF46E29",
      "symptom":"Fatigue",
      "value":"Severe"
   },
   {
      "UUID":"28DB84E1-95C6-4862-9B69-8A8087846F52",
      "symptom":"HotFlashes",
      "value":"Severe"
   },
   {
      "UUID":"FBDAA688-6952-4AC0-A2B0-29FC56B4F7E2",
      "symptom":"LowerBackPain",
      "value":"Severe"
   },
   {
      "UUID":"D6F264C1-ADC1-4D60-8F74-BE8036314B8B",
      "symptom":"SleepChanges",
      "value":"Moderate"
   },
   {
      "UUID":"4C543AB0-92B5-4FB3-9B82-90D01BB7F320",
      "symptom":"PelvicPain",
      "value":"Moderate"
   },
   {
      "UUID":"000F3E2D-2278-4995-B4C0-BA08BD1EC704",
      "symptom":"NightSweats",
      "value":"Moderate"
   },
   {
      "UUID":"866C9D5F-FD7C-43A3-B589-0DECA84380FB",
      "symptom":"AbdominalCramps",
      "value":"Present"
   },
   {
      "UUID":"25C0A968-3643-41A1-9709-8CC63B689AD1",
      "symptom":"Acne",
      "value":"Present"
   },
   {
      "UUID":"247BCFF8-DA85-40EF-9761-1130C007DB37",
      "symptom":"MemoryLapse",
      "value":"Present"
   },
   {
      "UUID":"10E26490-8C77-4FCB-A60C-65162AD3D136",
      "symptom":"BladderIncontinence",
      "value":"Mild"
   },
   {
      "UUID":"E3131DF3-E2AE-442B-BA85-3F5133DF1959",
      "symptom":"Headache",
      "value":"Mild"
   },
   {
      "UUID":"FBA7B3BE-DCD9-4CA7-808F-02F05C89CEE4",
      "symptom":"Nausea",
      "value":"Mild"
   },
   {
      "UUID":"D7254BCE-B6F4-40DE-AA51-65F7A5BD29DA",
      "symptom":"HairLoss",
      "value":"Not Present"
   },
   {
      "UUID":"AB2E7756-3EB4-417F-9B9A-92C91B7B43E1",
      "symptom":"Bloating",
      "value":"Severe"
   },
   {
      "UUID":"CB03F534-C72A-4921-B024-4F68CAC8833B",
      "symptom":"Diarrhea",
      "value":"Severe"
   },
   {
      "UUID":"49432555-FB2E-454C-834E-F840974CFFEF",
      "symptom":"Chills",
      "value":"Severe"
   },
   {
      "UUID":"2F153EF5-52E0-4509-843A-42D64AC4E62C",
      "symptom":"DrySkin",
      "value":"Severe"
   },
   {
      "UUID":"02208A7A-CF3C-467D-9FED-20DA8A2547C3",
      "symptom":"VaginalDryness",
      "value":"Severe"
   },
   {
      "UUID":"7600148E-EAE8-4F83-997D-204408E6AC34",
      "symptom":"BreastPain",
      "value":"Severe"
   },
   {
      "UUID":"396995F7-7D94-4835-A733-4EB3887594FA",
      "symptom":"AppetiteChanges",
      "value":"Not Present"
   }
]
```
