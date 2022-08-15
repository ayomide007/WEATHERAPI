//setting ID into Classnames into Vafriables ....
const input = document.querySelector('.input_text'); 
const main = document.querySelector('#name');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const clouds = document.querySelector('.clouds');
const button= document.querySelector('.submit');


button.addEventListener('click', function(name){ // Event handler for the button.
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=5df19dda1b4cca70d2dc767ada991740&units=metric') 
.then(response => response.json())  // promise
.then(data => {
  let tempValue = data['main']['temp'] ;  // .
  let nameValue = data['name'];
  let descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Today's - "+descValue;
  temp.innerHTML = "Temperature - "+tempValue + " Celcius";
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})