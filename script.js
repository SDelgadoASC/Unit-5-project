$(".actionbutton").click(function() {
    $(".hungryperson").hide();
    $(".actionbutton").text("DO YOU WANT SWEET POTATO?");
    $(".plainceviche").show();
});

$(".actionbutton").dblclick(function() {
    $(".actionbutton").text("DO YOU WANT SEAWEED?");
    $(".plainceviche").hide();
    $(".sweetpotato").show();
    
    $(".actionbutton").mouseenter(function() {
        $(".actionbutton").text("SATISFIED??");
        $(".sweetpotato").hide();
        $(".seaweed").show();
        
        $(".actionbutton").click(function() {
            $(".seaweed").hide();
            $(".plainceviche").hide();
            $(".satisfiedperson").show();
        });
    });
    
    
});



