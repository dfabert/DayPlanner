function updateTimes() {
    var currentDate = new Date();
    console.log(currentDate);

    $('.hour').each(function() {
         
        var thisHour  = ($(this).data('hour'));

        var diff = currentDate.getHours()- thisHour;
        console.log(diff);

        if(diff < 0) {
            $(this).find('textarea').addClass('future');
        }else if(diff === 0) {
            $(this).find('textarea').addClass('current');
        }else{
            $(this).find('textarea').addClass('past');
        }
    })
}

updateTimes();