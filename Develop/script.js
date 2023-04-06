
$(function () {
displayDescriptions();
let thisTime = dayjs().format('MMMM DD, YYYY')
  setInterval(()=>{
    $("#currentDay").text("Today, it is: " + thisTime);
    let thisHour = dayjs().format('HH')
    $(".time-block").each(function(){
    let timeBlockTime = $(this).attr("data-time");
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
  }, 1000)
  $(".saveBtn").click(function(){
    let idHour = $(this).parents().attr("data-time");
    let text = $(this).siblings("textarea").val();
    localStorage.setItem(idHour, text);
  })
  function displayDescriptions(){
    for(var i = 9 ; i <= 17 ; i++){
        var desc = localStorage.getItem(i.toString().padStart(2, '0'));
        $(".time-block[data-time='" + i.toString().padStart(2, '0') + "'] .description").val(desc);
    }
  }
});
