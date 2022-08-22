$("document").ready(function(){
    setInterval(function(){
           
    $("#container").fadeIn();

    },3000);
    $("#no").click(function(){
        $("#container").fadeOut();
    })
    
    })