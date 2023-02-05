

let slideIndex=0;
const myPhotos = document.querySelectorAll(".photo-wrapper")

const mainOverlay = document.getElementById("main-overlay")
const overlayWrapper = document.getElementById("overlay-wrapper")

 function showMainOverlay(){
   mainOverlay.style.display = "block";
 }
 function hideMainOverlay(){
   mainOverlay.style.display = "none";
 }
 function closeOverlay(){
   if(overlayWrapper.style.display == "block"){
overlayWrapper.style.display = "none"
 
   hideMainOverlay()
   }
 }
 function nextSlide(){
   if(slideIndex > myPhotos.length - 2){
    slideIndex = 0;
   showSlide(slideIndex )
   }else{
   showSlide(slideIndex +1 )
   }
   }
   function prevSlide(){ 
     if(slideIndex < 1){
       slideIndex = myPhotos.length
     showSlide(slideIndex - 1)
     }else{
     showSlide(slideIndex - 1)
     }   
   }
const imageContainer = document.getElementsByClassName("image-container")

Array.from(imageContainer).forEach((myImage,id)=>{myImage.addEventListener("click", function(){
 showSlide(id)
 
})
})

function showSlide(n){
console.log(n)
slideIndex= n;

const authorInfo = document.getElementsByClassName("javascript-author-info");
const image= imageContainer[n].firstElementChild.src
const authorPhoto = authorInfo[n].firstElementChild.src

const authorName = authorInfo[n]. lastElementChild.innerText

const photosObject ={
  name :authorName,
  photo :authorPhoto,
  Bigimage : image
}
let photoArray =[]
photoArray.push(photosObject)
console.log(photoArray)

overlayWrapper.innerHTML =  `<div class="author-info javascript-author-info des
-responsiveness"> <img src="${photoArray[0].photo}" class="photo-author" alt=""> <p class="author-name">${photoArray[0].name}</p>
<i onclick="closeOverlay()" id="closeOverlay" class="fa-solid fa-times"></i>
</div>
<div id="main_overlay_big_image_container">

<img id="main_overlay_big_image" src="${photoArray[0].Bigimage}" alt="">
       </div>
   <div class="desktop-responsiveness mobile-responsiveness-bottom-flex overlay-bottom">
     <div class="flex-row"  >
<i class="fa-solid fa-heart"></i>  <i class="fa-solid fa-plus"></i>
   </div>
   <div class="flex-row">
<button class="download-btn">Download</button>
<i class="fa-solid fa-download" ></i> </div>
<div class="controlSlide">
<i onclick="prevSlide()" class="fa-solid fa-angle-left"></i>
<i onclick="nextSlide()"class="fa-solid fa-angle-right"></i>
</div>

 </div>`
 overlayWrapper.style.display = "block"
showMainOverlay()
}

let topNav = document.getElementById('topNav')
let menuBar = document.getElementById('showMenu');

function showMenu(){
topNav.classList.toggle("active")
}

menuBar.addEventListener("click",()=>{
  showMenu()
})