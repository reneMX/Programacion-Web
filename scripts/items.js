
var array_lugares_img = []


    function agregarAFavorito(){
        
        //obtenemos la lista que se creo en el index.html
        //se obtiene mediante el id: 'lista'
        var lista = document.getElementById("lista");
        let item  = docuemnt.createElement("li");
        generaItem();

        titulo.innerHTML =   `${animal.nombre}`;
        DOMSettableTokenList.innerHTML = `Nombre: ${lugar.nombre}`;
    }//fin cuncion agregarAFavorito




    function generaItem(){

        array_lugares_img[i] = document.createElement("canvas");
        itemVista = document.createElement("div");
        itemVista.className = "cajaItem";
        titulo = document.createElement("h3");
    }//fin funcion generaItem
