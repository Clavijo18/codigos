function comprarBoletas(){
    var cantidadBoletas = (document.getElementById("txtCantidadBoletas")).value;
    var comprador = (document.getElementById("txtComprador")).value;

    console.log(cantidadBoletas);
    console.log(comprador);

    alert(comprador + " Usted ha comprado: " + cantidadBoletas + "Boleta(s) para el próximo evento");
    alert("Te esperamos con la mejor actitud :)");
}