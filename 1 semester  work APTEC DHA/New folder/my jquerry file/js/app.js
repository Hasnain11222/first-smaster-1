$("document").ready(function(){
    $("#loader").fadeOut(5000);

})
    $("#txt").keyup(function(){
        var txtValue = $("#txt").val();
        $("#heading2" ).text("Wellcome")
        $("#heading").text(txtValue);
    })

