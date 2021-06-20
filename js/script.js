// Use ready() to make a function available after the document is loaded.
$(document).ready(function(){
    $('#menu').click(function(){
        // To change the icon on clicking menu toggle is used
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });
});

$('#theme-toggler').click(function(){
    $(this).toggleClass('fa-sun');
    $('body').toggleClass('dark-theme');
})
