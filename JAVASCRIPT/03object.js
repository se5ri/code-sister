let patient = {
  name: "Jimin",
  age: 17,
  disease: "cold",
};
console.log(patient);
console.log(patient.name);
console.log(patient["name"]);
console.log(patient.age); // 17
console.log(patient["age"]); // 17

patient.name = "jk";
console.log(patient);
patient["age"] = 25;
console.log(patient);

let patientList = [
  { name: "Jimin", age: 17 },
  { name: "jk", age: 25 },
  { name: "Jhope", age: 40 },
];

console.log(patientList);

console.log("첫번째 환자는:", patientList[0]);
console.log("첫번째 환자의 나이는:", patientList[0].age);
console.log("첫번째 환자의 나이는:", patientList[0]["age"]);

console.log("두번째 환자는:", patientList[1]["name"]);
