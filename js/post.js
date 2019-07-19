var toggleEdit=true;
function edit()
{
    
    var temp = document.getElementsByClassName("editSaveButton")[0];
    
    if(toggleEdit)
    {
        temp.innerHTML = "Save";
        var template="<i class='fa fa-save' >"+
                    "</i>";
        temp.innerHTML += template;
        document.getElementById("blogBody").contentEditable=true;
        document.getElementById("blogTitleNew").contentEditable=true;
        document.getElementById("blogBody").style.border="1px solid black";
        document.getElementById("blogTitleNew").style.border="2px solid pink";
        toggleEdit=false;
    }
    else
    {
        temp.innerHTML = "Edit";
        var template="<i class='fa fa-edit' >"+
                    "</i>";
        temp.innerHTML+=template;
        document.getElementById("blogBody").contentEditable=false;
        document.getElementById("blogTitleNew").contentEditable=false;
        document.getElementById("blogBody").style.border="1px none black";
        document.getElementById("blogTitleNew").style.border="2px none pink";
        toggleEdit=true;
    }
}

var likes=0;
function like()
{
    likes++;
    if(likes==1)
    {
        document.getElementsByClassName("likeText")[0].innerHTML="1 person likes this!";

    }
    else
    {
        document.getElementsByClassName("likeText")[0].innerHTML=likes+" people have liked this!";
    }
}

var comments =[];

function addComment()
{
     var list = document.getElementsByClassName("commentList")[0];
     var comment = document.getElementById("comment");
     var temp= "<p class='row commentContent'>"+
     comment.value+
     "</p>";
     list.innerHTML = list.innerHTML + temp;

     comment.innerHTML="";
     comment.value="";
     comment.placeholder="Leave a coment...";
 }