$(document).ready(function(){


    var wins = 0;
    var losses = 0;
    var goal = "";
    var userOption = [];
    var randomNumber;
    var userTotal = 0;

    function startGame (){
        goal = Math.floor(Math.random()*120)+19;
        //console.log(goal);
        $("#goal").text(goal);

        while (userOption.length < 4) {
            randomNumber = Math.floor(Math.random() * 11) +1;
            if (userOption.indexOf(randomNumber) === -1) {
                userOption.push(randomNumber);
            }
            //console.log(userOption)
            $(".img-button-1").attr("data-buttonvalue",userOption[0]);
            $(".img-button-2").attr("data-buttonvalue",userOption[1]);
            $(".img-button-3").attr("data-buttonvalue",userOption[2]);
            $(".img-button-4").attr("data-buttonvalue",userOption[3]);
        }
    }
    startGame();

    $(".img-button").on("click",function(){
        $(this).animate({opacity: '0.5'});
        $(this).animate({opacity: '1'});
        var buttonValue = ($(this).attr("data-buttonvalue"));
        buttonValue = parseInt(buttonValue);
        //console.log(buttonValue);
        userTotal += buttonValue;
        $("#usertotal").html(userTotal);
        if (userTotal === goal) {
            $("#result-1").animate({fontSize: "3em", opacity: '1'}, "slow");
            $("#result-1").animate({fontSize: "1em", opacity: '0'}, "slow");
            //alert("You win!");
            wins++;
            $(".wins").html(wins);
            userTotal = 0;
            $("#usertotal").html(userTotal);
            userOption = [];
            startGame();
        }
        else if (userTotal > goal) {
            $("#result-2").animate({fontSize: "3em", opacity: '1'}, "slow");
            $("#result-2").animate({fontSize: "1em", opacity: '0'}, "slow");
            //alert("You lost");
            losses++;
            $(".losses").html(losses);
            userTotal = 0;
            $("#usertotal").html(userTotal);
            userOption = [];
            startGame();
        }

    });
});
