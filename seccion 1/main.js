addEventListener("DOMContentLoaded", (e) =>{
    let form = document.querySelector('#form')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let dataInput = Object.fromEntries(new FormData(e.target))
        let primeraExpresion = dataInput.first
        if (primeraExpresion == 'True'){
            resultado.innerHTML = 'Correcto, debido a que el operador OR valida si alguna de las expresiones es True y si lo es devuelve True si ambas son False devuelve False'
        }
        else{
            resultado.innerHTML = 'Incorrecto,  al menos una de las dos expresiones es True por lo tanto lo que devuelve el operando OR es True'
        }
        console.log(primeraExpresion);
        let form2 = document.querySelector('#form2')
        form2.addEventListener('submit', (e) => {
            e.preventDefault();
            let dataInput1 = Object.fromEntries(new FormData(e.target))
            let segundaExpresion = dataInput1.sec
            if (segundaExpresion == 'False'){
                resultado1.innerHTML = 'Correcto, debido a que el operador AND valida si ambas expresiones son True nos devolvera True, pero si al menos una de ellas no es True, nos devolvera False'
            }
            else{
                resultado1.innerHTML = 'Incorrecto, debido a que al menos una de las dos expresiones que nos retorna es False, por lo tanto es False'
            }
    })
    }) 

})