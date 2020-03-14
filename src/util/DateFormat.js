/**
 * DateFormat by EdsonPaulo
 * Function to convert dateString in the format UTC (eg.: 2020-03-14T14:25:15Z)
 *      to: weekday, day month year (portuguese).
 */

const monthsList = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]

const weekdayList = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
]

export default function DateFormat (dateString) {
    
    const date = new Date (dateString);

    const day = date.getDate(); //retorna de 1-31
    const year = date.getFullYear(); 

    const weekday = weekdayList[ date.getDay() ]; //.getDay retorna de 0-6
    const month = monthsList[ date.getMonth() ];  //.getMoth de 0-11

    const dateFormated = `${weekday}, ${day} de ${month} de ${year}`

    console.log(dateFormated);

    return dateFormated;
}