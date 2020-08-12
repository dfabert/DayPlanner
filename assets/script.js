//Upon load, these three functions updates the time, the styles to the current times and pulls the data from the local storage.  
$(document).ready(updateTime());
$(document).ready(updateStyles());
$(document).ready(pullData());

function updateTime() {
    $('#currentDate').text(moment().format('MMMM D, YYYY'));
    $('#currentTime').text(moment().format('h:mm a'));
}

function updateStyles() {
    var currentDate = new Date();

    $('.hour').each(function() {
        var thisHour  = ($(this).data('hour'));
        var diff = currentDate.getHours()- thisHour;

        //We have to remove the class before the update function runs.  
        //Otherwise, an open browswer will just keep adding classes every hour
        $(this).find('textarea').removeAttr('class');  

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
    //set the time for all 24 hours
    //potentially could do a future version where
    //the start hour and the end hour could be set by the user
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

//funtion that updates the time and style every second
function update (){
    updateTime();
    updateStyles();
    }
var interval = setInterval(update,1000);