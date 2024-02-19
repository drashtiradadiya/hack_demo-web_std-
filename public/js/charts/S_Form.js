let plus_icon = document.querySelector("#plus_icon");
let education = document.querySelector("#education");

function add_eduForm() {
  let cloneDiv = education.cloneNode(true);
  education.before(cloneDiv);
}

$(document).on("click", "#closeBtn", function (e) {
  e.preventDefault();
  let remov_edu = $(this).parent().parent();
  $(remov_edu).remove();
});

plus_icon.addEventListener("click", add_eduForm);

document
  .getElementById("uploadForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append(
      "file",
      document.querySelector('input[type="file"]').files[0]
    );

    try {
      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
      });
      // Handle response from server
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  });
