const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

// showResults recebe o parametro. 
// parametro é o valor do resultado do kata
// innerText vai renderizar meu parametro como texto

function showResults(parametro) {

    const base = document.getElementById("base")
    const para = document.createElement("p")
    para.style.width = "60vw"
    para.style.overflow = "scroll"
    
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

    for (let a = 1; a <= 25; a++) {
        counter[i++] = " " + a

    }
    showResults(counter)
    return counter
}
kata1();

function kata2() {
    let counter = []
    let i = 0

    for (let a = 25; a >= 1; a--) {
        counter[i++] = " " + a

    }
    showResults(counter)
    return counter
}
kata2();

function kata3() {
    let counter = []
    let i = 0

    for (let a = 1; a <= 25; a++) {
        counter[i++] = " " + (a * -1)

    }
    showResults(counter)
    return counter
}
kata3();

function kata4() {
    let counter = []
    let i = 0

    for (let a = 25; a >= 1; a--) {
        counter[i++] = " " + (a * -1)

    }
    showResults(counter)
    return counter
}
kata4();

function kata5() {
    let counter = []
    let i = 0
    for (let a = 25; a >= -25; a--) {
        if (a % 2 == 0) {
            continue;
        } else {
            counter[i++] = " " + a
        }
    }
    showResults(counter)
    return counter
}
kata5();


function kata6() {
    let counter = []
    let i = 0
    for (let a = 1; a <= 100; a++) {
        if (a % 3 == 0) {
            counter[i++] =" " + a
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
    for (let a = 1; a <= 100; a++) {
        if (a % 7 == 0) {
            counter[i++] = " " + a
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
    for (let a = 100; a >= 0; a--) {
        if (a % 3 == 0 || a % 7 == 0) {
            counter[i++] = " " + a
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
    for (let a = 1; a <= 100; a++) {
        if (a % 2 != 0 && a % 5 == 0) {
            counter[i++] = " " + a
        } else {
            continue;
        }
    }
    showResults(counter)
    return counter

}
kata9();


function kata10() {
    showResults(sampleArray)
    return sampleArray
}
kata10();

function kata11() {
    let counter = []
    let i = 0
    for (let a = 0; a < sampleArray.length; a++) {
        if (sampleArray[a] % 2 == 0) {
            counter[i++] = " " + sampleArray[a]
        } else {
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
    for (let a = 0; a < sampleArray.length; a++) {
        if (sampleArray[a] % 2 != 0) {
            counter[i++] = " " + sampleArray[a]
        } else {
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
    for (let a = 0; a < sampleArray.length; a++) {
        if (sampleArray[a] % 8 === 0) {
            counter[i++] =  " " + sampleArray[a]
        } else {
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
    for (let a = 0; a < sampleArray.length; a++) {
        counter[i++] = " " + (sampleArray[a] * sampleArray[a])
    }

    showResults(counter)
    return counter
}
kata14();

function kata15() {

    let counter = 0

    for (let i = 1; i <= 20; i++) {

        counter += " " + i;
    }
    showResults(counter)
    return counter
}
kata15();

function kata16() {
    let counter = 0
    for (i = 0; i < sampleArray.length; i++) {
        counter += " " + sampleArray[i]
    }
    showResults(counter)
    return counter
}
kata16();

function kata17() {


    let counter = sampleArray[0]

    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] < counter) {
            counter =" " + sampleArray[i];
        }

    }
    showResults(counter)
    return counter
}
kata17()

function kata18() {

    let counter = sampleArray[0]

    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] > counter) {
            counter = " " + sampleArray[i];
        }

    }
    showResults(counter)
    return counter
}
kata18();
/**
 * Daqui em diante são os bônus, por sua conta e risco
 */


const rectangleSection = document.createElement("div");
base.appendChild(rectangleSection);
rectangleSection.style.display = "inline-block";
rectangleSection.style.marginLeft = "2px";
rectangleSection.style.overflow = "scroll";
rectangleSection.style.overflowX = "scroll";
rectangleSection.style.height = "200px";


function kataBonus1() {
    const divider = document.createElement("hr");
    divider.style.border = "4px solid aqua";
    divider.style.width = "50vw";
    rectangleSection.appendChild(divider);
    let width100 = 100

    for (let i = 1; i <= 20; i++) {
        const rectangle = document.createElement("p");
        rectangle.style.width = `${width100}px`
        rectangle.style.marginLeft = "2px";
        rectangle.style.backgroundColor = "gray"
        rectangle.style.height = "20px"
        rectangleSection.appendChild(rectangle)
    }

}
kataBonus1();

function kataBonus2() {

    const divider = document.createElement("hr");
    divider.style.border = "4px solid aqua";
    divider.style.width = "50vw";
    rectangleSection.appendChild(divider);
    let width100 = 100
    const width5 = 5
    for (let i = 1; i <= 20; i++) {
        const rectangle = document.createElement("p");
        width100 += width5
        rectangle.style.width = `${width100}px`
        rectangle.style.marginLeft = "2px";
        rectangle.style.backgroundColor = "gray"
        rectangle.style.height = "20px"
        rectangleSection.appendChild(rectangle)
    }

}
kataBonus2();

function kataBonus3() {
    const divider = document.createElement("hr");
    divider.style.border = "4px solid aqua";
    divider.style.width = "50vw";
    rectangleSection.appendChild(divider);
    for (let i = 1; i <= 20; i++) {
        const rectangle = document.createElement("p");

        rectangle.style.width = `${sampleArray[i-1]}px`
        rectangle.style.marginLeft = "2px";
        rectangle.style.backgroundColor = "gray"
        rectangle.style.height = "20px"
        rectangleSection.appendChild(rectangle)
    }

}
kataBonus3();


function kataBonus4() {
    const divider = document.createElement("hr");
    divider.style.border = "4px solid aqua";
    divider.style.width = "50vw";
    rectangleSection.appendChild(divider);
    for (let i = 0; i < 20; i++) {
        const rectangle = document.createElement("p");
        rectangle.style.width = `${sampleArray[i]}px`
        rectangle.style.marginLeft = "2px";
        rectangle.style.height = "20px"
        if (i % 2 === 0) {
            rectangle.style.backgroundColor = "gray"

            rectangleSection.appendChild(rectangle)
        } else {
            rectangle.style.backgroundColor = "red"

            rectangleSection.appendChild(rectangle)
        }
    }
}
kataBonus4();


function kataBonus5() {
    const divider = document.createElement("hr");
    divider.style.border = "4px solid aqua";
    divider.style.width = "50vw";
    rectangleSection.appendChild(divider);
    for (let i = 0; i < 20; i++) {
        const rectangle = document.createElement("p");
        rectangle.style.width = `${sampleArray[i]}px`
        rectangle.style.marginLeft = "2px";
        rectangle.style.height = "20px"
        if (i % 2 === 0) {
            rectangle.style.backgroundColor = "red"

            rectangleSection.appendChild(rectangle)
        } else {
            rectangle.style.backgroundColor = "gray"

            rectangleSection.appendChild(rectangle)
        }
    }
}

kataBonus5();