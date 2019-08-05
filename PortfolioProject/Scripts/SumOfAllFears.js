$(document).ready(function () {

    $("#soafCode").hide();

    $("#showBtn5").click(function () {

        $("#soafCode").show();

    });


    $("#hideBtn5").click(function () {

        $("#soafCode").hide();

    });



    $("#soafBtn").click(function () {

        var num1 = +$("#mathnum1S").val();
        var num2 = +$("#mathnum2S").val();
        var num3 = +$("#mathnum3S").val();
        var num4 = +$("#mathnum4S").val();
        var num5 = +$("#mathnum5S").val();
        var num6 = +$("#mathnum6S").val();
        var k = +$("#kvalue").val();

        var values = [num1, num2, num3, num4, num5, num6];
        var sums = [];
        var sol1 = [];
        var sol2 = [];

        for (var i = 0; i < values.length - 1; i++) {

            for (var j = 0; j < values.length - 1; j++) {

                if ((values[i] + values[j + 1])) {
                    sol1.push(values[i]);
                    sol2.push(values[j + 1]);
                    sums.push(values[i] + values[j + 1]);
                }

            }
        }

        for (var num = 0; num < sums.length-1; num++) {

            if (k == sums[num]) {
                $("#kOut").text("The k-value " + sums[num] + " has been found by adding " + sol1[num] + " and " + sol2[num]);
                return;

            }

            else {
                $("#kOut").text("The k-value has not been found");
            }
        }

        /*
            if (k == (sum[0] + sum[1])) {
                $("#kOut").text("The k-value " + k + " has been found by adding " + sum[0] + " and " + sum[1]);
                //return; //This needs to be here to stop the else statement from executing. Some values will not equal k causing both
                //statements to want to execute.

                //YOU SHOULD STILL BE ABLE TO PUT SOMETHING HERE TO CHECK FOR THE I AND J VALUES RESPONSIBLE. It isn't like any of this
                //changes the user input.
            }

            else
            {
                $("#kOut").text("The k-value has not been found");
            }
            */
    });

    $("#clrBtn5").click(function () {

        $("#mathnum1S").val("");
        $("#mathnum2S").val("");
        $("#mathnum3S").val("");
        $("#mathnum4S").val("");
        $("#mathnum5S").val("");
        $("#mathnum6S").val("");
        $("#kvalue").val("");
        $("#kOut").text("");

    });
});