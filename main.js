let button = document.querySelector("button")
let img = document.getElementById("img")
let info = document.getElementById("info")
let contenedor = document.querySelector(".pkm-cont")

    button.addEventListener('click', ()=>{
        const caja = document.getElementById("input").value
        fetch(`https://pokeapi.co/api/v2/pokemon/${caja
    }`)
        .then( res => res.json())
        .then(data =>{
            let pkm = data;
            contenedor.innerHTML = `
                <img src="${pkm.sprites.front_default}">
               <h1 style="color: #fff;"> ${pkm.name} </h1>
            ` 
            console.log(pkm)
        })
    })