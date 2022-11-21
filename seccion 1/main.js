addEventListener("DOMContentLoaded", (e) =>{
    form=document.querySelector("#form")
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        let data=Object.fromEntries(new FormData(e.target))
        let dolares=Number(data.dolares)
        let pesos=4800
        let conver=dolares*pesos
    
        let mytable=document.querySelector("tbody");
        mytable.insertAdjacentHTML("beforeend",`
        <tr>
            <td>${dolares}</td>
            <td>${conver}</td>
        </tr>
        `)
    })
    })