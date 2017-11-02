$(document).ready(function() {
  $("#words form").submit(function(event) {
    event.preventDefault();
    var phrase = $("input#phrase").val();
    var splitPhrase = phrase.split("");
    console.log(splitPhrase[index]);
    var result = [];
    for (var index = 0; index < splitPhrase.length; index += 1) {
      console.log(splitPhrase[index]);
      if (splitPhrase[index] != "a" && splitPhrase[index] != "e" && splitPhrase[index] != "i" && splitPhrase[index] != "o" && splitPhrase[index] != "u") {
        result.push(splitPhrase[index]);
      } else {
        return splitPhrase;
      }
    }
    console.log(result);



    // var collectedPhrases = [$("input#phrase").val()];
    // var upperCases = collectedItems.map(function(collectedItem) {
    //   return collectedItem.toUpperCase();
    // // var alphaList = upperCases.map(function(upperCase) {
    // //   return upperCase.sort();
    // });
    // upperCases.sort();
    // console.log(upperCases);
    //
    // var one = upperCases[0];
    // var two = upperCases[1];
    //
    // $(".unstyled").append("<li>" + one);
    // $(".unstyled").append("<li>" + two);
    //
    // $("#puzzle").show();

  });
});
