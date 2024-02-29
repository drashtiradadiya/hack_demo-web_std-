function validateUpdateForm(section){
    const formData={
        first_Name: document.getElementById('fname').value,
        last_Name: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        date_of_birth: document.getElementById('dob').value,
        phone_no: document.getElementById('phone_no').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zip: document.getElementById('zip').value,
        branch: document.getElementById('branch').value,
        semester: document.getElementById('semester').value,
        experience: document.getElementById('experience').value,
        degreeName: document.getElementById('degreeName').value,
        degreeStatus: document.getElementById('status').value,
        university: document.getElementById('university').value,
        Completionyear: document.getElementById('year').value,
        cgpa: document.getElementById('cgpa').value,
        percentage: document.getElementById('percentage').value,
        companyName: document.getElementById('company').value,
        experienceCompany: document.getElementById('experienceCompany').value,
        jobType: document.getElementById('jobType').value,
        startDate: document.getElementById('startDate').value,
        endDate: document.getElementById('endDate').value,
        tool: document.getElementById('tool').value,
        interpersonal: document.getElementById('interpersonal').value,
        percentage_tech: document.getElementById('percentage_tech').value,
        percentage_inter: document.getElementById('percentage_inter').value,
        projectName: document.getElementById('projectName').value,
        projectDes: document.getElementById('projectDes').value,
        projectTool: document.getElementById('projectTool').value,

    }
    fetch(`http://localhost:8001/update?enrollment_No=${enrollment_No}`, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData),


})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log("fet")
        return response.json();
    })
    .then(data => {
        console.log('Server response:', data);
        window.location.href = `/index?enrollment_No=${enrollment_No}`;

        // Handle successful response from the server
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        console.log("error")
        // Handle errors
    });
return true; // Assuming the form submission will proceed asynchronously\

}
document.getElementById('submit_about').addEventListener("click", function () {
    validateUpdateForm('about');
});
document.getElementById('submit_exp').addEventListener("click", function () {
    validateUpdateForm('Experience');
});
document.getElementById('submit_Edu').addEventListener("click", function () {
    validateUpdateForm('Degree');
});
document.getElementById('submit_Skills').addEventListener("click", function () {
    validateUpdateForm('Skill');
});
document.getElementById('submit_Achievement').addEventListener("click", function () {
    validateUpdateForm('Achievement');
});


