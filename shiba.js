const imgArr = ["https://images.unsplash.com/reserve/tdedkQnQGCgIhk9eoEkP_DSC_0983.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60","https://images.unsplash.com/photo-1575843456098-25dc4244e9f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60","https://images.unsplash.com/photo-1514030982278-0c4c4617d7ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60","https://images.unsplash.com/photo-1555918948-9be5b796f794?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60", "https://images.unsplash.com/photo-1521353410355-66ec7e37fbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"];

const preImg = document.querySelector(".button-previous");

const nextImg = document.querySelector(".button-next");
const getImg = document.querySelector(".img-middle");
preImg.addEventListener("click", previousImgage);
nextImg.addEventListener("click", nextImgage);
var count = 0;
function previousImgage() {
   count--;
      document.getElementById("myImg").src = imgArr[count];
   if (count <= 0) {
      count = 0;
      console.log(count);
      document.getElementById("myImg").src = imgArr[0];
   }
}


function nextImgage() {
   document.getElementById("myImg").src = imgArr[count];
   count++;
   if (count > imgArr.length) {
      count = imgArr.length-1;
      document.getElementById("myImg").src = imgArr[count];
   }
}