var wins = 0;
var losses = 0;
var goal = "";
var userOption; //= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var userOptionSet = [];
var userTotal = 0;

function startGame (){
    goal = Math.floor(Math.random()*120)+19;
    //console.log(goal);
    $("#goal").text(goal);

    for ( var i = 0; i < 4; i++){
        userOption = Math.floor(Math.random() * 12)+1;
        //console.log(userOption);
        if (userOptionSet.indexOf(userOption) < 0) {  //not sure what I did here but sometimes it only prints 3 numbers
            userOptionSet.push(userOption);
        }
        console.log(userOptionSet)
        $(".img-button-1").attr("data-buttonvalue",userOptionSet[0]); //don't understand why userOptionSet[i] doesn't work
        $(".img-button-2").attr("data-buttonvalue",userOptionSet[1]);
        $(".img-button-3").attr("data-buttonvalue",userOptionSet[2]);
        $(".img-button-4").attr("data-buttonvalue",userOptionSet[3]);
    }
}
startGame();

$(".img-button").on("click",function(){
    $(this).animate({opacity: '0.5'});
    $(this).animate({opacity: '1'});
    var buttonValue = ($(this).attr("data-buttonvalue"));
    buttonValue = parseInt(buttonValue);
    console.log(buttonValue);
    userTotal += buttonValue;
    $("#usertotal").html(userTotal);
    if (userTotal === goal) {
        alert("You win!");
        wins++;
        $(".wins").html(wins);
        userTotal = 0;
        $("#usertotal").html(userTotal);
        startGame();
    }
    else if (userTotal > goal) {
        alert("You lost");
        losses++;
        $(".losses").html(losses);
        userTotal = 0;
        $("#usertotal").html(userTotal);
        startGame();
    }

})

