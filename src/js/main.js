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
var $targetLocation = ".popular-grub__location-item";
var $targetLocationInput = "[id^='popularGrabLocation']";
var $locationOutput = $(".popular-grub__location-input");
initializeDropdown(".popular-grub__location-select", $targetLocation, $targetLocationInput, $locationOutput);
var locationCheck = '#popularGrubLocation';
var locationLabel = '#popularGrubLocation+label';
closeAside(locationCheck, locationLabel);
/*var listenCheckClick = document.querySelector("#popularGrubLocation");
var getChevron = document.querySelector(".popular-grub__location-btn>i");
$(listenCheckClick).prop("checked", false);
if ($(listenCheckClick).prop('checked')) {
    $(getChevron).removeClass('fa-angle-down');
    $(getChevron).addClass('fa-angle-up');
    console.log("hello");
} else {
    $(getChevron).removeClass('fa-angle-up');
    $(getChevron).addClass('fa-angle-down');
}*/
