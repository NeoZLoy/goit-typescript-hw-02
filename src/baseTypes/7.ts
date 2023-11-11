/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum weekDay{
sunday,
monday,
tuesday,
wednesday,
thursday,
friday,
saturday
}

function isWeekend (day:weekDay):boolean {
if(day === weekDay.saturday || day === weekDay.sunday ){
  return true;
}
else {
  return false
}
}

