

function signUp()
{
    var modal=document.getElementById("modalSignUp");
    modal.style.display = "block";
}

function getOutSignUp()
{
    var modal=document.getElementById("modalSignUp");
    modal.style.display= "none";
}

window.onclick = function(event)
{
    
    if(event.target==document.getElementById("modalSignUp"))
    {
        document.getElementById("modalSignUp").style.display="none";

    }
    else if(event.target==document.getElementById("modalSignIn"))
    {
        document.getElementById("modalSignIn").style.display="none";
    }

    else if(event.target==document.getElementById("modalDeletePost"))
    {
        document.getElementById("modalDeletePost").style.display="none";
    }
}

function signIn()
{
    var modal = document.getElementById("modalSignIn");
    modal.style.display="block";
}

function getOutSignIn()
{
    var modal = document.getElementById("modalSignIn");
    modal.style.display="none";
}

function openSignUp()
{
    var modal=document.getElementById("modalSignIn");
    modal.style.display="none";
    modal=document.getElementById("modalSignUp");
    modal.style.display="block";
}