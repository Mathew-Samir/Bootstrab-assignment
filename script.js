const toggler = document.querySelector(".toggler-btn");
toggler.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("collapsed");
});


// Function to change main image based on thumbnail clicked
  function changeImage(imagePath) {
    document.getElementById('mainImage').src = imagePath;
    
    
  }