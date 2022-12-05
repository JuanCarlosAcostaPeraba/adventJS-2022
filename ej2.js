/*
Un millonario ha comprado una red social y no trae buenas noticias. Ha anunciado que cada vez que se pierda un día de trabajo debido a un día festivo, tendrá que ser compensado con dos horas adicionales otro día del mismo año.

Obviamente, las personas que trabajan en la empresa no han hecho la más mínima broma y están preparando un programa que les dice el número de horas extras que harían en el año si se aplicara la nueva regla.

Como es trabajo de oficina, su horario de trabajo es de lunes a viernes. Así que solo tienes que preocuparte por las vacaciones que caen en esos días.

Dado un año y una matriz con las fechas de los días festivos, devuelve el número de horas adicionales que se harían ese año:

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

countHours(year, holidays) // 2 days -> 4 extra hours in the year

Cosas a tener en cuenta:

El año puede ser un año bisiesto. Haz los cheques que necesites, si es necesario.

Aunque las vacaciones son el 31 de diciembre, las horas extras se harán el mismo año.

El método Date.getDay() devuelve el día de la semana de una fecha. 0 es domingo, 1 es lunes, etc.
*/

function countHours(year, holidays) {
    let extraHours = 0, day;
    holidays.forEach(holiday => {
        day = new Date(`${year}-${holiday.split("/")[0]}-${holiday.split("/")[1]}`).getDay();
        if (day != 0 && day != 6) {
            extraHours = extraHours + 2;
        }
    });
    return extraHours;
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

console.log(countHours(2022, ['01/06', '04/01', '12/25'])); // 2 days -> 4 extra hours in the year