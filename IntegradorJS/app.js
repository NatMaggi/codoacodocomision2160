let seccion = document.getElementById("section");
// seccion.style.visibility="hidden"
const comprarTickets=()=>{
    seccion.innerHTML=`
    <div class="container ">
      <div class="mt-5 row d-flex justify-content-center text-center">
        <div class="m-1 col-2 cuadrito1 justify-content-center">
            <p></p>
            <p class="fs-5 fw-bold">Estudiante</p>
            <p class="">Tienen un descuento</p>
            <p class="fw-bold">80%</p>
            <p class="documentacion">* presentar documentación</p>
        </div>
        <div class="m-1 col-2 cuadrito2">
            <p></p>
            <p class="fs-5 fw-bold">Trainee</p>
            <p class="">Tienen un descuento</p>
            <p class="fw-bold">50%</p>
            <p class="documentacion">* presentar documentación</p>
        </div>
        <div class="m-1 col-2 cuadrito3">
            <p></p>
            <p class="fs-5 fw-bold">Junior</p>
            <p>Tienen un descuento</p>
            <p class="fw-bold">15%</p>
            <p class="documentacion">* presentar documentación</p>
        </div>
     </div>
     </div>
            <div class="row" id="form tickets">
                <div class="col text-uppercase text-center">
                    <small>Venta</small>
                    <h2>Valor de ticket $200</h2>
                </div>
            </div>
            <div class="row">
                <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
                    <form>
                        <div class="form-tickets">
                        <div class="d-flex">
                            <div class="form-group col-6 col-md-6">
                                <input type="text" class="form-control" placeholder="Nombre">
                            </div>
                            <div class="form-group col-6 col-md-6">
                                <input type="text" class="form-control" placeholder="Apellido">
                            </div>
                            </div>
                            <div class="form-group col-12 col-md-12">
                                <input type="email" class="form-control" placeholder="Correo">
                            </div>
                            <div class="d-flex">
                            <div class="form-group col-6 col-md-6">
                                <label for="">Cantidad</label>
                                <input id="cantidadEntrada" type="text" class="form-control" placeholder="Cantidad">
                            </div>
                            <div class="form-group col-6 col-md-6">
                                <label for="">Categoria</label>
                                <select class="form-select" id="inputState">
                                    <option value="estudiante" selected>Estudiante</option>
                                    <option value="trainee">Trainee</option>
                                    <option value="junior">Junior</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col">
                                <div id="totalCompra" class="alert alert-primary" role="alert">
                                    Total a pagar: $
                                </div>
                            </div>
                        </div>
                        <div class="form-row d-flex">
                            <div class="form-group col">
                                <button type="reset" onclick="limpiar()" class="btn btn-codo btn-block">Borrar</button>
                            </div>
                            <div class="form-group col">
                                <button type="button" id="botonCalcular" class="btn btn-codo btn-block" 
                                data-bs-toggle="modal" data-bs-target="#exampleModal">Resumen</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">ticket N° </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div id="" class="modal-body">
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary">Confirmar compra</button>
            </div>
            </div>
        </div>
        </div>
    `;
    document.querySelector("#botonCalcular").addEventListener('click',()=>{
        let inputs = document.querySelectorAll("input");
        let descuento = document.querySelector("#inputState").value; 
        
        console.log(inputs);
        let comprador={
            nombre:inputs[0].value,
            apellido:inputs[1].value,
            correo:inputs[2].value,
            cantidad:inputs[3].value
                };
        calcularValor(descuento, comprador.cantidad,comprador);
    });
};
const calcularValor=(desc,cantEnt,comp)=>{
    let resultado = 0;
    let descuento = 0;
    let numT = document.querySelector("#exampleModalLabel");
    for (let index = 0; index < 8; index++) {
        numT.innerHTML+=crearNumTicket();
    }
    let modal = document.querySelector(".modal-body");
    let alert = document.querySelector("#totalCompra");
    if(desc == "estudiante"){
        resultado = (cantEnt * 200)*0.2;
        descuento = (cantEnt * 200)*0.8;
        alert.innerHTML="Total a pagar: $";
        alert.innerHTML+=resultado;
    }else if(desc == "trainee"){
        resultado = (cantEnt * 200)*0.5;
        descuento = (cantEnt * 200)*0.5;
        alert.innerHTML="Total a pagar: $";
        alert.innerHTML+=resultado;
    }else{
        resultado = (cantEnt * 200)*0.85;
        descuento = (cantEnt * 200)*0.15;
        alert.innerHTML="Total a pagar: $";
        alert.innerHTML+=resultado;
    }
    modal.innerHTML=`
        <p>Nombre: ${comp.nombre}</p>
        <p>Apellido: ${comp.apellido}</p>
        <p>Correo: ${comp.correo}</p>
        <p>Categoria: ${desc}</p>
        <p>Cantidad de Entradas: ${comp.cantidad}</p>
        <p>Descuento: ${descuento}</p>
        <p>Total a pagar: ${resultado}</p>
    `;
}

const crearNumTicket=()=>{
    return Math.floor(Math.random()*9);
};
const limpiar=()=>{
    let alert = document.querySelector("#totalCompra");
    alert.innerHTML="Total a pagar: $";
}