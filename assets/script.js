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
       
    for(var i = 0; i< 24; i++){
      var text = localStorage.getItem(i);
        if(text != null){
            //place text in correct hour
            console.log(text);
        }


    }
}        

$('button').on('click', function(){
    console.log('saving to local storage');
    var textValue = $(this).siblings('textarea').val();
    var hour = $(this).closest('div').data('hour');

    localStorage.setItem(hour,textValue);
})


updateStyles();
pullData();