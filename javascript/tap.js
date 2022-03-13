$(".tab-button").click(function () {
  var index = $(".tab-button").index(this);
  console.log(index);
  tap(index);
});

function tap(i) {
  console.log(i);
  $(".tab-button").removeClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-button").eq(i).addClass("orange");
  $(".tab-content").eq(i).addClass("show");
}

// for (let i = 0; i < $(".tab-button").length; i++) {
//   $(".tab-button")
//     .eq(i)
//     .on("click", function () {
//       $(".tab-button").removeClass("orange");
//       $(".tab-button").eq(i).addClass("orange");
//       $(".tab-content").removeClass("show");
//       $(".tab-content").eq(i).addClass("show");
//     });
// }
