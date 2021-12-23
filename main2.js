function letter(){
    ans=document.getElementById("anagram-ans").value;
    if(ans=="I WILL WIN"){
        window.location="hint3.html";
    }
    else{
        window.alert("The answer "+ans+" is wrong");
    }
}