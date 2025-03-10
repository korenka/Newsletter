$(document).ready(function() {
    const imageFiles = ['1.jpg', '2.jpg'];

    imageFiles.forEach((file) => {
        $('#flipbook').append(`<div class="page"><img src="./images/${file}" alt="${file}"></div>`);
    });

    $("#flipbook").turn({
        width: 1000,
        height: 1200,
        autoCenter: true,
        display: 'single',
        gradients: true,
        acceleration: true,
        elevation: 50,
        duration: 1000,
        when: {
            turning: function(event, page, view) {
                console.log('Turning to page', page);
            },
            turned: function(event, page, view) {
                console.log('Turned to page', page);
            }
        }
    });

    $("#prev").click(function() {
        $("#flipbook").turn("previous");
    });

    $("#next").click(function() {
        $("#flipbook").turn("next");
    });
});