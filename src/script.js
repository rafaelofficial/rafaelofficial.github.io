const nome = document.querySelector('cite');

// animação do nome...
const typeWrite = (elemento) => {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 260 * i);
    });
}

typeWrite(nome);
