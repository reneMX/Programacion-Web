







function agregar(){
    var urlImagen = urlImage.split("\\")[2];
    var nuevo_favorito = JSON.parse( `{"img":"${nombre_imagen}"} `);
    lugares.push(nuevo_favorito);
    agregarLugar(nuevo_favorito);
}

function leerJson(){
    $.getJSON("files/animales.json",datos=>{
        var lugares1 = datos.lugares; 
        datos.lugares.forEach(lugar=>{i++;agregarLugar(lugar)});
    }).fail( () => console.log("error"));
}