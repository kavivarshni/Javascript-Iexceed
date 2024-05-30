function except(x,y)
{
    try
        {
            if(y==0)
            {
                throw("Division by zero is not possible");   
            }
            else{
                console.log(x/y);
            }
        }
            catch(e)
            {
                 console.log(e);
            }
            finally
            {
             console.log("Finally will be executed even error occurs or not");
            }
}  
except(20,0);

function display()
{
    try{
        console.log("Executed");
        myfunction();
    }
    catch(e)
    {
        console.log(e);
    }
}
display();

