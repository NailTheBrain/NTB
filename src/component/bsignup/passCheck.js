// 1 Number
// 2 Capital number
// 3 Small letter
// 4 Symbol

export  function passCheck(value) {
    var textShow = document.querySelectorAll(".passmsg");
  if (value.match(/[a-z]/)) {
    textShow[3].style.display = "none";
  } else {
    textShow[3].style.display = "block";
  }
  if (value.match(/[0-9]/)) {
    textShow[1].style.display = "none";
  } else {
    textShow[1].style.display = "block";
  }
  if (value.match(/[A-Z]/)) {
    textShow[2].style.display = "none";
  } else {
    textShow[2].style.display = "block";
  }
  if (value.match(/[^A-z0-9]/)) {
    textShow[4].style.display = "none";
  } else {
    textShow[4].style.display = "block";
  }
  if (value.length >= 8) {
    textShow[0].style.display = "none";
  } else {
    textShow[0].style.display = "block";
  }
  return (
    (value.match(/[A-z0-9]/) && value.length >= 8 && value.match(/[^A-z0-9]/))?true:false
  );
}

export function showCall(e){
    if(e.classList.contains("fa-eye")){
        e.classList.remove("fa-eye")
        e.classList.add("fa-eye-slash")
       e.parentElement.firstElementChild.type = "text";
    }else{
      e.classList.add("fa-eye");
      e.classList.remove("fa-eye-slash");
      e.parentElement.firstElementChild.type="password"
    }
}
