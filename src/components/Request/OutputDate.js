import React from 'react';

function printMonth(months) {
    switch(parseInt(months)) {
        case 1:
            return "января";
        case 2:
            return "февраля";
        case 3:
            return "марта";
        case 4:
            return "апреля";
        case 5:
            return "мая";
        case 6:
            return "июня";
        case 7:
            return "июля";
        case 8:
            return "августа";
        case 9:
            return "сентября";
        case 10:
            return "октября";
        case 11:
            return "ноября";
        case 12:
            return "декабря";
        default:
            return "";
    }
}

export default function OutputDate(props) {
    let date = props.date;
    if (date === null) {
        return "-"
    }
    date = new Date(date);
   
    
    const notComment = props.notComment;
    let days = date.getDate();
    let months = date.getMonth();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    months = printMonth(months);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (notComment) {
        let years = date.getFullYear();
        
        var result = days + " " + months + " " + years + "г.";
    }
    else{
        var result = days + " " + months + ", " + hours + ":" + minutes + " прокомментировал";
    }
    
    return result;
}