const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let contador = [];
    for (let i = 1; i <=25; i++) {
        contador.push(i)
    }
    let contator2 = contador.join(", ")
    return contator2
}
console.log(kata1())

function kata2() {
    let contador = [];
    for (let i = 25; i >= 1; i--) {
        contador.push(i)
    }
    let contator2 = contador.join(", ")
    return contator2
}
console.log(kata2())

function kata3() {
    let contador = []
    for(let i = -1; i >= -25; i--){
        contador.push(i)
    }
    let contator2 = contador.join(", ")
    return contator2
}
console.log(kata3())

function kata4() {
    let contador = []
    for(let i = -25; i <= -1; i++){
        contador.push(i)
    }
    let contator2 = contador.join(", ")
    return contator2
}
console.log(kata4())

function kata5() {
    let contador = []
    for(let i = 25; i >= -25; i--){
        if(i % 2 == 1 || i % 2 == -1){
            contador.push(i)
        }   
    }
    let contator2 = contador.join(", ")
    return contator2
}
console.log(kata5())

function kata6() {
    let contador = []
    for(let i = 1; i <= 100; i++){
        if(i % 3 == 0 ){
            contador.push(i)
        }   
    }
    let contator2 = contador.join(", ")
    return contator2
}
console.log(kata6())

function kata7() {
    let contador = []
    for(let i = 0; i <= 100 ; i++){
        if(i % 7 == 0 ){
            contador.push(i)
        }   
    }
    let contator2 = contador.join(", ")
    return contator2
}
console.log(kata7())

function kata8() {
    let contador = []
    for(let i = 100; i >= 1; i--){
        if(i % 7 == 0 || i % 3 == 0){
            contador.push(i)
        }   
    }
    let contator2 = contador.join(", ")
    return contator2
}
console.log(kata8())

function kata9() {
    let contador = []
    for(let i = 1; i <= 100; i++){
        if(i % 2 == 1 && i % 5 == 0){
            contador.push(i)
        }   
    }
    let contator2 = contador.join(", ")
    return contator2
}
console.log(kata9())

function kata10(lista) {
    let contador = []
    for(let i = 0; i < lista.length; i++){
        contador.push(lista[i])
    }
    let contator2 = contador.join(", ")
    return contator2
}
console.log(kata10(sampleArray))

function kata11(lista) {        
    let contador = []
    for(let i = 0; i < lista.length; i++){
        if(lista[i] % 2 == 0){
            contador.push(lista[i])
        }
    }
    let contator2 = contador.join(", ")
    return contator2
}
console.log(kata11(sampleArray))

function kata12(lista) {
    let contador = []
    for(let i = 0; i < lista.length; i++){
        if(lista[i] % 2 == 1){
            contador.push(lista[i])
        }
    }
    let contator2 = contador.join(", ")
    return contator2
}
console.log(kata12(sampleArray))

function kata13(lista) {
    let contador = []
    for(let i = 0; i < lista.length; i++){
        if(lista[i] % 8 == 0){
            contador.push(lista[i])
        }
    }
    let contator2 = contador.join(", ")
    return contator2
}
console.log(kata13(sampleArray))

function kata14(lista) {
    let contador = []
    for(let i = 0; i < lista.length; i++){
        contador.push(lista[i] * lista[i])
    }
    let contator2 = contador.join(", ")
    return contator2
}
console.log(kata14(sampleArray))

function kata15() {
    let contador = 0
    for(let i = 1; i <= 20; i++){
        contador += i
    }
    return contador
}
console.log(kata15())

function kata16(lista) {
    let contador = 0
    for(let i = 0; i < lista.length; i++){
        contador += lista[i]
    }
    return contador
}
console.log(kata16(sampleArray))

function kata17(lista) {
    let contador = lista[0]
    for(let i = 1; i < lista.length; i++){
        let variavel = lista[i]
        if(variavel < contador){
            contador = variavel
        }
    }
    return contador
}
console.log(kata17(sampleArray))

function kata18(lista) {
    let contador = lista[0]
    for(let i = 1; i < lista.length; i++){
        let variavel = lista[i]
        if(variavel > contador){
            contador = variavel
        }
    }
    return contador
}
console.log(kata18(sampleArray))