var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
  //IMPORTANT <----
  //console.log(element) 
  // TODO: Complete function
  if (element.getAttribute("data-state") === "hidden"){
    element.textContent = element.dataset.number;
    element.dataset.state = "shown";
  } else { 
    element.textContent = " ";
    element.dataset.stae = "hiddden";
  }
});
