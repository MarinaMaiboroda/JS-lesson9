// $('.grid').masonry({
//   // options
//   itemSelector: '.grid-item',
//   columnWidth: '.grid-item-size',
//   percentPosition: true,
//   gutter: 5
// });

var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-item-size',
    gutter: 5
  }
})

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  //console.log(filterValue);
  $grid.isotope({ filter: filterValue });
});

$('.first-slide-content').slick({
	//autoplay: true,
	//autoplaySpeed: 1000,
});

$('.carousel').slick({
	slidesToShow: 5,
	slidesToScroll: 4,
	dots: true,
	arrows: false
});