let buttonELement = document.getElementById('thumbs-up-button');
const displayText = document.getElementById('displayText');
let diplayhovertextElement = document.getElementById("displayhovertext");
let counter=0;

buttonELement.addEventListener('mouseover', () => {
  displayText.style.display = 'block';
});

buttonELement.addEventListener('mouseout', () => {
  displayText.style.display = 'none';
});
let clickedcount = function(){
    console.log("clickedcount");
    counter=counter+1;
    diplayhovertextElement.textContent=counter;
    if (counter %2 === 0) {
        buttonELement.style.color="white";
    } else{
        buttonELement.style.color= "#000";
    }
    
};
