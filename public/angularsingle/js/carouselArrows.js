



//slider having two article the following code
$(document).ready(function () {
   
            let count1 = $(".carousel__div").length;
         let count2 = $(".carousel2__div").length;
    let count3 = $(".carousel3__div").length;
    let count4 = $(".carousel4__div").length;
                if (count1 == 2) {

        $(".carousel__div").css({
            "transition": "2.2s", "transition-delay": "11000", "transition-duration": "0.1s"
        });

    } else if (count2 == 2) {
        $(".carousel2__div").css({
            "transition": "2.2s", "transition-delay": "11000", "transition-duration": "0.1s"
        });

    } else if (count3 == 2) {
        $(".carousel3__div").css({
            "transition": "2.2s", "transition-delay": "11000", "transition-duration": "0.1s"
        });

                } else if (count4 == 2) {
                    $(".carousel4__div").css({
                        "transition": "2.2s", "transition-delay": "11000", "transition-duration": "0.1s"
                    });

                }

});

    //if length of carousel one then arrow should be hide code

$(document).ready(function () {
    if ($(".carousel__div").length == 1) {

        $("#next11, #prev11").css("visibility", "hidden");
        $(".carousel__div").css("transform", "translateX(0%)");

    } else if ($(".carousel2__div").length == 1) {
        $(" #next22, #prev22").css("visibility", "hidden");
        $(".carousel2__div").css("transform", "translateX(0%)");


    } else if ($(".carousel3__div").length == 1) {
        $(" #next33, #prev33").css("visibility", "hidden");
        $(".carousel3__div").css("transform", "translateX(0%)");
    } else if ($(".carousel4__div").length == 1) {
        $(" #next44, #prev44").css("visibility", "hidden");
        $(".carousel4__div").css("transform", "translateX(0%)");
    }

    else {

        $("#next11, #prev11,#next22, #prev22,#next33, #prev33,#prev44,#next44").css("visibility", "visible");
    }
});

    //arrow center code
$(document).ready(function () { 
        $(".carousel__div.active img").on('load', function () {

            $("#prev11,#next11").css("margin-top", $(this).height() / 2);

         });
                $("#prev11,#next11").click(function () {

                    var sam1 = $(".carousel__div.active img").height()/2;
                    if (sam1) {
        $("#prev11,#next11").css("margin-top", sam1);
    }
});

                $(".carousel2__div.active img").on('load', function () {

        $("#prev22,#next22").css("margin-top", $(this).height() / 2);
    });
                $("#prev22,#next22").click(function () {

                    var sam1 = $(".carousel2__div.active img").height()/2;
                    if (sam1) {
        $("#prev22,#next22").css("margin-top", sam1);
    }
});


                $(".carousel3__div.active img").on('load', function () {

        $("#prev33,#next33").css("margin-top", $(this).height() / 2);
    });
                $("#prev33,#next33").click(function () {

                    var sam = $(".carousel3__div.active img").height()/2;
                    if (sam) {
        $("#prev33,#next33").css("margin-top", sam);
    }
    });


    $(".carousel4__div.active img").on('load', function () {

        $("#prev44,#next44").css("margin-top", $(this).height() / 2);
    });
    $("#prev44,#next44").click(function () {

        var sam3 = $(".carousel4__div.active img").height() / 2;
        if (sam3) {
            $("#prev44,#next44").css("margin-top", sam3);
        }
    });
           
setTimeout(10000, $(".carousel__div.initial.active img").trigger('load'));
setTimeout(10000, $(".carousel2__div.initial.active img").trigger('load'));
    setTimeout(10000, $(".carousel3__div.initial.active img").trigger('load'));
    setTimeout(10000, $(".carousel4__div.initial.active img").trigger('load'));
});

