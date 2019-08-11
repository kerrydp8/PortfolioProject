$(document).ready(function () {

    var output = document.getElementById("output");
    output.style.color = "green";

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
                output.push("<span style='color:blue'>Fizz</span>");
            }

            else if ((i % num2 == 0) && (i % num1 != 0)) {
                output.push("<span style='color:red'>Buzz</span>");
            }

            else if ((i % num1 == 0 && i % num2 == 0)) { //The issue was only the first condition was checked off in this statement, leading
                //only to "Fizz" being printed instead of "FizzBuzz". We fixed this by adding NOT conditions to the above statements.
                output.push("<span style='color: blue'>FizzBuzz</span>");
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

    document.getElementById("fbOut").style.color = "blue";
});