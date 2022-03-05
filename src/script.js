const nome = document.querySelector('h1');

// animação do nome...
const typeWrite = (elemento) => {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 120 * i);
    });
}

typeWrite(nome);
