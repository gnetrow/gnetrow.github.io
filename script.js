console.log("woop");

const theButton = document.getElementById("button");
theButton.addEventListener("click", function() { 
    alert("you clicked the buttoon");
    });

 const dinogif = document.getElementById("gif");
dinogif.addEventListener("mouseover", function() { 
    alert("you moused the dinosaur");
    });
    


window.addEventListener("keypress", function() {
    this.alert("why do u press keys");
});

window.addEventListener("load", function() {
    this.alert("woah");
});
window.addEventListener("resize", function() {
    this.alert("STOP");
});

function changeText() {
    document.getElementById("firstparagraph").innerHTML= "<p> i hate javascript </p>";
    document.getElementById("firstparagraph").style.color= "green";
    document.getElementById("firstparagraph").style.fontSize= "57px";
    document.getElementById("firstparagraph").style.backgroundColor= "orange";
}

function changeColor(elementID,fontSize, textAlign) {
	const element=
    document.getElementById(elementID)
    element.style.color="red";
    element.style.fontSize= fontSize;
    element.style.textAlign= textAlign;
}

function changeBackground(elementID){
    const element = document.getElementById(elementID)
    if (element && element.id === "h1maybe") {
        element.style.opacity="60px"
      } else if (element && element.id === "h2maybe") {
        element.style.fontSize="35px"
      } else {
        element.style.color="red"
      }
  
}

function idek(elementID){
    const element= document.getElementById(elementID)
    if (element && element.id === "blah") {
        if (element.style.color === "black") {
          element.style.color = 'red';
        } 
  else if (element.style.color === "red") {
      element.style.color= "purple";
  }
  else {
          element.style.color = 'black';
        }
  
}
}
