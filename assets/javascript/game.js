$(document).ready(function() {
    console.log("Ready!");


    var targetNumber = Math.floor(Math.random() * 150);

    $("#goal").text(targetNumber);

    var  stones = $("#points");
    console.log("" , stones)

    var wins = 0;

    var losses = 0;

    var counter = 0;

    var numberOptions = [12,7,5,9];

    for (var i= 0; i<numberOptions.length; i++) {
        console.log("Stone: ", stones.i)
        stones.i.attr("data-stonevalue", numberOptions[i]);
    }

    stones.on("click","#space" , function () {
    
        var stonevalue = ($(this).attr("data-stonevalue"));
        stonevalue=parseInt(stonevalue);
        counter += stonevalue;

    if (counter===targetNumber){
        wins++;
        $("#wins").text("<p>Wins: "+ wins +"</p>");
    } else if (counter >= targetNumber){
        losses++;
        $("#losses").text("<p>Losses: "+ losses+"</p>" );
    }
    

    stones.on("click","#soul" , function () {
    
        var stonevalue = ($(this).attr("data-stonevalue"));
        stonevalue=parseInt(stonevalue);
        counter += stonevalue;

    if (counter===targetNumber){
        wins++;
        $("#wins").text("<p>Wins: "+ wins +"</p>");
    } else if (counter >= targetNumber){
        losses++;
        $("#losses").text("<p>Losses: "+ losses+"</p>" );
    }
    

    stones.on("click","#time" , function () {
    
        var stonevalue = ($(this).attr("data-stonevalue"));
        stonevalue=parseInt(stonevalue);
        counter += stonevalue;

    if (counter===targetNumber){
        wins++;
        $("#wins").text("<p>Wins: "+ wins +"</p>");
    } else if (counter >= targetNumber){
        losses++;
        $("#losses").text("<p>Losses: "+ losses+"</p>" );
    }
    });

    stones.on("click","#power" , function () {
    
        var stonevalue = ($(this).attr("data-stonevalue"));
        stonevalue=parseInt(stonevalue);
        counter += stonevalue;

    if (counter===targetNumber){
        wins++;
        $("#wins").text("<p>Wins: "+ wins +"</p>");
    } else if (counter >= targetNumber){
        losses++;
        $("#losses").text("<p>Losses: "+ losses+"</p>" );
    }
});
