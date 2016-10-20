$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var animal = parseInt($("#animal").val());
    var food = parseInt($("#food").val());
    var hobby = parseInt($("#hobby").val());
    var total = animal + food + hobby;

  if (total <= 5 ) {
    $(".celebrity1").show();
    } else if (total > 5 && total <= 10) {
    $(".celebrity2").show();
  } else if (total > 10 && total <= 15) {
    $(".celebrity3").show();
  }

  $(animal).empty() {
    $(".form-group has-error").show();
  }

  });
});



    //
    //
    // $(".parkHeight").text(height);
    // if (height >= 60) {
    //   $(".allRides").show();
    //   $(".under60in").removeClass();
    //   $(".over60inHeader").removeClass();
    //   } else {
    //   $(".allRides").show();
    //   $(".over60in").removeClass();
    //   $(".under60inHeader").removeClass();
    //
