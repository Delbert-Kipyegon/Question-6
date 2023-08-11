/**
 * Question 6-3:
 * Complete the following code to make a Javascript based digital clock.
 * 
 * The code is below
 */

function myDigitalClock(){

    // I have made a minor correction to the code below changing var d1 to date
    // because d1 is not used anywhere in the code
    // initial code: 
    // var d1 = new Date();
    var date = new Date();
    var hours = date.getHours(); // 0 - 23
    var minutes = date.getMinutes(); // 0 - 59
    var seconds = date.getSeconds(); // 0 - 59
    var zone = "AM";
    //Write the code here

    // 1. convert hours to 12-hour format if it is greater than 12 to be covered by the 'PM' zone switch
    
    if(hours > 12){
        hours = hours - 12;
        zone = "PM";
    }

    // 2. Handling the case that hours is 0 meaning it is 12 AM/PM
    if(hours == 0){
        hours = 12;
    }
    
    //3. Add a 0 in front of the hours, minutes, and seconds if they are less than 10
    if(hours < 10){
        hours = "0" + hours;
    }

    //4. Add a 0 in front of the hours, minutes, and seconds if they are less than 10
    if(minutes < 10){
        minutes = "0" + minutes;
    }

    //5. Add a 0 in front of the hours, minutes, and seconds if they are less than 10
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    //Display the current date and time in the following format
    // eg. 01:00:00 PM
    console.log(hours + ":" + minutes + ":" + seconds + " " + zone);


    //Call the function every second
    setTimeout(myDigitalClock, 1000);
    
}


//Call the function
myDigitalClock();