
const inputElemento = document.getElementById('nome-tarefa');
const botaoAdicionar = document.getElementById('botao-adicionar');
const containerTarefas = document.getElementById('container-tarefas')


// saber se usuario escreveu conteudo
botaoAdicionar.addEventListener('click',() => {
    const valorInput = inputElemento.value;

    if(valorInput === ''){
        // se nao escreveu, mandar aviso
        document.getElementById('alert').style.display = 'block';
    }else {
        // se escreveu, adicionar na lista
        document.getElementById('alert').style.display = 'none';

        const divTarefa = document.createElement('div');
        divTarefa.classList.add('tarefa');

        divTarefa.innerHTML = `
                <p>${valorInput}</p>
                <div class="ctn-excluir-feito">
                <button type="button" id="button-feito" class="button-feito">Feito</button>
                <button type="button" id="button-excluir" class="button-excluir">Excluir</button>
                </div>
            `;

        inputElemento.value = '';

        containerTarefas.appendChild(divTarefa);


        // adicionar evento ao meu botao excluir nas tarefas
        divTarefa.querySelector('.button-excluir').addEventListener('click',() => {
            containerTarefas.removeChild(divTarefa);
        })

        // adicionar evento ao meu botao feito nas tarefas
        divTarefa.querySelector('.button-feito').addEventListener('click',() => {
            const p = divTarefa.querySelector('p');
            p.style.textDecoration = 'line-through';
            p.style.color = 'var(--color-7)';

        })

    }
})


