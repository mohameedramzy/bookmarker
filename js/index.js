var bookMarkNameInput = document.getElementById("inputName")
var bookMarkUrlInput = document.getElementById("inputUrl")
var submitBookMarkInput = document.getElementById("submit")
var bookMarkContainer = [] 
// var bookMarkNameContainer = []
// var bookMarkUrlContainer = []


if(localStorage.getItem("user")!= null ){
  bookMarkContainer = JSON.parse(localStorage.getItem("user"))
  displayBookMark() 
}




function addBookMark() {

  if (validationBookMarkName() && validationBookMarkUrl()) {
    var bookInfo ={ 
      name : bookMarkNameInput.value,
      url : bookMarkUrlInput.value
    }
      if (bookInfo) {
    
        bookMarkContainer.push(bookInfo)
        localStorage.setItem("user", JSON.stringify(bookMarkContainer))
        displayBookMark()
        clearInput()
      
      }
  }
 else {
    displayBookMark()
    alert("Bookmark Name  or Bookmark Website URL Is Not Correct! 🛑")
  }
}

function clearInput() {
      bookMarkNameInput.value = ""
    bookMarkUrlInput.value = ""
}


function displayBookMark() {
  var bookMarkBox = ""
  if (bookMarkContainer.length == 0) {
    document.getElementById("tableContent").innerHTML = `
    <tr>
    <td colspan="4" class="fw-bold">Bookmark Is Empty !</td>
    </tr>`
  } else {
    for (var i = 0; i < bookMarkContainer.length ; i++) {
      bookMarkBox += `
            <tr>
                <td>${i + 1}</td>
                <td class=" fw-bold"><span>${bookMarkContainer[i].name}</span></td>              
            <td>
              <a onclick="toUrl('${bookMarkContainer[i].url}')" class="btn btn-success" >
                <i class="fa-solid fa-eye pe-2"></i>
                Visit
              </a>
            </td>
            <td>
              <button class="btn btn-danger pe-2" onclick="deleteBookMark(${i})" >
                <i class="fa-solid fa-trash-can" )"></i>
                Delete
              </button>
            </td>
            </tr>
        `
    }
    document.getElementById("tableContent").innerHTML = bookMarkBox;
  }
}



function deleteBookMark(index) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1200
    });
      bookMarkContainer.splice(index,1)
      localStorage.setItem("user", JSON.stringify(bookMarkContainer))
      displayBookMark() 
    }
  });

}



function toUrl(link) {
  window.open(link)
}

function validationBookMarkName() {
  var regex = /^[a-z\sA-z]{4,15}$/gm;
  var test = bookMarkNameInput.value;
  if (regex.test(test)) {
      bookMarkNameInput.classList.remove("is-invalid")
      bookMarkNameInput.classList.add("is-valid")
      return true;

  } else {
      bookMarkNameInput.classList.add("is-invalid")
      bookMarkNameInput.classList.remove("is-valid")

      return false;
  }
}

function validationBookMarkUrl(){
  var term = /^(https:\/\/|https:\/\/www.|http:\/\/|http:\/\/www.)[a-zA-Z0-9]+(.com)$/gm  ;
   var urlinput = bookMarkUrlInput.value ;
  if(term.test(urlinput)){
      bookMarkUrlInput.classList.remove("is-invalid")
  bookMarkUrlInput.classList.add("is-valid")
  document.querySelector('.input-url span').classList.remove('invalid-feedback')
  document.querySelector('.input-url span').classList.add('d-none')

  return true
  
  }else{
      bookMarkUrlInput.classList.add("is-invalid")
      bookMarkUrlInput.classList.remove("is-valid")
      document.querySelector('.input-url span').classList.add('invalid-feedback')
      document.querySelector('.input-url span').classList.remove('d-none')
  return false ;
  
  }
  }


  function MESAGE() {

} 