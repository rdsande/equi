/*EVENTI IN EVIDENZA */
$('.owl-one').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    thumbs:true,
    thumbImage:true,
    navClass:["owl-prev-two","owl-next-two"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
      }
    })
    

/*CATEGORIE */
    $('.owl-two').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots:false,
        thumbs:false,
        thumbImage:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

/*TESTIMONIANZE */

    $('.owl-testimonianze').owlCarousel({
        loop:false,
        nav:true,
        dots:false,
        autoHeight:false,
        thumbs:false,
        thumbImage:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    /*PARLANO */
    $('.owl-parlano').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        thumbs:false,
        thumbImage:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
