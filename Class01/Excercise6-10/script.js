let arrOfNames = ['Paki','Lina','Leja','Kire','Sijam']
let btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
    let lista = document.getElementById('list');
    for (let names of arrOfNames){
        let mala = document.createElement('li')
        lista.appendChild(mala);
        mala.innerHTML = names;

    }

})