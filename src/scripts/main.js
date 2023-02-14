//Animações das Imagens
AOS.init();


const dataDoEvento = new Date("mar 31, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {

    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % (diaEmMs)) / horasEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % (horasEmMs)) / (minutoEmMs));
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.querySelector('.hero__text').innerHTML ='Evento Expirado !'
    }
}, 1000)