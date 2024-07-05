"use strict";

const init = () => {
  ////////////////////////////
  // Ejemplo 1, 2 y 3: primeras órdenes
  ////////////////////////////
  const txtEjPath1 = document.querySelector("#txtEjPath1");
  //NOTA: este condicional es para evitar el error del viewTransition, que al pasar a otra página se borra el contenido y los elementos se vuelven null
  if (txtEjPath1) {
    txtEjPath1.addEventListener("keyup", e => {
      svgEjPath1.innerHTML = txtEjPath1.value;
    });
    svgEjPath1.innerHTML = txtEjPath1.value;

    txtEjPath2.addEventListener("keyup", e => {
      svgEjPath2.innerHTML = txtEjPath2.value;
    });
    svgEjPath2.innerHTML = txtEjPath2.value;

    txtEjPath3.addEventListener("keyup", e => {
      svgEjPath3.innerHTML = txtEjPath3.value;
    });
    svgEjPath3.innerHTML = txtEjPath3.value;

    txtEjPath4.addEventListener("keyup", e => {
      svgEjPath4.innerHTML = txtEjPath4.value;
    });
    svgEjPath4.innerHTML = txtEjPath4.value;

    ////////////////////////////
    // Ejemplo curva Q
    ////////////////////////////

    // txtEjPath4.addEventListener('keyup',e=>{
    //   svgEjPath4.innerHTML = txtEjPath4.value;
    // });
    // svgEjPath4.innerHTML = txtEjPath4.value;

    const cambiarEjCurvaQ = () => {
      document
        .querySelector("#svgEjCurvaQQ")
        .setAttribute("d", `M20 80 Q ${frmEjCurvaQ.txtXEjQ.value} ${frmEjCurvaQ.txtYEjQ.value} 80 80`);

      // svgEjCurvaQQ.setAttribute("d", `M20 80 Q ${frmEjCurvaQ.txtXEjQ.value} ${frmEjCurvaQ.txtYEjQ.value} 80 80`);
      svgEjCurvaQCircle.setAttribute("cx", frmEjCurvaQ.txtXEjQ.value);
      svgEjCurvaQCircle.setAttribute("cy", frmEjCurvaQ.txtYEjQ.value);

      if (txtLineasEjQ.checked) {
        svgEjCurvaQ.firstElementChild.setAttribute("x2", frmEjCurvaQ.txtXEjQ.value);
        svgEjCurvaQ.firstElementChild.setAttribute("y2", frmEjCurvaQ.txtYEjQ.value);
        svgEjCurvaQ.firstElementChild.setAttribute("stroke", "white");
        svgEjCurvaQ.firstElementChild.nextElementSibling.setAttribute("x1", frmEjCurvaQ.txtXEjQ.value);
        svgEjCurvaQ.firstElementChild.nextElementSibling.setAttribute("y1", frmEjCurvaQ.txtYEjQ.value);
        svgEjCurvaQ.firstElementChild.nextElementSibling.setAttribute("stroke", "white");
      } else {
        svgEjCurvaQ.firstElementChild.setAttribute("stroke", "none");
        svgEjCurvaQ.firstElementChild.nextElementSibling.setAttribute("stroke", "none");
      }
      // svgEjCurvaQ-Q.setAttribute("y", frmEjCurvaQ.txtYEjQ.value);

      // preEjCurvaQ.innerText=`${svgEjCurvaQ.outerHTML.replaceAll(" ","\n")}`;
      preEjCurvaQ.innerText = `${svgEjCurvaQ.outerHTML.replaceAll(">", ">\n")}`;
    };

    frmEjCurvaQ.txtXEjQ.addEventListener("input", e => {
      cambiarEjCurvaQ();
    });
    frmEjCurvaQ.txtYEjQ.addEventListener("input", e => {
      cambiarEjCurvaQ();
    });
    frmEjCurvaQ.txtLineasEjQ.addEventListener("click", e => {
      cambiarEjCurvaQ();
    });
    preEjCurvaQ.innerText = `${svgEjCurvaQ.outerHTML.replaceAll(">", ">\n")}`;

    ////////////////////////////
    // Ejemplo curva C
    ////////////////////////////

    // txtEjPath4.addEventListener('keyup',e=>{
    //   svgEjPath4.innerHTML = txtEjPath4.value;
    // });
    // svgEjPath4.innerHTML = txtEjPath4.value;

    const cambiarEjCurvaC = () => {
      svgEjCurvaCC.setAttribute(
        "d",
        `M20 60 C ${frmEjCurvaC.txtXEjC.value} ${frmEjCurvaC.txtYEjC.value} ${frmEjCurvaC.txtXEjC2.value} ${frmEjCurvaC.txtYEjC2.value} 80 60`
      );
      svgEjCurvaCCircle1.setAttribute("cx", frmEjCurvaC.txtXEjC.value);
      svgEjCurvaCCircle1.setAttribute("cy", frmEjCurvaC.txtYEjC.value);
      svgEjCurvaCCircle2.setAttribute("cx", frmEjCurvaC.txtXEjC2.value);
      svgEjCurvaCCircle2.setAttribute("cy", frmEjCurvaC.txtYEjC2.value);

      if (txtLineasEjC.checked) {
        svgEjCurvaC.firstElementChild.setAttribute("x2", frmEjCurvaC.txtXEjC.value);
        svgEjCurvaC.firstElementChild.setAttribute("y2", frmEjCurvaC.txtYEjC.value);
        svgEjCurvaC.firstElementChild.setAttribute("stroke", "white");
        svgEjCurvaC.firstElementChild.nextElementSibling.setAttribute("x1", frmEjCurvaC.txtXEjC2.value);
        svgEjCurvaC.firstElementChild.nextElementSibling.setAttribute("y1", frmEjCurvaC.txtYEjC2.value);
        svgEjCurvaC.firstElementChild.nextElementSibling.setAttribute("stroke", "white");
      } else {
        svgEjCurvaC.firstElementChild.setAttribute("stroke", "none");
        svgEjCurvaC.firstElementChild.nextElementSibling.setAttribute("stroke", "none");
      }

      preEjCurvaC.innerText = `${svgEjCurvaC.outerHTML.replaceAll(">", ">\n")}`;
    };

    frmEjCurvaC.txtXEjC.addEventListener("input", e => {
      cambiarEjCurvaC();
    });
    frmEjCurvaC.txtYEjC.addEventListener("input", e => {
      cambiarEjCurvaC();
    });
    frmEjCurvaC.txtXEjC2.addEventListener("input", e => {
      cambiarEjCurvaC();
    });
    frmEjCurvaC.txtYEjC2.addEventListener("input", e => {
      cambiarEjCurvaC();
    });
    frmEjCurvaC.txtLineasEjC.addEventListener("click", e => {
      cambiarEjCurvaC();
    });
    preEjCurvaC.innerText = `${svgEjCurvaC.outerHTML.replaceAll(">", ">\n")}`;

    ////////////////////////////
    // Ejercicios de curvas
    ////////////////////////////
    txtEjPathCurvas1.addEventListener("keyup", e => {
      svgEjPathCurvas1.innerHTML = txtEjPathCurvas1.value;
    });
    svgEjPathCurvas1.innerHTML = txtEjPathCurvas1.value;

    txtEjPathCurvas2.addEventListener("keyup", e => {
      svgEjPathCurvas2.innerHTML = txtEjPathCurvas2.value;
    });
    svgEjPathCurvas2.innerHTML = txtEjPathCurvas2.value;
  }
};
init();

//////////////////////////////////////
// VIEW TRANSITION
/////////////////////////////////////

// En Astro si se usa el ViewTransition hay que volver a cargar lo que sea necesarios, por
// el cambio de página desaparecen los elementos y se vuelven null
document.addEventListener("astro:after-swap", () => {
  init();
});
