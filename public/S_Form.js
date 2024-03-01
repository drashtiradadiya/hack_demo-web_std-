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

// select skills
output = "";
const projectTool = document.getElementById("projectTool");
var technicalSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "React.js",
  "AngularJS",
  "Vue.js",
  "Express.js",
  "D3.js",
  "jQuery",
  "TypeScript",
  "Webpack",
  "Babel",
  "SASS/LESS",
  "Bootstrap",
  "Material-UI",
  "MongoDB",
  "MySQL",
  "Firebase",
  "GraphQL",
  "RESTful APIs",
  "WebSocket",
  "Git/GitHub",
  "Responsive Design",
  "Microservices",
  "Docker",
  "Kubernetes",
  "AWS/Azure/GCP",
  "JSON/XML",
  "WebSockets",
  "WebRTC",
  "Service Workers",
  "IndexedDB/LocalStorage",
  "Web Accessibility (WCAG)",
  "Security Best Practices",
  "Data Structures & Algorithms",
  "Debugging & Profiling",
  "WebAssembly",
  "Blockchain Development (e.g., Ethereum)",
  "UI/UX Principles",
  "WebGL/Three.js",
  "Electron.js",
  "Cordova/PhoneGap",
  "Ionic Framework",
  "Unity WebGL",
  "TensorFlow.js",
  "Socket.io",
  "GraphQL",
  "RxJS",
  "Lodash",
  "Ramda",
  "Reactive Programming",
  "Functional Programming",
  "OAuth",
  "OAuth2",
  "Web Security",
  "CORS",
  "JWT",
  "WebSocket",
  "Electron",
  "Progressive Web Apps",
  "IndexedDB",
  "LocalStorage",
  "Web Performance Optimization",
  "Web Accessibility",
  "WebSockets",
  "Push Notifications",
  "Service Workers",
  "WebRTC",
  "React Native",
  "Expo",
  "NativeScript",
  "Flutter",
  "Ionic Framework",
  "Cordova/PhoneGap",
  "Java",
  "Spring Framework",
  "Spring Boot",
  "Hibernate",
  "JDBC",
  "JUnit",
  "Maven",
  "Gradle",
  "Apache Kafka",
  "JSP/Servlets",
  "JavaFX",
  "Swing",
  "C++",
  "STL",
  "Boost",
  "Qt",
  "MFC",
  "WinAPI",
  "OpenCV",
  "C",
  "POSIX",
  "Linux System Programming",
  "Embedded C",
  "RTOS",
  "Socket Programming",
  "Data Structures in C",
  "Algorithms in C",
];

output = `<option value="Select Skills">Select Your Skills</option>`;
for (let i = 0; i < technicalSkills.length; i++) {
  output += `<option value="${technicalSkills[i]}">${technicalSkills[i]}</option>`;
  projectTool.innerHTML = output;
}
