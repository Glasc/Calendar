const select = document.getElementById('month')

const createCalendar = (days) => {
    let dayList = document.getElementById('calendar-numbers')
    dayList.innerHTML = ``;
    for (let i=1; i<=days; i++) {
       dayList.innerHTML += `<div class="calendar-number">${i}</div>`
    }
}

// `<div class="calendar-number">${i}</div>`

select.onchange = () => {

    let currentMonth = select.value
    let days = 31
    let monthTxt = document.getElementById('month-txt')
    monthTxt.innerHTML = currentMonth

    switch (currentMonth) {
        case 'february': 
        days = 28
        break
        case 'april':
        case 'june':
        case 'september':
        case 'november':
        days = 30
        break;
        default:
        days = 31;
    }
    createCalendar(days)
}

