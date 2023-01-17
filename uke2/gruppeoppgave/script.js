function copyImage(){
const imgsrc1= document.getElementById('nike').src;
const copied= document.getElementById ('copied');
copied.innerHTML += `<img src="${imgsrc1}">`;
}

function copyImage2(){
    const imgsrc2= document.getElementById('dame').src;
    const copied2= document.getElementById ('copied');
    copied2.innerHTML += `<img src="${imgsrc2}">`;
}

function copyImage3(){
    const imgsrc3= document.getElementById('adidas').src;
    const copied3= document.getElementById ('copied');
    copied3.innerHTML += `<img src="${imgsrc3}">`;
    }


function reset() {
        document.getElementById('copied').innerHTML = ``
    }