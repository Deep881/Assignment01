function main()
{
    let p,r,t,si;

    p=parseInt(prompt('Enter the principal'));
    r=parseInt(prompt('Enter the rate'));
    t=parseInt(prompt('Enter the duration'));
    si=(p*r*t)/100;
   document.getElementById('a7').innerHTML='simple interest='+si;
}

main()