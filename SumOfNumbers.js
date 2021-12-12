let num1 = process.argv[2], num2 = process.argv[3];

if(Number.isInteger(Number(num1)) && Number.isInteger(Number(num2)))
{
    console.log(`Result: ${Number(num1) + Number(num2)}`);
    
}
else
{
    console.log("It's not a number!");
}