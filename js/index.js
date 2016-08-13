$(document).ready(function() {
    quoteArray = ["Up, Up, Down, Down, Left, Right, Left, Right, B, A, Start, Select.",
        "All your base are belong to us!",
        "Waka, Waka, Waka, Waka, Waka.",
        "Aaaaaarrrrriiiiieeeesssss!!!!!",
        "I’m sorry, but your princess is in another castle.",
        "Aym Banjo, whoooooa",
        "It’s dangerous to go alone! Take this.",
        "Do a barrel roll!",
        "Hadouken!"
    ];
    sourceArray = ["Konami Code",
        "CATS, Zero Wing",
        "Pac-Man",
        "Kratos, God of War",
        "Toad, Super Mario Bros.",
        "Banjo, Diddy Kong Racing",
        "Old Man, The Legend of Zelda",
        "Peppy Hare, Star Fox 64",
        "Ryu/Ken, Street Fighter"
    ];

    $("#animatedRobot").click(function() {
        $(this).fadeOut();
        $("#destroy-text").fadeOut();

    });

    //Creates a random number that corresponds to a quote, then populates the page with the quote
    $(".refreshButton").click(function() {
        randomSpot = Math.floor(Math.random() * (quoteArray.length));
        $("#quoteText").html(quoteArray[randomSpot]);
        $("#quoteSource").html(sourceArray[randomSpot]);
    });

    //Dancing Robot Methods
    function roboLeft() {
        $("#animatedRobot").animate({
            left: ("-=" + $(document).width() / 3)
        }, 3000, "swing", roboRight);
    }

    function roboRight() {
        $("#animatedRobot").animate({
            left: ("+=" + $(document).width() / 3)
        }, 3000, "swing", roboLeft);
    }

    //Dance Party
    $("#animatedRobot").animate({
        left: ("-=" + $(document).width() / 3)
    }, 3000, "swing", roboRight);
    roboRight();

    //Test Zone


    //end of javascript
});
