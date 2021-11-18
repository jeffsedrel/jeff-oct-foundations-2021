function myFunction(imgs) {
    // get the expanded image
      var expandImg = document.getElementById("expandedImg");
    // gett the image text
      var imgText = document.getElementById("imgtext");
    // use same src in the expanded image as the image being clicked on 
      expandImg.src = imgs.src;
    //the value of the alt attribute in the clickable image is the text inside the expanded image
      imgText.innerHTML = imgs.alt;
    // show the container element (hidden with css)
      expandImg.parentElement.style.display = "block";
  }