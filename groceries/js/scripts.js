$(document).ready(function() {
  $("#groceries form").submit(function(event) {
    event.preventDefault();
    var collectedItems = [$("input#foodItem").val(), $("input#foodItem2").val()];
    var upperCases = collectedItems.map(function(collectedItem) {
      return collectedItem.toUpperCase();
    // var alphaList = upperCases.map(function(upperCase) {
    //   return upperCase.sort();
    });
    upperCases.sort();
    console.log(upperCases);

    var one = upperCases[0];
    var two = upperCases[1];

    $(".unstyled").append("<li>" + one);
    $(".unstyled").append("<li>" + two);

    $("#foodList").show();

  });
});
