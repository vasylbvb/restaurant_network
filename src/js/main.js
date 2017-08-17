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
    $('.popular-grub__places-list').bxSlider({
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        slideWidth: 270,
        slideMargin: 30,
        prevText: "",
        nextText: "",
        prevSelector: ".places-gallery__prev-btn",
        nextSelector: ".places-gallery__next-btn",
        //auto: true,
        //pause: 5000,
        pager: false
    });
});


//initialize dropdown list
function initializeDropdown(listSelector, targetItemSelector, getTargetInput, $locationOuputEl) {

    var someList = document.querySelector(listSelector);
    someList.addEventListener("click", function (e) {
        var $li = $(e.target).parents(targetItemSelector);
        if (!$li.length) {
            return;
        }
        var name = $(getTargetInput, $li).val();
        $locationOuputEl.text(name);
    });
}
//Close list aside

function closeAside(checkBoxSelector, checkLabelSelector) {
    $(document).click(function (e) {
        var aCheckBox = $(checkBoxSelector);
        aCheckBox.prop("checked", false);
    });
    var aCheckBox = $(checkBoxSelector);
    var aCheckLabel = $(checkLabelSelector);
    $(aCheckBox).click(function (e) {
        e.stopPropagation();
    });
    $(aCheckLabel).click(function (e) {
        e.stopPropagation();
    });
}
/*First dropbox*/
var $targetLocation = ".popular-grub__location-item";
var $targetLocationInput = "[id^='popularGrubLocation']";
var $locationOutput = $(".popular-grub__location-input");
initializeDropdown(".popular-grub__location-select", $targetLocation, $targetLocationInput, $locationOutput);
var locationCheck = '#popularGrubLocation';
var locationLabel = '#popularGrubLocation+label';
closeAside(locationCheck, locationLabel);
/*Second dropbox*/
var $targetPlace = ".popular-grub__places-item";
var $targetPlaceInput = "[id^='popularGrubPlace']";
var $placeOutput = $(".popular-grub__places-input");
initializeDropdown(".popular-grub__places-select", $targetPlace, $targetPlaceInput, $placeOutput);
var placeCheck = '#popularGrubPlace';
var placeLabel = '#popularGrubPlace+label';
closeAside(placeCheck, placeLabel);