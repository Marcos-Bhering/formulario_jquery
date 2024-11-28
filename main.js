const form = document.getElementById('lista_tarefa');
const tarefa = [];

let linhas = '';



$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    })
    $('#bota-cancelar').click(function () {
        $('form').slidUp();
    })
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        adicionarLinha();
        atualizartarefa();
    });

    $(document).on('click', 'li','#feito', function () {
        $(this).toggleClass('tarefa_feita')
    });


    function adicionarLinha() {
        const inputTarefa = document.getElementById('tarefa');

        if (tarefa.includes(inputTarefa.value)) {
            alert(`Tarefa: ${inputTarefa.value} ja foi inserida anteriormente`)

        } else tarefa.push(inputTarefa.value)

        let linha = '<tr>'
        linha += `<td> <li> ${inputTarefa.value} </li></td>`;
        linha += '</tr>'

        linhas += linha
    }
    inputTarefa = '';
    console.log('tarefa:', inputTarefa);

    function atualizartarefa() {
        const corpoFormulario = document.querySelector('tbody');
        corpoFormulario.innerHTML = linhas;
    };


});

