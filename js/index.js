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
        $body.classList.remove('verde');
        $body.classList.add('tAmarillo');
        setTimeout(()=>{
            mostrarBoton();
            $body.classList.remove('tAmarillo');
            $body.classList.add('Amarillo');
        } ,3000);
        $boton.innerText='Seguir molestando'
        }
    else if ($body.classList.contains('Amarillo')){
        removerBoton();
        $body.classList.remove('Amarillo');
        $body.classList.add('tNaranja');
        setTimeout(()=>{
            mostrarBoton();
            $body.classList.remove('tNaranja');
            $body.classList.add('Naranja');
        } ,2000);
        $boton.innerText='BOOP BOOP'
    }
    else if ($body.classList.contains('Naranja')){
        removerBoton();
        $body.classList.remove('Naranja');
        $body.classList.add('tRojo');
        setTimeout(()=>{
            mostrarBoton();
            $body.classList.remove('tRojo');
            $body.classList.add('Rojo');
        } ,3000);
        $boton.innerText='Revivir'
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