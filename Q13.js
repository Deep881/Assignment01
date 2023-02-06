
function main() {
    let age, gender, ti, it

    age =prompt('enter your age')
    gender = prompt('enter your gender (all small letters) male or female')
    ti = prompt('enter your income')
    if (ti <= 160000 && age > 65 && gender == 'female') {
        alert('wrong category')
    }
    else if (ti <= 160000 && age > 65 && gender == 'male') {
        alert('not applicable for income tax')
    }
    else if (ti >= 160001 && ti <= 500000 && age <= 65 && gender == 'female' || 'male') {
        it = 10 / 100 * ti
    }
    else if (ti >= 500001 && ti <= 800000 && age <= 65 && gender == 'female' || 'male') {
        it = 20 / 100 * ti + 34000
    }
    else {
        it = 30 / 100 * ti + 94000
    }

    itr = ti - it
    alert(itr)
}
main()