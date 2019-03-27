$(document).ready(function(){
    $(".navbar-nav li a").click(function(event){
        
        var toggle = $(".navbar-toggler").is(":visible");
        if(toggle){
            $(".navbar-collapse").collapse('hide');
        }
    });
})




