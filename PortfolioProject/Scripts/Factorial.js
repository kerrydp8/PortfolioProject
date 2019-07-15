$(document).ready(function () {

    $("#factCode").hide();

    $("#showBtn2").click(function () {
        $("#factCode").show();
    });

    $("#hideBtn2").click(function () {
        $("#factCode").hide();
    });

    $("#factBtn").click(function () {

        //Step 1: Get user data
        var num = $("#fact").val(); //Reference to the user input tag to get user input and stores it in this variable
        var i = 1;

        //If the number is greater than 171 or less than 0, this message will be alerted to the user via pop-up.
        if (num < 1 || num > 171) {
            alert("Please enter positive numbers less than 171!"); //alert() can be used for pop-up messages.
            $("#fact").val(""); //Clears input

            //If you didn't want to use an if/else statement, you could drop the else and just put a return; here so that the function still
            //won't run with incorrect criteria.

            //Don't forget else/if for other conditions (Ex: Still allowing the function to execute, but displaying a warning message that
            //the user is about to hit the maximum)
        }

        else {

            //Step 2: Loop

            /*
            for (var i = num-1; i > 1; i--) { //loop > 1 instead of loop > 0 because this is a factorial and 1 would be useless essentially.
                //i = num-1 instead of just 1 so the value starts by multiplying the number by one less and not
                //just itself.Apparently, it can be done this way.
                num *= i;
            }
            */
            while (i <= num) {
                num = num * i;
                i++;
            }

            //Step 3: Show the result
            $("#factOut").text("The factorial of this value is " + num);
        }

    });

    //Step 4: Provide a clear button
    $("#clrBtn2").click(function () {

        $("#fact").val(""); //Clear user input
        $("#factOut").text(""); //Clear results
    });
});