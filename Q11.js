let tCost=parseInt(prompt('Enter Total Cost Of Shopping'));
// let tCost=1000;
// let damt=(50/100)*tCost;

// console.log(damt)

if (tCost<=2000)
{
    damt=5/100*tCost
    console.log(damt)
    document.getElementById("dis").innerHTML='You hav to Pay ='+damt;
}
else if (tCost>=2001 && tCost<=5000)
{
    damt=25/100*tCost
    console.log(damt)
    document.getElementById("dis").innerHTML='You hav to Pay ='+damt;
}
else if (tCost>=5001 && tCost<=10000)
{
    damt=35/100*tCost
    console.log(damt)
    document.getElementById("dis").innerHTML='You hav to Pay ='+damt;
}
else
{
    damt=50/100*tCost
    console.log(damt)
    document.getElementById("dis").innerHTML='You hav to Pay ='+damt;
}
