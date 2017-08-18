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
    $('.events__places-list').bxSlider({
        minSlides: 1,
        maxSlides: 6,
        moveSlides: 1,
        slideWidth: 170,
        slideMargin: 30,
        prevText: "",
        nextText: "",
        prevSelector: ".events__prev-btn",
        nextSelector: ".events__next-btn",
        //auto: true,
        //pause: 5000,
        pager: false
    });
    $('.offers__places-list').bxSlider({
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        slideWidth: 270,
        slideMargin: 30,
        prevText: "",
        nextText: "",
        prevSelector: ".offers__prev-btn",
        nextSelector: ".offers__next-btn",
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
/*First dropbox section3*/
var $targetEvent = ".events__places-item";
var $targetEventInput = "[id^='eventsPlace']";
var $eventOutput = $(".events__places-input");
initializeDropdown(".events__places-select", $targetEvent, $targetEventInput, $eventOutput);
var eventCheck = '#eventsPlace';
var eventLabel = '#eventsPlace+label';
closeAside(eventCheck, eventLabel);
/*Second dropbox section3*/
var $timeEvent = ".events__time-item";
var $timeEventInput = "[id^='eventsTime']";
var $timeOutput = $(".events__time-input");
initializeDropdown(".events__time-select", $timeEvent, $timeEventInput, $timeOutput);
var timeCheck = '#eventsTime';
var timeLabel = '#eventsTime+label';
closeAside(timeCheck, timeLabel);
/*First dropbox section4*/
var $targetOffers = ".offers__places-item";
var $targetOffersInput = "[id^='offersPlace']";
var $offersOutput = $(".offers__places-input");
initializeDropdown(".offers__places-select", $targetOffers, $targetOffersInput, $offersOutput);
var offersCheck = '#offersPlace';
var offersLabel = '#offersPlace+label';
closeAside(offersCheck, offersLabel);
/*Second dropbox section4*/
var $targetOffer = ".offer__place-item";
var $targetOfferInput = "[id^='offerPlace']";
var $offerOutput = $(".offer__place-input");
initializeDropdown(".offer__place-select", $targetOffer, $targetOfferInput, $offerOutput);
var offerCheck = '#offerPlace';
var offerLabel = '#offerPlace+label';
closeAside(offerCheck, offerLabel);
/*Dropbox section5*/
var $targetReview = ".reviews__places-item";
var $targetReviewInput = "[id^='reviewsPlace']";
var $reviewOutput = $(".reviews__places-input");
initializeDropdown(".reviews__places-select", $targetReview, $targetReviewInput, $reviewOutput);
var reviewCheck = '#reviewsPlace';
var reviewLabel = '#reviewsPlace+label';
closeAside(reviewCheck, reviewLabel);