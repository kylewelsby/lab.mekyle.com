$(document).ready(function() {
    $("table td span").append("9<br/>");
    for(i=0; i<10;i++){
        $("table td span").append(i + "<br/>");
    }
    $("table td span").append("0");
    
    function updateTime(){
        var currentDateTime = new Date(),
        countdownDateTime = new Date("August 7, 2011 12:00:00"),
        timeRemaining = Math.ceil(countdownDateTime.getTime() - currentDateTime.getTime()),
        totalDaysRemaining = timeRemaining / (1000*60*60*24),
        daysRemaining = Math.floor(totalDaysRemaining),
        totalHoursRemaining = timeRemaining / (1000*60*60),
        hoursRemaining = Math.floor(totalHoursRemaining - (24*Math.floor(totalDaysRemaining))),
        totalMinutesRemaining = timeRemaining / (1000*60),
        minuetsRemaining = Math.floor(totalMinutesRemaining - (60*Math.floor(totalHoursRemaining))),
        totalSecondsRemaining = timeRemaining / (1000),
        secondsRemaining = Math.floor(totalSecondsRemaining - (60*Math.floor(totalMinutesRemaining)));
        
        if(String(daysRemaining).length === 3){
            $(".days span.version").css({
                top:-String(daysRemaining)[String(daysRemaining).length+3-6] + "em"
            });
        }
        if(String(daysRemaining).length >= 2){
            $(".days span.major").css({
                top:-String(daysRemaining)[String(daysRemaining).length+3-5] + "em"
            });
        }
        
        $(".days span.minor").css({
            top:-String(daysRemaining)[String(daysRemaining).length+3-4] + "em"
        });
        if(String(hoursRemaining).length == 2){
            $(".hours span.major").css({
                top:-String(hoursRemaining)[String(hoursRemaining).length+2-4] + "em"
            });
        }
        $(".hours span.minor").css({
            top:-String(hoursRemaining)[String(hoursRemaining).length+2-3] + "em"
        });
        if(String(minuetsRemaining).length === 2){
            $(".mins span.major").css({
                top:-String(minuetsRemaining)[0] + "em"
            });
        }
        $(".mins span.minor").css({
            top:-String(minuetsRemaining)[String(minuetsRemaining).length+2-3] + "em"
        });
        if(String(secondsRemaining).length === 2){
            $(".secs span.major").css({
                top:-String(secondsRemaining)[0] + "em"
            });
        }
        $(".secs span.minor").css({
            top:-String(secondsRemaining)[String(secondsRemaining).length+2-3] + "em"
        });
    }
    
    setInterval(function(){
        updateTime();
    },1000);
});
