// 1번 방법
$(".tab-button").click(function () {
  var index = $(".tab-button").index(this);
  tap(index);
});

// 2번 방법
// $(".list").click(function (e) {
//   tap(e.target.dataset.id);
// });

function tap(i) {
  $(".tab-button").removeClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-button").eq(i).addClass("orange");
  $(".tab-content").eq(i).addClass("show");
}

// data-자료이름="값"  으로 html에 데이터를 숨겨놓을 수 있다.
// 셀렉터.dataset.자료이름  으로 사용

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
