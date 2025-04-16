let nmr1 = 0
let nmr2 = 1
let computador = 0

while (computador < 10) {
    let proximo = nmr1 + nmr2
    nmr1 = nmr2
    nmr2 = proximo
    computador++
    console.log(nmr1);
}

