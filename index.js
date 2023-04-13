var flag = 1;
var X = [];
var O = [];
var clicked = [];

var cond1 = ["cell1", "cell2", "cell3"];
var cond2 = ["cell4", "cell5", "cell6"];
var cond3 = ["cell7", "cell8", "cell9"];
var cond4 = ["cell1", "cell4", "cell7"];
var cond5 = ["cell2", "cell5", "cell8"];
var cond6 = ["cell3", "cell6", "cell9"];
var cond7 = ["cell1", "cell5", "cell9"];
var cond8 = ["cell3", "cell5", "cell7"];

var conditions = [cond1, cond2, cond3, cond4, cond5, cond6, cond7, cond8];

// console.log(clicked)

$(".cell").hover(function() {
    // console.log(this);
    if (!clicked.includes(this)) {
       
        // console.log(clicked)
        if(flag == 1) {
            $(this).html("<h1 class='opacity'>X</h1>");
        }
        else { 
            $(this).html("<h1 class='opacity'>O</h1>");
        }
    }


}, function() {

    if (!clicked.includes(this)) {
        $(this).empty();
    }
    
});

$(".cell").click(function() {

    if(!clicked.includes(this)) {
        if(flag == 1) {
            $(this).html("<h1>X</h1>")
            flag = 0;
            X.push(this.id);
            // console.log(X);
            if(X.length >= 3) {
                checkWin(X, "X");
            }
        }
        else {
            $(this).html("<h1>O</h1>")
            flag = 1;
            O.push(this.id);
            // console.log(O); 
            if(O.length >= 3) {
                checkWin(O, "O");
            }
        }
        clicked.push(this);
    }
    // console.log("here");

})

function checkWin(sequence, sign) {
    
    for (let i = 0; i < conditions.length; i++) {
        
        var win = 0;
        
        for (let j = 0; j < 3; j++) {
            
            var bool = sequence.includes(conditions[i][j]);
            if(bool === false) {
                break;
            }

            if(j === 2) {
                $("body").css("background-color", "rgba(0, 0, 0, 0.9)");
                $(".winner").text(sign + " Wins!");
                $(".win-screen").removeClass("hide");

                win = 1;
            }
            
        }

        if(win === 1) {
            break;
        }
        else if(i === conditions.length - 1 && sequence.length === 5) {
            $("body").css("background-color", "rgba(0, 0, 0, 0.9)");
            $(".winner").text("Draw!");
            $(".win-screen").removeClass("hide");
        }
        
    }

}

$("button").click(function() {

    $(".cell").empty();
    $("body").css("background-color", "white");
    $(".win-screen").addClass("hide");
    clicked = [];
    X = [];
    O = [];
})


