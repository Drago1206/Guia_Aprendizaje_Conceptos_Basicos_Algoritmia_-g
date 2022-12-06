console.log();
addEventListener("DOMContentLoaded",(e)=>{
    let form= document.querySelector("#form")
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        let data= Object.fromEntries(new FormData(e.target));
        let fechaN = data["fchaN"].split("-")[0]
        let fechaA = new Date().getFullYear()
        let  h1=document.querySelector("h1")
        let procs=(fechaA-fechaN )
        if(fechaN>=fechaA){
            console.log(fechaA-fechaN);
            h1.insertAdjacentHTML("beforeend",`
            <h1>${procs}</h1>`)
        }else{
            console.log(fechaA-fechaN);
            h1.insertAdjacentHTML("beforeend",`
            <h1>${procs}</h1>`)
                    
        }
        
        /*let fechaN=Date(data.fchaN)
        let fechaA=Date(data.fchaA)
        let proces= (fechaA-fechaN)/365
        let h1=document.querySelector("#h1")
        h1.insertAdjacentHTML("beforeend",`
        <h1>${proces}</h1>*/
        
    })
})