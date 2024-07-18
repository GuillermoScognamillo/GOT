const $body = document.querySelector("body");
const $boton = document.querySelector("button");


const removerBoton = () => {
    $boton.classList.remove('btn-molestar');
    $boton.classList.add('oculto');
}

const mostrarBoton = () => {
    $boton.classList.remove('oculto');
    $boton.classList.add('btn-molestar');
}

const molestarDrogon = () => {
    if ($body.classList.contains('verde')){
        removerBoton();
        $body.classList.add("tocar");
        $body.classList.remove('verde');
        $body.classList.add('tAmarillo');
        setTimeout(()=>{
            mostrarBoton();
            $body.classList.remove('tAmarillo');
            $body.classList.add('Amarillo');
            $body.classList.remove("tocar");
        } ,3000);
        $boton.innerText='Seguir molestando'
        }
    else if ($body.classList.contains('Amarillo')){
        removerBoton();
        $body.classList.add("tocar");
        $body.classList.remove('Amarillo');
        $body.classList.add('tNaranja');
        setTimeout(()=>{
            mostrarBoton();
            $body.classList.remove('tNaranja');
            $body.classList.add('Naranja');
            $body.classList.remove("tocar");
        } ,2000);
        $boton.innerText='BOOP BOOP'
    }
    else if ($body.classList.contains('Naranja')){
        removerBoton();
        $body.classList.add("tocar");
        $body.classList.remove('Naranja');
        $body.classList.add('tRojo');
        setTimeout(()=>{
            mostrarBoton();
            $body.classList.remove('tRojo');
            $body.classList.add('Rojo');
            $body.classList.remove("tocar");
        } ,3000);
        $boton.innerText='Estas muerto, revivir'
    }
    else if ($body.classList.contains('Rojo')){
        removerBoton();
        $body.classList.remove('Rojo');
        $body.classList.add('verde');
        $boton.innerText='Molestar a Drogon'
        mostrarBoton();
    }

}

$body.addEventListener('click', molestarDrogon) 