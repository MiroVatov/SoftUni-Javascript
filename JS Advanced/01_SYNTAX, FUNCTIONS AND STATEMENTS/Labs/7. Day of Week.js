function solve(dayOfWeek) {
    let weekDays = {'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday': 6, 'Sunday': 7};
    if (weekDays.hasOwnProperty(dayOfWeek)){
        console.log(`${weekDays[dayOfWeek]}`);
    }
    else{
        console.log('error');
    }
}


solve('Monday');

solve('Friday');

solve('Invalid');
