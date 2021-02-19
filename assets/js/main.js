/*****************************form initial*****************************/
resposta = confirm("Deseja responder o formulário?")
  
  if (resposta == true) {
      msg = window.prompt(`Digite apenas seu nome:`)
  } else {window.document.getElementById('name').innerText("")
           
}
 
  window.document.getElementById('name').value = msg
  window.document.getElementById('surname').focus()
  
/******************************slide photo******************************/
let images = ['bday.jpg','dream.jpg','time.png','travel.jpg',
'music01.jpg','food.jpg','books.jpg','sunset.jpg']

let i = 0
let canvas = window.document.getElementById('canvas')
canvas.style.background = `url(./assets/images/${images[i]})`

let arrows = window.document.querySelectorAll('.arrow')
arrows.forEach(function(arrow){
    arrow.addEventListener('click',function(e){
        if(e.target.id === "left"){
            i--;
            if(i < 0){
                i = images.length -1
            }
            canvas.style.background = `url(./assets/images/${images[i]})`
        }else if(e.target.id === "right"){
            i++;
            if(i>= images.length){
                i = 0;
            }canvas.style.background = `url(./assets/images/${images[i]}`                
        }
    })
})

/**********************************Font**********************************/
window.onload = function() {
    var elementBody = document.querySelector('body');
    var elementBtnIncreaseFont = document.getElementById('increase-font');
    var elementBtnDecreaseFont = document.getElementById('decrease-font');

    var fontSize = 100;

    var increaseDecrease = 20;

    elementBtnIncreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize + increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });

    elementBtnDecreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize - increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });
}

/*****************************accessibility*****************************/
const button = window.document.querySelector('button')
const body = window.document.querySelector('body')
const colors = ['#E6DA7D','#AD4DE0','#DB4E7B','#F5895D','#fff']

body.style.background = 'write';
button.addEventListener('click', changeColour);

function changeColour(accessibility){
    const color = parseInt(Math.random()*colors.length)
    body.style.background = colors[color]
}
