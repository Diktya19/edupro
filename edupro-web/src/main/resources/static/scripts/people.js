$(document).ready(function (){
    if (isDarkStyle) {
        borderColor = config.colors_dark.borderColor;
        bodyBg = config.colors_dark.bodyBg;
        headingColor = config.colors_dark.headingColor;
    } else {
        borderColor = config.colors.borderColor;
        bodyBg = config.colors.bodyBg;
        headingColor = config.colors.headingColor;
    }


    $("#btn-people-teacher").click(function (event){
        event.preventDefault();

        var url = $(this).attr('href');
        showModal(url, ' ');
    });

    // btn add click student
    $("#btn-people-student").click(function (event) {
        event.preventDefault();

        var url = $(this).attr('href');
        showModal(url, ' ');
    });
});