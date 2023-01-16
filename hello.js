// let div = document.getElementById('mydiv');
// alert(div);
// var query = document.querySelector('#menu .item span'),
// queryAll = document.querySelectorAll('#menu .item span');
// alert(query.innerHTML); // Affiche : "Élément 1"
// alert(queryAll.length); // Affiche : "2"
// alert(queryAll[0].innerHTML + ' - ' + queryAll[1].innerHTML);  

// let pp = document.getElementsByClassName('.paragraph');


// document.document.getElementsByClassName('.paragraph').style.backgroundColor = 'gray';
// alert('Current scroll from the top: ' + window.pageYOffset);
// alert('Current scroll from the left: ' + window.pageXOffset);

// let scrollHeight = Math.max(
//     document.body.scrollHeight, document.documentElement.scrollHeight,
//     document.body.offsetHeight, document.documentElement.offsetHeight,
//     document.body.clientHeight, document.documentElement.clientHeight
//   );
  
// //   alert('taille actuelle de l ecran ' + scrollHeight);
// function handle(evnt){
//     alert("l'événement resize a été déclenché." );
//     alert('taille actuelle de l ecran ' + scrollHeight);
//     return true;
//   }
//   window.onresize = handle;
// window.addEventListener("resize", function(e) {
//     alert("width: " + document.documentElement.clientWidth, "height :" + document.documentElement.clientHeight);
// })

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function resize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = resize;

function setColor(color) { 
    document.getElementById('idd').style.backgroundColor = color;
}