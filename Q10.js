let marks=parseInt(prompt('Enter marks Obtained in Comuter Science'))

if (marks>=90)
{
    document.getElementById("a10").innerHTML='Marks obtained=',""+marks;
    document.getElementById("a10").innerHTML='Grade A'
}
else if (marks>=70 && marks<90)
{
    document.getElementById("a10").innerHTML='Marks obtained=',""+marks;
    document.getElementById("a10").innerHTML='Grade B'
}
else if (marks>=50 && marks<70)
{
    document.getElementById("a10").innerHTML='Marks obtained=',""+marks;
    document.getElementById("a10").innerHTML='Grade C'
}
else
{
    document.getElementById("a10").innerHTML='Marks obtained=',""+marks;
    document.getElementById("a10").innerHTML='Grade D'
}