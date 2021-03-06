$(".submit").click(function() {
    var color = $(".color").val();
    var object = $(".object").val();
    $(".start").hide();
    $(".reset").show();
    
    if (color === "black" && object === "1") {
        $(".resultsText").text("You are Riley!");
        $(".resultsPic").append('<img class="resultPic" src="https://drive.google.com/uc?id=1GmTOslhg99pi0MiYsLKqJS2lkxQf9m7k">');
    } else if (color === "blue" && object === "1") {
        $(".resultsText").text("You are Andrew!");
        $(".resultsPic").append('<img class="resultPic" src="https://drive.google.com/uc?id=15ybSPHB7P-NzmJ6H2qn8cCD8me9aEV2O">');
    } else if (color === "yellow" && object === "1") {
        $(".resultsText").text("You are Eliza!");
        $(".resultsPic").append('<img class="resultPic" src="https://drive.google.com/uc?id=1bh9uh5b8BBpZqah9hvPnMkqxDQMR4Hqq">');
    } else if (color === "blue" && object === "2") {
        $(".resultsText").text("You are Shane!");
        $(".resultsPic").append('<img class="resultPic" src="https://scripted.org/wp-content/uploads/2014/08/Shane_Morris_DSC_resized-1024x768.jpg">');
    } else if (color === "yellow" && object === "2") {
        $(".resultsText").text("You are Alyxe!");
        $(".resultsPic").append('<img class="resultPic" src="https://scripted.org/wp-content/uploads/2014/08/DSC_5193-EA2-1024x684.jpg">');
    } else if (color === "black" && object === "2") {
        $(".resultsText").text("You are Francesca!");
        $(".resultsPic").append('<img class="resultPic" src="https://drive.google.com/uc?id=1VOQjnVI_5aCE_ZiWcZ2v2YXjV1kTLR8m">');
    } else if ((color === "blue" || "yellow" || "black") && object === "3") {
        $(".resultsText").text("You are Michael & Peter!");
        $(".resultsPic").append('<img class="resultPic" src="https://drive.google.com/uc?id=1FAeFUZhwaP79c4aXH8cIcszbUKXs8oOH">');
    } else {
        $(".resultsText").text("Error! You inputted something incorrectly. Read the directions carefully and try again!");
    }
});

$(".reset").click(function() {
    location.reload();
});