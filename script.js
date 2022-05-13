let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

const find = ([min, max]) => {
    if (min === null && max === null) {
        return console.log('Пустой запрос')
    }

    if (min === null) { min = 0 }
    if (max === null) { max = Infinity }

    return courses.filter(course => {
        const {prices} = course;
        if (prices[0] === null && prices[1] !== null) {
            prices[0] = 0;
        }
        if (prices[1] === null && prices[0] !== null) {
            prices[1] = Infinity;
        }
        if (prices[0] >= min && prices[0] < max && prices[1] <= max) {
            console.log(course.prices)
            document.write(course.name + '; ')
            return course;
        }
    })
}
find([])



