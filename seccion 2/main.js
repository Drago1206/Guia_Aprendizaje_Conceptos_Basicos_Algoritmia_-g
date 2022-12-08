console.log();
addEventListener("DOMContentLoaded",(e)=>{
    let form= document.querySelector("#form")
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        let data= Object.fromEntries(new FormData(e.target));
        let fechaN=data["fchaN"].split("-")[0]
        let mytable= document.querySelector("tbody")
        console.log(`${fechaN}`)
        if(fechaN %4==0){
            console.log("Es bisiesto")
            mytable.insertAdjacentHTML("beforeend",`
            <tr> <td>${fechaN} </td> 
            <td> ${"Es bisiesto"} </td> </tr>`)
        }else if(fechaN %400==0){
            console.log("Es bisiesto")
            mytable.insertAdjacentHTML("beforeend",`
            <tr> <td>${fechaN} </td> 
            </tr> <td> ${"Es bisiesto"} </td> </tr>`)
        }else{
            console.log("no es bisiesto")
            mytable.insertAdjacentHTML("beforeend",`
            <tr> <td>${fechaN} </td> 
            <td> ${"No es bisiesto"} </td> </tr>`)
        }
        
        /*let fechaN=Date(data.fchaN)
        let fechaA=Date(data.fchaA)
        let proces= (fechaA-fechaN)/365
        let h1=document.querySelector("#h1")
        h1.insertAdjacentHTML("beforeend",`
        <h1>${proces}</h1>*/
        
    })
})