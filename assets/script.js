//Upon load, this function updates the time
$(document).ready(function () {
    $('#currentDate').text(moment().format('MMMM DD YYYY'));
    $('#currentTime').text(moment().format('h:mm a'));
})

//Upon load, this function updates the styles to the current times
$(document).ready(updateStyles());

//Upon load, this fuction will pull the data from the local storage
$(document).ready(pullData());


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
    for(var i = 0; i< 24; i++){
      var taskText = localStorage.getItem(i);
        if(taskText != null){
            //place text in correct hour
            $("div[data-hour='" + i + "']").children('textarea').val(taskText);
        }
    }
}        


//Listener to save the information when it is entered
$('button').on('click', function(){
    var textValue = $(this).siblings('textarea').val();
    var hour = $(this).closest('div').data('hour');
    localStorage.setItem(hour,textValue);
})


