function relogio() {

    const elementoRelogio = document.querySelector('.relogio');
    const horaAtual = new Date();
    const horas = horaAtual.getHours();
    const minutos = horaAtual.getMinutes();
    const segundos = horaAtual.getSeconds();
var img = document.querySelector('#imagem');
    const formatoHoras = 13;
    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart(2, "0");

    elementoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;

    const frase = document.querySelector('.frase');

    dia = new Array ('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado');

    mes = new Array ('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro','Novembro', 'Dezembro');

    hoje = new Date

    frase.innerHTML = `${dia[hoje.getDay()]}<br>${hoje.getDate().toString().padStart(2, "05")} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`

    if(formatoHoras >= 0 && formatoHoras <12){
        document.body.style.backgroundImage ="url(https://independente.com.br/wp-content/uploads/2020/03/%C3%ADndice-10-111.jpg)"
        img.src = "https://img1.gratispng.com/20171220/lhe/real-sun-png-5a3ad40d3e9ac2.09858493151380481325643102.jpg"
        
    }

    else if(formatoHoras >= 13 && formatoHoras <18){
        document.body.style.backgroundImage = "url(https://jornalnoroeste.com.br/files/images/6426aae9dda091.49071906.jpg)"
    }

}




    

setInterval(relogio, 1000)