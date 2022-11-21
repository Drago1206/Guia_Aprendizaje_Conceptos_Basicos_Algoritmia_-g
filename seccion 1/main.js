addEventListener("DOMContentLoaded", (e) =>{
    form=document.querySelector("#form")
        let form=document.querySelector("#form")
    
        form.addEventListener("submit",(e)=>{
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target))
        let observaciones= data.observaciones
        let hora= (data.hora)
        let tabla=document.querySelector("tbody");
        tabla.insertAdjacentHTML("beforeend",`
            <tr>
                <td> ${observaciones}  </td>
                <td> ${hora} </td>
            </tr>
            `)

    })
})