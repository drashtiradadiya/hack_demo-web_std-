// select states
let output = "";
const selectState = document.getElementById("state");
var state_arr = [
  "Andaman & Nicobar",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra & Nagar Haveli",
  "Daman & Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu & Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Orissa",
  "Pondicherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Tripura",
  "Uttar Pradesh",
  "Uttaranchal",
  "West Bengal",
];
output = `<option value="Select_State">Select Your State</option>`;
for (let i = 0; i < state_arr.length; i++) {
  output += `<option value="${state_arr[i]}">${state_arr[i]}</option>`;
  selectState.innerHTML = output;
}
