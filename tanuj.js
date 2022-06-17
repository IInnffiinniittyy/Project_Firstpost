var index = 0;

show_image(index);
showimages(index);

// MANUAL NAVIGATION
function show_image(i) {
  index += i;

  var images = document.getElementsByClassName("image");

  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  if (index > images.length - 1) index = 0;
  if (index < 0) index = images.length - 1;

    images[index].style.display = "block";
    
}

// AUTO NAVIGATION
function showimages() {
    let i;
    let images = document.getElementsByClassName("image");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < images.length; i++) {
      images[i].style.display = "none";  
    }
    index++;
    if (index > images.length) {index = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    images[index-1].style.display = "block";  
    dots[index-1].className += " active";
    setTimeout(showimages, 1000); // Change image every (1) second
  }