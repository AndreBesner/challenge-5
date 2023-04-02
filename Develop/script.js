// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.




  // function to print current day and time to screen
  // setInterval in order to update 
  let thisTime = dayjs().format('MMMM DD, YYYY')
  setInterval(()=>{
    console.log(thisTime);
    $("#currentDay").text("Today, it is: " + thisTime);
  }, 1000)


  //establishes hour variable to check with logic
  //for time blocks
  //will assign background color with class based on before during or after
  let thisHour = dayjs().format('HH')
  console.log(thisHour);
  $(".time-block").each(function(){
    let timeBlockTime = $(this).attr("data-time");
    console.log(timeBlockTime);
    if($(this).attr("data-time") < thisHour){
      $(this).addClass("past");
    }
    else if($(this).attr("data-time") == thisHour){
      $(this).addClass("present");
    }
    if($(this).attr("data-time") > thisHour){
      $(this).addClass("future");
    }
  })



  //saves box to local storage
  //prints local storage to box
  //i want to loop through each element and save the hour and corresposing text
  //i supposed thats two keys to be saved to be retreived late
  // $(".time-block").each(function(){
  //   localStorage.setItem("data-time", "textarea");
  // })

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $(".saveBtn").click(function(){
    console.log("you clicked a save button");
    let idHour = $(this).parents().attr("data-time");
    console.log("test" +idHour);
    console.log($(this).parents().attr("data-time")); //this actually goes up tree and finds that data time atrr to helps save to local storage
    var text = $(this).siblings("textarea").val();
    console.log(text);
    localStorage.setItem(idHour, text);
  })

  



});
