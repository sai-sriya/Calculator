let buttons=Array.from(document.getElementsByClassName('btn'));
let screen= document.getElementById("values");


buttons.map(function(button){
    button.addEventListener('click',function(e){
        // for reference -    console.log("clicked");
        // for reference -    console.log(e.target.innerText);
        switch(e.target.innerText){
            case 'C':
                screen.value = null ;
                break;
            case '=':
                try{
                    screen.value=eval(screen.value)
                }
                catch{
                    screen.value="Error!";
                }
                break;
            case  "←":
                screen.value=e.target.innerText.slice(-1,-2);
                break;
            default:
                screen.value= screen.value + e.target.innerText;
        }
    })
})

