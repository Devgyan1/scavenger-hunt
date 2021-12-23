function number(){
    ans=document.getElementById("math-ans").value;
    if(ans=="^#!(^*"){
        window.location="hint4.html";
    }
    else{
        window.alert("The answer "+ans+" is wrong");
    }
}