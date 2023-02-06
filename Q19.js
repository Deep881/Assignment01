
function main()
{
    let i=1,j=2,l,m;
    console.log(i);
    console.log(j);
    for(l=1;l<=8;l++)
    {
        m=i+j;
        console.log(m);
        i=j;
        j=m;
        
    }
    sum=0;
    sum+=i+j+m-2
        console.log('the sum of lucas series='+sum)
}
main()