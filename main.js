// Start color Buttons function
document.querySelectorAll('.colorFunction').forEach(function(item){
    item.onclick=function(){
        document.querySelector("#demo").style.color = item.dataset.color;
        document.querySelector("#demo").style.textAlign = item.dataset.place;
    }
})
// End color Buttons function


//Start Note bad function:-
document.querySelector('form').onsubmit = function(){
    var watch = document.querySelector("#watch").value;
    var result = document.querySelector("#result");
    if(watch.trim() !== ""){
        var myLi = document.createElement("li");
        myLi.innerHTML = watch;
        myLi.className = "my-2 text-primary";
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.className = "btn btn-danger ml-5 my-2";
        myLi.append(deleteButton);
        document.querySelector("#watch").value = "";
        deleteButton.onclick = function(){
            result.removeChild(myLi);
        }
        result.append(myLi);
    }else{
        result.append("Please enter a Valid Data!!");
        result.style = "color: red; font-size: 30px; font-family: monospace; margin-top: 15px;"
    }
    return false;
}
//End Note bad function:-