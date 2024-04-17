// var img = document.getElementById("index0");
// console.log(imgs);
var img = document.querySelector("img");
var srcs = [
  "pexels-elias-tigiser-1235757.jpg",
  "pexels-josh-sorenson-1384909.jpg",
  "pexels-muhammet-cengi̇zov-19017576.jpg",
  "pexels-sindre-fs-965967.jpg",
];

function nextPic() {
  var current = img.getAttribute("src");
  var currentIndex = srcs.indexOf(current);
  if (currentIndex == srcs.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  img.setAttribute("src", srcs[currentIndex]);
}

function prevPic() {
  var current = img.getAttribute("src");
  var currentIndex = srcs.indexOf(current);
  if (currentIndex == 0) {
    currentIndex = srcs.length - 1;
  } else {
    currentIndex--;
  }
  img.setAttribute("src", srcs[currentIndex]);
}
