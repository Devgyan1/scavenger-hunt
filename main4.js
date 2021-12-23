function riddle(){
    word=document.getElementById("riddle-ans").value;
    if(word=="NOTHING"){
        window.location="hint5.html"
    }
    else{
        window.alert ("nope "+word+" is WRONG");
    }
}