$(document).ready(function(){
    // Smooth scroll to the Bestselling Collection section
    $('#best-selling-btn').click(function(event){
        event.preventDefault(); // Prevent the default anchor click behavior
        $('html, body').animate({
            scrollTop: $('#product1').offset().top
        }, 1000); // Adjust the 1000 to the desired scroll speed in milliseconds

$('.filter-option').on('click', function() {
        var selectedFilter = $(this).data('filter');
        
        // Show/hide products based on selected filter
        $('.pro').each(function() {
            var productCategory = $(this).data('category');
            
            // If the product category matches the selected filter, show it, else hide it
            if (selectedFilter === 'All' || productCategory === selectedFilter) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});
});
