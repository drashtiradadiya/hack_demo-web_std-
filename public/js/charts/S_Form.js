let plus_icon=document.querySelector("#plus_icon");
let education=document.querySelector("#education");

  function add_eduForm(){
    let cloneDiv = education.cloneNode(true);
    education.before(cloneDiv);
  }

$(document).on('click','#closeBtn',function(e){
  e.preventDefault();
  let remov_edu =$(this).parent().parent();
    $(remov_edu).remove();
});

plus_icon.addEventListener("click",add_eduForm);
