
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
    console.log("you clicked a save button");
    let idHour = $(this).parents().attr("data-time");
    console.log("test" +idHour);
    console.log($(this).parents().attr("data-time"));
    let text = $(this).siblings("textarea").val();
    console.log(text);
    localStorage.setItem(idHour, text);
    console.log(localStorage.getItem("09"));
  })

  function displayDescriptions(){
    for(var i = 9 ; i <= 17 ; i++){
        var desc = localStorage.getItem(i);
        console.log(desc);
        $(".time-block[data-time='" + i + "'] .description").val(desc);
        if (i == 9 && desc != null) {
          $(".time-block[data-time='09'] .description").val(desc);
        }
    }
}
});
