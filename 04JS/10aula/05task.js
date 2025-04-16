for(let nmrprimo = 2; nmrprimo <= 20; nmrprimo++){

    let pinga = true
    
    for(i = 2; i < nmrprimo; i++){

        if (nmrprimo % i === 0) {
            pinga = false
        }
          } if (pinga) {
            console.log(nmrprimo);
        } 

}

