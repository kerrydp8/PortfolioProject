$(document).ready(function () {

    $("#fbCode").hide();

    $("#showBtn4").click(function () {
        $("#fbCode").show();
    });

    $("#hideBtn4").click(function () {
        $("#fbCode").hide();
    });

    $("#fbBtn").click(function () {

        var num1 = +$("#mathnum1F").val();
        var num2 = +$("#mathnum2F").val();
        var output = [];

        for (var i = 1; i <= 100; i++) {

            if ((i % num1 == 0) && (i % num2 != 0)) {
                output.push("Fizz");
            }

            else if ((i % num2 == 0) && (i % num1 != 0)) {
                output.push("Buzz");
            }

            else if ((i % num1 == 0 && i % num2 == 0)) { //The issue was only the first condition was checked off in this statement, leading
                //only to "Fizz" being printed instead of "FizzBuzz". We fixed this by adding NOT conditions to the above statements.
                output.push("FizzBuzz");
            }

            else {
                output.push(i);
            }
        }

        $("#fbOut").text(output);

    });

    $("#clrBtn4").click(function () {

        $("#mathnum1F").val(""); //Clear user input
        $("#mathnum2F").val(""); //Clear user input
        $("#fbOut").text(""); //Clear results

    });
});