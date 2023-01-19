function copyImage(){
const imgsrc1= document.getElementById('nike').src;
const copied= document.getElementById ('copied');
let price1= document.getElementById ('price1').textContent;
copied.innerHTML += `<div><img src="${imgsrc1}">Price (Nike): ${price1}</div>`;
}

function copyImage2(){
    const imgsrc2= document.getElementById('dame').src;
    const copied2= document.getElementById ('copied');
    let price2=  document.getElementById ('price2').textContent;
    copied2.innerHTML += `<div><img src="${imgsrc2}">Price (Damesko): ${price2} </div>`;
    
}

function copyImage3(){
    const imgsrc3= document.getElementById('adidas').src;
    const copied3= document.getElementById ('copied');
    let price3=  document.getElementById ('price3').textContent;
    copied3.innerHTML += `<div><img src="${imgsrc3}">Price (Adidas): ${price3}</div>`;
    
    }


function reset() {
        document.getElementById('copied').innerHTML = ``;
        
    }

function toggleShow() {
        var x = document.getElementById("copied")
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display ="none";
        }
       
    }

  