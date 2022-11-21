addEventListener("DOMContentLoaded", (e) =>{
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        let data= Object.fromEntries(new FormData(e.tarjet));
        let gradosc=document.querySelector("gradosc")
        let celcius= Number(data.gradosc)
        let farenheit=(gradosc-32)*5/9
        let mytable=document.querySelector("tbody");
        mytable.insertAdjacentHTML("beforeend",`
        <tr>
            <td>${celcius}</td>
            <td>${farenheit}</td>
        </tr>
        `)
    })
})