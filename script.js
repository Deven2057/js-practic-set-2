//ente age and your licence is regester


let runAgain = true;

const canDrive = (age) => {
  return age >= 18 ? true : false
}



while (runAgain) {
  let age = prompt("Enter your age:")
  age = Number.parseInt(age)
  if(age<0){
    console.error("enter valid age.")
    break;
  }
  if (canDrive(age)) {
    alert("yes you can drive")
  }
  else {
    alert("you can't drive")
  }
  runAgain = confirm("want to play again?")
}


//...................go to google


let number=prompt("enter the number:")
number=parseInt(number)

if(number>4){
  location.href="https://google.com"
}

//   ...........>change the background color

let color=prompt("enter the color name")
document.body.style.background=color
