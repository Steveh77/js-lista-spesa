// Array lista della spesa
let listaSpesa = ['Uova' , 'Pane' , 'Latte' , 'Biscotti' , 'Pasta' , 'Affettati' , 'Formaggio' , 'Verdura' , 'Frutta']
const ulListContainer = document.getElementById("ul-list-container");

// ---------esercizio con ciclo FOR--------------
let liListItems = '';
for (let i = 0; i < listaSpesa.length; i++) {
    liListItems +=`<li>${listaSpesa[i]}</li>`;
    console.log(i)
}


// stampo in pagina
ulListContainer.innerHTML = liListItems
console.log(ulListContainer)


