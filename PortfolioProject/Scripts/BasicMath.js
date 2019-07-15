$(document).ready(function () {

    $("#bmCode").hide();

    $("#showBtn").click(function () {
        $("#bmCode").show();
    });

    $("#hideBtn").click(function () {
        $("#bmCode").hide();
    });

    $("#mathBtn").click(function () {
        //Step 1: Get user data
        var num1 = Number($("#mathnum1").val()); //Using val() here because it is taking in user input. GOES FOR BOTH INTEGERS AND STRINGS!!!
        var num2 = Number($("#mathnum2").val());
        var num3 = Number($("#mathnum3").val());
        var num4 = Number($("#mathnum4").val());
        var num5 = Number($("#mathnum5").val());

        //Step 2: Make the calculations with the given data
        var smallest = Math.min(num1, num2, num3, num4, num5); //The min() and max() functions are only two built-in functions at your disposal
        var largest = Math.max(num1, num2, num3, num4, num5);
        var sum = num1 + num2 + num3 + num4 + num5;
        var product = num1 * num2 * num3 * num4 * num5;
        var average = sum / 5;

        //Step 3: Display the results
        $("#smallest").text("Minimum Value: " + smallest); //Example of string concatenation.
        $("#largest").text("Maximum Value: " + largest);
        $("#sum").text("The sum is " + sum);
        $("#product").text("The product is " + product);
        $("#average").text("The mean of the values is " + average);
    });

    //Step 4: Allow the user to clear the results
    $("#clrBtn").click(function () {
        $("#mathnum1").val(""); //Clear all of the user input. Use .val() because we're working with numbers here.
        $("#mathnum2").val("");
        $("#mathnum3").val("");
        $("#mathnum4").val("");
        $("#mathnum5").val("");

        $("#smallest").text(""); //Clear all of the results. Use .text() because the results are in the form of strings.
        $("#largest").text("");
        $("#sum").text("");
        $("#product").text("");
        $("#average").text("");

    });
});