$(document).ready(function () {


    $("#code").hide(); //Make sure this is there so the code is hidden when the page first loads.

    $("#showBtn3").click(function () {
        $("#code").show(); //Uses jQuery to show/find code. There are hide/show toggles to do it individually
        //as well(hide() and show() respectively). Make sure to use conditional statements to change the text from "Show Code"
        //to "Hide Code" on the button.
    });

    $("#hideBtn3").click(function () {
        $("#code").hide();
    });

    $("#palinEnter").click(function () {
        //Step 1: Get the word
        var word = $("#palIn").val(); //User input

        word = word.toLowerCase(); //All the letters will be lowercase. If it is a palindrome, it will look better that way.

        var letters = word.split(""); //Splits the word into an array. Since there's no punctuation between the quotations, the word will be
        //split into seperate characters by default.

        //Step 2: Reverse the array
        letters = letters.reverse(); //Reverses the elements in the array
        var reversedWord = letters.join(""); //Merges the elements of the reversed array into a string and stores it in this new variable.


        //IMPORTANT NOTE: Probably a way to concatenate some of the above functions and call them all together in fewer lines but still works either way.


        //Step 3: Inform the user
        $("#palOut").text(reversedWord);

        if (word === reversedWord) {
            $("#palOut2").text("Yes, this is a palindrome."); //Reference to first output object
        }
        else {
            $("#palOut2").text("No, this is not a palindrome."); //Reference to second output object
        }

    });

    $("#clrBtn3").click(function () {

        $("#palIn").val(""); //Clears user input
        $("#palOut").text(""); //Clears first output statement
        $("#palOut2").text(""); //Clears second output statement

    });

    $("#forLoop").click(function() {

        var word = $("#palIn").val();

        word = word.toLowerCase();


        for (var i = word.length - 1; i < word.length; i++) {

            if (word.charAt([i]) === word.charAt([word.length - 1 - i])) {
                $("#palOut").text(word);
                $("#palOut2").text("Yes, this is a palindrome.");
            }
            else {
                $("#palOut2").text("No, this is not a palindrome."); 
            }
        }
    });

});

//Second solution:

        //for (var index = word.length - 1; newword = "; index >= 0; i--){
        // newword += word.substr(index, 1);
        // }
