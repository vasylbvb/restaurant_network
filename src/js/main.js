$(document).ready(function () {
    $('.global-header__slider').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        controls: false,
        //auto: true,
        //pause: 5000,
        pagerCustom: '#global-header__slider-pager-box'
    });
    $("#location-select").select2({
        placeholder: "Choose location",
        allowClear: true
        //theme: "classic"
        //maximumSelectionLength: 2
    });
    $("#cuisine-select").select2({
        placeholder: "Select one or more cuisines",
        allowClear: true
        //theme: "classic"
        //maximumSelectionLength: 2
    });
    $("#locationOfferSelect").select2({
        placeholder: "Choose location",
        allowClear: true,
        //theme: "classic"
        maximumSelectionLength: 1
    });
});