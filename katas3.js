const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

// showResults recebe o parametro. 
// parametro é o valor do resultado do kata
// innerText vai renderizar meu parametro como texto

function showResults(parametro) {
    
    const base = document.getElementById("base")
    const para = document.createElement("p")
    /* O código abaixo altera a forma que o navegador mostra minha array de resultados,
    porém não funciona quando preciso mostrar somente um elemento
    
    parametro = parametro.join(", "); 
    
    */
    para.innerText = `O resultado é ${parametro}`
    base.appendChild(para)
}



function kata1() {
    let counter = []
  let i = 0
  
    for (let a = 1; a <= 25; a++){
      counter[i++] = a
    
    } 
    showResults(counter)
    return counter
}
kata1();

function kata2() {
  let counter = []
  let i = 0
  
    for (let a = 25; a >= 1; a--){
      counter[i++] = a
    
    } 
    showResults(counter)
    return counter
}
kata2();

function kata3() {
 let counter = []
  let i = 0
  
    for (let a = 1; a <= 25; a++){
      counter[i++] = (a*-1)
    
    } 
    showResults(counter)
    return counter
}
kata3();

function kata4() {
let counter = []
  let i = 0
  
    for (let a = 25; a >= 1; a--){
      counter[i++] = (a*-1)
    
    } 
    showResults(counter)
    return counter    
}
kata4();

function kata5() {
    let counter = []
   let i = 0
   for (let a = 25; a >= -25; a--){
      if(a % 2 == 0) {
        continue;
    }  else {
        counter[i++]= a 
    }
  }
    showResults(counter)
    return counter
}
kata5();


function kata6() {
let counter = []
   let i = 0
   for (let a = 1; a <= 100; a++){
      if(a % 3 == 0) {
        counter[i++]= a 
    } else {
        continue;
    }
  }
    showResults(counter)
    return counter
}

kata6();
function kata7() {
let counter = []
   let i = 0
   for (let a = 1; a <= 100; a++){
      if(a % 7 == 0) {
        counter[i++]= " " + a 
    } else {
        continue;
    }
  }
    showResults(counter)
    return counter
}

kata7();

function kata8() {
let counter = []
   let i = 0
   for (let a = 100; a >= 0; a--){
      if(a % 3 == 0 || a % 7 == 0) {
        counter[i++]= " " + a 
    } else {
        continue;
    }
  }
    showResults(counter)
    return counter
}

kata8();

function kata9() {

let counter = []
   let i = 0
   for (let a = 1; a <= 100; a++){
      if(a % 2 != 0 && a % 5 == 0) {
        counter[i++]= " " + a 
    } else {
        continue;
    }
  }
    showResults(counter)
    return counter

}
kata9 ();


function kata10() {
    showResults(sampleArray)
    return sampleArray
}
kata10();

function kata11() {
    let counter = []
    let i = 0
    for(let a = 0; a < sampleArray.length; a++){
        if(sampleArray[a] % 2 == 0) {
            counter[i++] = sampleArray[a]
        }
        else {
            continue;
        }
    }
    showResults(counter)
    return counter
}
kata11();


function kata12() {
    let counter = []
    let i = 0
    for(let a = 0; a < sampleArray.length; a++){
        if(sampleArray[a] % 2 != 0) {
            counter[i++] = sampleArray[a]
        }
        else {
            continue;
        }
    }
    showResults(counter)
    return counter
}
kata12();


function kata13() {
    let counter = []
    let i = 0
    for(let a = 0; a < sampleArray.length; a++){
        if(sampleArray[a] % 8 === 0) {
            counter[i++] = sampleArray[a]
        }
        else {
            continue;
        }
    }
    showResults(counter)
    return counter
}
kata13();

function kata14() { 

    let counter = []
    let i = 0
    for(let a = 0; a < sampleArray.length; a++){
            counter[i++] = (sampleArray[a]*sampleArray[a])
        }
        
    showResults(counter)
    return counter
}
kata14();

function kata15() {

    let counter = 0

        for (let i = 1; i <= 20; i++) { 
            
                counter += i;
}
    showResults(counter)
    return counter
}
kata15();

function kata16() {
    let counter = 0
    for(i = 0; i < sampleArray.length; i++) {
        counter += sampleArray[i]
    }
    showResults(counter)
    return counter
}
kata16();

function kata17() {


    let counter = sampleArray[0]

        for (let i = 0; i < sampleArray.length; i++) { 
            if(sampleArray[i] < counter) {
                counter = sampleArray[i];
    }

}
    showResults(counter)
    return counter
}
kata17()

function kata18() {

    let counter = sampleArray[0]

        for (let i = 0; i < sampleArray.length; i++) { 
            if(sampleArray[i] > counter) {
                counter = sampleArray[i];
    }

}
    showResults(counter)
    return counter
}
kata18();
/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

/* <------------ À FINALIZAR ------------------> 
const rectangleSection = document.createElement("div");
base.appendChild(rectangleSection);
rectangleSection.style.display = "flex";
rectangleSection.style.flexDirection = "row";
rectangleSection.style.flexWrap = "wrap";
const rectangle = document.createElement("p");
rectangle.style.height = "20px";


function kataBonus1() {
    rectangle.style.width = "100px"
    rectangle.style.backgroundColor = "gray"
    
    for(let i = 1; i <= 20; i++) {
        rectangleSection.appendChild(rectangle)
    }

}
kataBonus1();

function kataBonus2() {
    rectangle.style.width = "100px"
    rectangle.style.backgroundColor = "gray"
    
    for(let i = 1; i <= 20; i++) {
        rectangle.style.width += 5
        rectangleSection.appendChild(rectangle)
    }
}
kataBonus2();
console.log(kataBonus2())

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}


<------------------ À FINALIZAR ---------------> */
