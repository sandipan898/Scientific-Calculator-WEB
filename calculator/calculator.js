var box = document.getElementById("display");

function AddToScreen(x)
{
    box.value+=x;
    if(x=='C')
    {
        box.value="";
    }
}

function answer()
{
    x=box.value;
    x=eval(x);
    box.value=x;
}
function backspace()
{
    var number=box.value;
    var len=number.length-1;
    var newNum=number.substring(0,len);
    box.value=newNum;
}
function SquareRoot()
{
    x=box.value;
    var sqrt1 =math.sqrt(x);
    box.value=sqrt;
}
function Power(var y)
{
    x=box.value;
    x=math.pow(x,y);
    box.value=x;
}
function abso()
{
    x=box.value;
    x=math.abs(x);
    box.value=x;
}
function cel()
{
    x=box.value;
    x=math.ceil(x);
    box.value=x;
}
function flr()
{
    x=box.value;
    x=math.floor(x);
    box.value=x;
}
function expo()
{
    x=box.value;
    x=math.exp(x);
    box.value=x;
}
function log1()
{
    x=box.value;
    x=math.log(x);
    box.value=x;
}
function roundup()
{
    x=box.value;
    x=math.round(x);
    box.value=x;
}

