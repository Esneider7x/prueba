
const tbody = document.getElementById('cuerpo_table');
const total = document.getElementById('txt_total');
 
let totalCompra = 0;
let btn = document.getElementById('btnAgregarPro');
let btnLimpiar = document.getElementById('btnlimp');



btnLimpiar.addEventListener("click", () => {
    tbody.innerHTML = (value="");
    total.innerHTML = (value="");
    
});

btn.addEventListener("click", () => {
    let descripcion = document.getElementById('txt_descrip').value;
    let cantidad = document.getElementById('txt_cant').value;
    let precio = document.getElementById('txt_precio').value;
    let subtotal = cantidad * precio;
    totalCompra += subtotal;
    
    document.getElementById('txt_descrip').value="";
    document.getElementById('txt_cant').value="";
    document.getElementById('txt_precio').value="";

    let fila = document.createElement('tr');
    let colum1 = document.createElement('td');
    let eliminar = document.createElement('button');
    eliminar.innerText = 'X';
    eliminar.className = 'btn btn-danger btn-sm';
    eliminar.addEventListener("click", ()=> {
        // totalCompra-=subtotal;
        total.innerHTML = "Total: $" + totalCompra;
        fila.remove();
    });
    colum1.append(eliminar);
    fila.append(colum1);
    
    
    let colum2 = document.createElement('td');
    colum2.innerHTML = descripcion;
    fila.append(colum2);
    
    let colum3 = document.createElement('td');
    colum3.innerHTML = cantidad;
    fila.append(colum3);
    
    let colum4 = document.createElement('td');
    colum4.innerHTML = precio;
    fila.append(colum4);
    
    let colum5 = document.createElement('td');
    colum5.innerHTML = subtotal;
    fila.append(colum5);
    
    tbody.append(fila);
    total.innerHTML = ("Total: $" + totalCompra);

});

tbody.addEventListener("click", (Event) => {
let elemento = event.target.nodeName;
if (elemento == "BUTTON") {

    if (elemento == "svg") {
        fila = event.target.parentElement.parentElement.parentElement;
    }else{
    let fila = event.target.parentElement.parentElement;
    let subtotal = fila.children[4].outerText;
    totalCompra -= subtotal;
    total.innerHTML = "Total: $" + totalCompra;
    fila.remove();
}

}});