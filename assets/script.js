$(document).ready(function () {
    $('#currentDate').text(moment().format('MMMM DD YYYY'));
    $('#currentTime').text(moment().format('h:mm a'));
})


function updateStyles() {
    var currentDate = new Date();
    console.log(currentDate);

    $('.hour').each(function() {
        var thisHour  = ($(this).data('hour'));
        var diff = currentDate.getHours()- thisHour;

        if(diff < 0) {
            $(this).find('textarea').addClass('future');
        }else if(diff === 0) {
            $(this).find('textarea').addClass('current');
        }else{
            $(this).find('textarea').addClass('past');
        }
    })
}

function pullData() {
    console.log('Pulling data from local storage');

}

$('.save-button').on('click', function(){
    var textValue = $(this).siblings('textarea').val();
    var parentHour = $(this).closest('hour').data('hour');

    localStorage.setItem(parentHour,textValue);
})


updateStyles();
pullData();