const elemento = document.querySelectorAll(".elemento");
const resetar = document.querySelector ("#reset")
const texto = document.querySelector("h2")
let aux=2;
let vencedor=0;
arrayResult = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

function checar(){
    //8 Maneiras de ganhar 

    //Caso 1:
    if(arrayResult[0][0] == 1 && arrayResult[0][1] == 1 && arrayResult[0][2] == 1){
        texto.textContent = "Quem jogou de 'X' venceu"
        vencedor = 1;
    }
    else if (arrayResult[0][0] == 2 && arrayResult[0][1] == 2 && arrayResult[0][2] == 2){
        texto.textContent = "Quem jogou de 'O' venceu"
        vencedor = 1
    }

    //Caso 2
    else if(arrayResult[1][0] == 1 && arrayResult[1][1] == 1 && arrayResult[1][2] == 1){
        texto.textContent = "Quem jogou de 'X' venceu"
        vencedor = 1
    }
    else if (arrayResult[1][0] == 2 && arrayResult[1][1] == 2 && arrayResult[1][2] == 2){
        texto.textContent = "Quem jogou de 'O' venceu"
        vencedor = 1
    }

    //Caso 3
    else if(arrayResult[2][0] == 1 && arrayResult[2][1] == 1 && arrayResult[2][2] == 1){
        texto.textContent = "Quem jogou de 'X' venceu"
        vencedor = 1
    }
    else if (arrayResult[2][0] == 2 && arrayResult[2][1] == 2 && arrayResult[2][2] == 2){
        texto.textContent = "Quem jogou de 'O' venceu"
        vencedor = 1
    }

    //Caso 4
    else if(arrayResult[0][0] == 1 && arrayResult[1][0] == 1 && arrayResult[2][0] == 1){
        texto.textContent = "Quem jogou de 'X' venceu"
        vencedor = 1
    }
    else if (arrayResult[0][0] == 2 && arrayResult[1][0] == 2 && arrayResult[2][0] == 2){
        texto.textContent = "Quem jogou de 'O' venceu"
        vencedor = 1
    }

    //Caso 5
    else if(arrayResult[0][1] == 1 && arrayResult[1][1] == 1 && arrayResult[2][1] == 1){
        texto.textContent = "Quem jogou de 'X' venceu"
        vencedor = 1
    }
    else if (arrayResult[0][1] == 2 && arrayResult[1][1] == 2 && arrayResult[2][1] == 2){
        texto.textContent = "Quem jogou de 'O' venceu"
        vencedor = 1
    }

    //Caso 6
    else if(arrayResult[0][2] == 1 && arrayResult[1][2] == 1 && arrayResult[2][2] == 1){
        texto.textContent = "Quem jogou de 'X' venceu"
        vencedor = 1
    }
    else if (arrayResult[0][2] == 2 && arrayResult[1][2] == 2 && arrayResult[2][2] == 2){
        texto.textContent = "Quem jogou de 'O' venceu"
        vencedor = 1
    }

    //Caso 7
    else if(arrayResult[0][0] == 1 && arrayResult[1][1] == 1 && arrayResult[2][2] == 1){
        texto.textContent = "Quem jogou de 'X' venceu"
        vencedor = 1
    }
    else if (arrayResult[0][0] == 2 && arrayResult[1][1] == 2 && arrayResult[2][2] == 2){
        texto.textContent = "Quem jogou de 'O' venceu"
        vencedor = 1
    }

    //Caso 8
    else if(arrayResult[0][2] == 1 && arrayResult[1][1] == 1 && arrayResult[2][0] == 1){
        texto.textContent = "Quem jogou de 'X' venceu"
        vencedor = 1
    }
    else if (arrayResult[0][2] == 2 && arrayResult[1][1] == 2 && arrayResult[2][0] == 2){
        texto.textContent = "Quem jogou de 'O' venceu"
        vencedor = 1
    }

    //Empate
    else if (   arrayResult[0][0]   != 0 &&      arrayResult[0][1]    != 0 &&   arrayResult[0][2]
        != 0 && arrayResult[1][0]   != 0 &&      arrayResult[1][1]    != 0 &&   arrayResult[1][2]
        != 0 && arrayResult[2][0]   != 0 &&      arrayResult[2][1]    != 0 &&   arrayResult[2][2]
    ){
        texto.textContent = "Não houve vencedor"
    }
       //Parar:
    if (vencedor == 1){
        for (i=0; i<=2 ; i++) {
            for (j=0; j<=2 ; j++) {
                arrayResult[i][j] = 1  
            }  
        }  
    } 
}

// Matrix:
//          Coluna1             Coluna2           Coluna3
//Linha1   array[0][0]         array[0][1]       array[0][2]

//Linha2   array[1][0]         array[1][1]       array[1][2]

//Linha3   array[2][0]         array[2][1]       array[2][2]

resetar.addEventListener("click", function(){
    arrayResult = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    texto.textContent = ""
    for (i=0; i<=8 ; i++) {
          elemento[i].textContent = ""   
          elemento[i].style.fontSize = '15px'
          aux = 2;
    } 
    for (i=0; i<=2 ; i++) {
        for (j=0; j<=2 ; j++) {
            arrayResult[i][j] = 0  
        }  
    }   
    vencedor = 0; 
})


elemento.forEach(function(elem){
    elem.addEventListener("click", function(e){
        if(elem.dataset.valor==0){
            if (arrayResult[0][0] == 0){
                if(aux%2 == 0){
                    elemento[0].textContent = "X"   
                    elemento[0].style.fontSize = '50px'
                    aux++
                    control0 = 1
                    arrayResult[0][0] = 1
                    checar();
                }
                else {
                    elemento[0].textContent = "O"   
                    elemento[0].style.fontSize = '50px'
                    aux++
                    arrayResult[0][0] = 2
                    checar();
                }
            }
        }
        if (elem.dataset.valor == 1){
            if (arrayResult[0][1] == 0){
                if(aux%2 == 0){
                    elemento[1].textContent = "X"   
                    elemento[1].style.fontSize = '50px'
                    aux++;
                    arrayResult[0][1] = 1
                    checar();
                }
                else {
                    elemento[1].textContent = "O"   
                    elemento[1].style.fontSize = '50px'
                    aux++;
                    arrayResult[0][1] = 2
                    checar();
                }
            }
        }
        if (elem.dataset.valor == 2){
            if (arrayResult[0][2] == 0){
                if(aux%2 == 0){
                    elemento[2].textContent = "X"   
                    elemento[2].style.fontSize = '50px'
                    aux++;
                    arrayResult[0][2] = 1
                    checar();
                }
                else {
                    elemento[2].textContent = "O"   
                    elemento[2].style.fontSize = '50px'
                    aux++;
                    arrayResult[0][2] = 2
                    checar();
                }
            }
        }
        if (elem.dataset.valor == 3){
            if (arrayResult[1][0] == 0){
                if(aux%2 == 0){
                    elemento[3].textContent = "X"   
                    elemento[3].style.fontSize = '50px'
                    aux++;
                    arrayResult[1][0] = 1
                    checar();
                }
                else {
                    elemento[3].textContent = "O"   
                    elemento[3].style.fontSize = '50px'
                    aux++;
                    arrayResult[1][0] = 2
                    checar();
                }
            }
        }
        if (elem.dataset.valor == 4){
            if (arrayResult[1][1] == 0){
                if(aux%2 == 0){
                    elemento[4].textContent = "X"   
                    elemento[4].style.fontSize = '50px'
                    aux++;
                    arrayResult[1][1] = 1
                    checar();
                }
                else {
                    elemento[4].textContent = "O"   
                    elemento[4].style.fontSize = '50px'
                    aux++;
                    arrayResult[1][1] = 2
                    checar();
                }
            }
        }
        if (elem.dataset.valor == 5){
            if (arrayResult[1][2] == 0){
                if(aux%2 == 0){
                    elemento[5].textContent = "X"   
                    elemento[5].style.fontSize = '50px'
                    aux++;
                    arrayResult[1][2] = 1
                    checar();
                }
                else {
                    elemento[5].textContent = "O"   
                    elemento[5].style.fontSize = '50px'
                    aux++;
                    arrayResult[1][2] = 2
                    checar();
                }
            }
        }
        if (elem.dataset.valor == 6){
            if (arrayResult[2][0] == 0){
                if(aux%2 == 0){
                    elemento[6].textContent = "X"   
                    elemento[6].style.fontSize = '50px'
                    aux++;
                    arrayResult[2][0] = 1
                    checar();
                }
                else {
                    elemento[6].textContent = "O"   
                    elemento[6].style.fontSize = '50px'
                    aux++;
                    arrayResult[2][0] = 2
                    checar();
                }
            }
        }
        if (elem.dataset.valor == 7){
            if (arrayResult[2][1] == 0){
                if(aux%2 == 0){
                    elemento[7].textContent = "X"   
                    elemento[7].style.fontSize = '50px'
                    aux++;
                    arrayResult[2][1] = 1
                    checar();
                }
                else {
                    elemento[7].textContent = "O"   
                    elemento[7].style.fontSize = '50px'
                    aux++;
                    arrayResult[2][1] = 2
                    checar();
                }
            }
        }
        if (elem.dataset.valor == 8){
            if (arrayResult[2][2] == 0){
                if(aux%2 == 0){
                    elemento[8].textContent = "X"   
                    elemento[8].style.fontSize = '50px'
                    aux++;
                    arrayResult[2][2] = 1
                    checar();
                }
                else {
                    elemento[8].textContent = "O"   
                    elemento[8].style.fontSize = '50px'
                    aux++;
                    arrayResult[2][2] = 2
                    checar();
                }
            }
        }
    })
})

