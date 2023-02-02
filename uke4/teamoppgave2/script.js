// const hungerBarDiv = document.querySelector('#hungryBar');
// const happinessBarDiv = document.querySelector('#happinessBar');
let v1 = document.getElementById("hungryBar").value;
let v2 = document.getElementById("happinessBar").value;
let days = document.getElementById("days");
let ImageId=  document.getElementById("img_index2").src

let myDays = "";
let numDays = 0;


let petName = prompt('What is pets name');
document.getElementById("petNames").innerHTML=` <b>I am</b> ${petName}` 
 



// this increases the hungry bar by 5 points
function feed() {
    if (v1 < 95) {
      document.getElementById("hungryBar").value = v1 += 5;
    } 
    
    else if (v1 > 10 && myDays >= 3){
      document.getElementById("img_index2").src = "img/caterpillar.png";
    

    }
    
    else {
      document.getElementById("hungryBar").value = v1 += 0;
    }
   
  }
  
  // this increases the happinies bar by 5 points
  function play() {
    if (v2 < 95) {
      document.getElementById("happinessBar").value = v2 += 5;
    } else {
      document.getElementById("happinessBar").value = v2 += 0;
    }
  }

  function changeImg() {
     if (numDays === 3) {
      document.getElementById("img_index2").src = "img/caterpillar.png";
    }

    if (numDays === 6) {
      document.getElementById("img_index2").src = "img/butterflies.png";
    }
    
    if (numDays >= 10) {
      clearInterval(myIntervalV1);
      clearInterval(myIntervalV2);
      clearInterval(myDays);
      document.getElementById('farge').style.backgroundImage = '';
      document.getElementById("petNames").innerHTML = "";
      document.getElementById("days").innerHTML = "Congratulations, You won!!"
      document.getElementById("img_index2").src ="img/butterfly.gif";
    }
  }
  daysGone();
  function daysGone() {
    numDays++;
    days.innerHTML = `Day: ${numDays}`;
    changeImg();
    console.log(numDays);
  }
  
  /* This decreases the hungry bar */
  function hungryDecr() {
    if (v1 > 0) {
      document.getElementById("hungryBar").value = v1 -= 3;
      if (v1 < 10){
      document.getElementById("img_index2").src ="img/deadbutterfly.gif";
      document.getElementById ('farge').style.backgroundImage = 'url(img/purple.jpg)';
      document.getElementById("petNames").innerHTML=` I'm about to die`;
      } else if (v1 > 5 ){
        // document.getElementById("img_index2").src = "img/caterpillar.png";
        document.getElementById('farge').style.backgroundImage = ''
        document.getElementById("petNames").innerHTML = `I am ${petName}`
      }

      

      // if (v1 > 10){
      //   document.getElementById('farge').src = 'url(img/Rainbow Blue (1).jpg)'
      // }   //de to siste IF setningene har ingenting med KNAPPEN å gjøre
    } else {
      clearInterval(myIntervalV1);
      clearInterval(myIntervalV2);
      clearInterval(myDays);
      document.getElementById('days').innerHTML = "Game Over";  
      document.getElementById("img_index2").src ="img/skeleton.gif";    //.style.backgroundImage
      document.getElementById ('farge').style.backgroundImage= 'url(img/brown.jpg)';
      document.getElementById('farge').style.color = 'white'
      document.getElementById("petNames").innerHTML=`` 
            
    }
}
  
  
  // this decreases the play bar
function playDecr() {
    if (v2 > 0) {
      document.getElementById("happinessBar").value = v2 -= 1;
    } 
    if(v2==0) {
      clearInterval(myIntervalV2);
      clearInterval(myIntervalV1);
      clearInterval(myDays);
      document.getElementById('days').innerHTML = "Game Over";  
      document.getElementById("img_index2").src ="img/skeleton.gif";    //.style.backgroundImage
      document.getElementById ('farge').style.backgroundImage= 'url(img/brown.jpg)';
      document.getElementById('farge').style.color = 'white'
      document.getElementById("petNames").innerHTML=``
      
    
    }
    
  }

  decayValues();
function decayValues() {
  myIntervalV1 = setInterval(hungryDecr, 400);
  myIntervalV2 = setInterval(playDecr, 400);
  myDays = setInterval(daysGone, 2000);
}


function gameOver(){
if(v1==0 || v2==0){
  

}

}

// setInterval(function() {
//     hunger -= 1;
//     happiness -= 1;

//     hungerBarDiv.value = hunger;
//     happinessBarDiv.value = happiness;

//     if (hunger === 0 || happiness === 0) {
//         alert('Is dead :/');
//     }
// }, 1000);






