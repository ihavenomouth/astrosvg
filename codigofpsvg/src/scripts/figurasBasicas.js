"use strict";

const init = () =>{

////////////////////////////
// Ejemplo 1: el viewport
////////////////////////////

frmEj1.txtWidthEj1.addEventListener('keyup',e=>{
  svgEj1.setAttribute("width", frmEj1.txtWidthEj1.value) ;
});

frmEj1.txtWidthEj1.addEventListener('change',e=>{
  svgEj1.setAttribute("width", frmEj1.txtWidthEj1.value) ;
});

frmEj1.txtHeightEj1.addEventListener('keyup',e=>{
  svgEj1.setAttribute("height", frmEj1.txtHeightEj1.value) ;
});

frmEj1.txtHeightEj1.addEventListener('change',e=>{
  svgEj1.setAttribute("height", frmEj1.txtHeightEj1.value) ;
});

////////////////////////////
// Ejemplo 2: el viewBox
////////////////////////////

frmEj2.txtWidthEj2.addEventListener('keyup',e=>{
  svgEj2.setAttribute("width", frmEj2.txtWidthEj2.value) ;
});

frmEj2.txtWidthEj2.addEventListener('change',e=>{
  svgEj2.setAttribute("width", frmEj2.txtWidthEj2.value) ;
});

frmEj2.txtHeightEj2.addEventListener('keyup',e=>{
  svgEj2.setAttribute("height", frmEj2.txtHeightEj2.value) ;
});

frmEj2.txtHeightEj2.addEventListener('change',e=>{
  svgEj2.setAttribute("height", frmEj2.txtHeightEj2.value) ;
});



//El  viewBox

const cambiarViewBoxSvgEj2=()=>{
  svgEj2.setAttribute("viewBox", `${frmEj2.txtXVBEj2.value} ${frmEj2.txtYVBEj2.value} ${frmEj2.txtWidthVBEj2.value} ${frmEj2.txtHeightVBEj2.value}`) ;


  svgEj2Fondo.setAttribute("x", frmEj2.txtXVBEj2.value);
  svgEj2Fondo.setAttribute("y", frmEj2.txtYVBEj2.value);
  svgEj2Fondo.setAttribute("width", frmEj2.txtWidthVBEj2.value);
  svgEj2Fondo.setAttribute("height",frmEj2.txtHeightVBEj2.value);

  preEj2.innerText=`<svg id="svgEj2" viewBox="${frmEj2.txtXVBEj2.value} ${frmEj2.txtYVBEj2.value} ${frmEj2.txtWidthVBEj2.value} ${frmEj2.txtHeightVBEj2.value}" 
  preserveAspectRatio="xMinYMid slice"
  width="100" height="100" fill="currentcolor">
  <circle cx="50" cy="50" r="50"/>

  </svg>`;

}


frmEj2.txtWidthVBEj2.addEventListener('keyup',e=>{
  cambiarViewBoxSvgEj2();
});

frmEj2.txtWidthVBEj2.addEventListener('change',e=>{
  cambiarViewBoxSvgEj2();
});

frmEj2.txtHeightVBEj2.addEventListener('keyup',e=>{
  cambiarViewBoxSvgEj2();
});

frmEj2.txtHeightVBEj2.addEventListener('change',e=>{
  cambiarViewBoxSvgEj2();
});




frmEj2.txtXVBEj2.addEventListener('keyup',e=>{
  cambiarViewBoxSvgEj2();
});

frmEj2.txtXVBEj2.addEventListener('change',e=>{
  cambiarViewBoxSvgEj2();
});
frmEj2.txtYVBEj2.addEventListener('keyup',e=>{
  cambiarViewBoxSvgEj2();
});

frmEj2.txtYVBEj2.addEventListener('change',e=>{
  cambiarViewBoxSvgEj2();
});


////////////////////////////
// Ejemplo 3: el rectángulo
////////////////////////////
const cambiarEjRect=()=>{
  svgEjRect.setAttribute("x", frmEjRect.txtXEjRect.value);
  svgEjRect.setAttribute("y", frmEjRect.txtYEjRect.value);
  svgEjRect.setAttribute("width", frmEjRect.txtWidthEjRect.value);
  svgEjRect.setAttribute("height",frmEjRect.txtHeightEjRect.value);

//   &lt;svg width="100" height="100" fill="var(--primary)" stroke="var(--accent)" stroke-width="2"&gt;
//   &lt;rect id="svgEjRect" x="10" y="10" width="50" height="50"/&gt;
// &lt;/svg&gt;

  preEjRect.innerText=`${svgEjRect.outerHTML.replaceAll(" ","\n")}`;
}

frmEjRect.txtWidthEjRect.addEventListener('input',e=>{
  cambiarEjRect();
});
frmEjRect.txtHeightEjRect.addEventListener('input',e=>{
  cambiarEjRect();
});
frmEjRect.txtXEjRect.addEventListener('input',e=>{
  cambiarEjRect();
});
frmEjRect.txtYEjRect.addEventListener('input',e=>{
  cambiarEjRect();
});
preEjRect.innerText=`${svgEjRect.outerHTML.replaceAll(" ","\n")}`;


////////////////////////////
// Ejemplo: el círculo
////////////////////////////
const cambiarSvgEjCircle=()=>{
  svgEjCircle.innerHTML = txtEjCircle.value;
}

txtEjCircle.addEventListener('keyup',e=>{
  cambiarSvgEjCircle();
});
cambiarSvgEjCircle();


////////////////////////////
// Ejercicios:
////////////////////////////

//Ejercicio 1
const cambiarSvgEjercicio1=()=>{
  svgEjercicio1.innerHTML = txtEjercicio1.value;
}

txtEjercicio1.addEventListener('keyup',e=>{
  cambiarSvgEjercicio1();
});
cambiarSvgEjercicio1();

//Ejercicio 2
const cambiarSvgEjercicio2=()=>{
  svgEjercicio2.innerHTML = txtEjercicio2.value;
}

txtEjercicio2.addEventListener('keyup',e=>{
  cambiarSvgEjercicio2();
});
cambiarSvgEjercicio2();

//Ejercicio 3
const cambiarSvgEjercicio3=()=>{
  svgEjercicio3.innerHTML = txtEjercicio3.value;
}

txtEjercicio3.addEventListener('keyup',e=>{
  cambiarSvgEjercicio3();
});
cambiarSvgEjercicio3();



//Ejercicio 4
const cambiarSvgEjercicio4=()=>{
  svgEjercicio4.innerHTML = txtEjercicio4.value;
}

txtEjercicio4.addEventListener('keyup',e=>{
  cambiarSvgEjercicio4();
});
cambiarSvgEjercicio4();

//Ejercicio 5
const cambiarSvgEjercicio5=()=>{
  svgEjercicio5.innerHTML = txtEjercicio5.value;
}

txtEjercicio5.addEventListener('keyup',e=>{
  cambiarSvgEjercicio5();
});
cambiarSvgEjercicio5();



  // Clean up by destroying instances and removing event listeners
  document.addEventListener('astro:before-swap', () => {
    // SomeClass.destroy()
    // document.removeEventListener(...)
  }, { once: true })


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