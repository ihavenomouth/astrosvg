"use strict";

const init = () =>{

function play(svg) {
  svg.firstElementChild.classList = "path-animado";
  requestAnimationFrame((time) => {
    requestAnimationFrame((time) => {
      svg.firstElementChild.classList = "path-animado cambiando";
    });
  });
}



btnRepetirAnim1.addEventListener("click", e=>{
  play(svg1);
});



txtDasharray.addEventListener("change", e=>{
  svg2.firstElementChild.style= "stroke-dasharray:"+txtDasharray.value + ';'+ "stroke-dashoffset:"+txtDashoffset.value+';';
});
txtDasharray.addEventListener("keyup", e=>{
  svg2.firstElementChild.style= "stroke-dasharray:"+txtDasharray.value + ';'+ "stroke-dashoffset:"+txtDashoffset.value+';';
});

txtDashoffset.addEventListener("change", e=>{
  svg2.firstElementChild.style= "stroke-dasharray:"+txtDasharray.value + ';'+ "stroke-dashoffset:"+txtDashoffset.value+';';
});
txtDashoffset.addEventListener("keyup", e=>{
  svg2.firstElementChild.style= "stroke-dasharray:"+txtDasharray.value + ';'+ "stroke-dashoffset:"+txtDashoffset.value+';';
});

////////////////
// Anim 3
/////////////////

function playFill(svg) {
  svg.classList = "";
  requestAnimationFrame((time) => {
    requestAnimationFrame((time) => {
      svg.classList = "cambiando";
    });
  });
}

btnRepetirAnim3.addEventListener("click", e=>{
  play(svg3);
  playFill(svg3);
});


}
init();



//////////////////////////////////////
// VIEW TRANSITION
/////////////////////////////////////

// En Astro si se usa el ViewTransition hay que volver a cargar lo que sea necesarios, por
// el cambio de página desaparecen los elementos y se vuelven null
document.addEventListener('astro:after-swap', () => {
  init();
});