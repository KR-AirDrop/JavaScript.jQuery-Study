$(".tab-button").click(function () {
  var index = $(".tab-button").index(this);
  tap(index);
});

function tap(index) {
  $(".tab-button")
    .eq(index)
    .on("click", function () {
      $(".tab-button").removeClass("orange");
      $(".tab-content").removeClass("show");
      $(".tab-button").eq(index).addClass("orange");
      $(".tab-content").eq(index).addClass("show");
    });
}
