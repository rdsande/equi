/* Footer Year*/
document.getElementById("copyr-year").innerHTML = new Date().getFullYear();

/* TEMPORARY! - Cache images */
function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

preloadImages(["/img/audience.jpg"]);

// Change header color on scroll
$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
     if (startchange.length){
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
           $(".navbar-default").css('background-color', '#f0f0f0');
        } else {
           $('.navbar-default').css('background-color', 'transparent');
        }
    });
     }
 });
