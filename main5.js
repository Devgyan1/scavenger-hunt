function riddle(){
    answer=document.getElementById("find-ans").value;
    if(answer=="wasgrsdf"){
        window.location="final.html"
    }
    else{
        window.alert ("The answer "+answer+" is WRONG");
    }
}