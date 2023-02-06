
function main() {
    let l, d, name, ad, ld, dd,ap;

    name = prompt('enter your name')
    ad = prompt('enter your adress')
    l =parseInt(prompt('enter the cost of laptop'));
    d = parseInt(prompt('enter the value of desktop'));


    if (l >= 0 && l <= 25000 && d >= 0 && d <= 25000) {
        ld = 0 / 100 * l
        dd = 5 / 100 * d
    }
    else if (l >= 25001 && l <= 57000 && d >= 25001 && d <= 57000) {
        ld = 5 / 100 * l
        dd = 7.5 / 100 * d
    }
    else if (l >= 57001 && l <= 100000 && d >= 57001 && d <= 100000) {
        ld = 7.5 / 100 * l
        dd = 10 / 100 * d
    }
    else {
        ld = 10 / 100 * l
        dd = 15 / 100 * d
    }

    lpa = parseInt(l - ld);
    dpa = parseInt(d - dd);
    ap=lpa+dpa;
    document.getElementById('a12').innerHTML='purchase details:--'+'<br>'+'laptop amount='+l +'<br>'+'desktop amount='+ d +'<br>'+'coustomer name='+ name +'<br>'+'adress='+ ad +'<br>'+ 'amount to paid=='+ap;
}
main()