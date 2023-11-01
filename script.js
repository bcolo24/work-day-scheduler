  $(document).ready(function() {

    var currentHour = dayjs().format('H');

    $(function headerDate() {
      var currentDate = dayjs().format('dddd, MMMM D, YYYY');
      $("#currentDay").text(currentDate);
    });
    
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").replace("hour-", ""));

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour == currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    
      var timeBlockId = $(this).attr('id');
      var savedInput = localStorage.getItem(timeBlockId);
      $(this).find('.description').val(savedInput);

      if (savedInput === null) {
        savedInput = "";
        localStorage.setItem(timeBlockId, savedInput);
      }   
    });

    $('.saveBtn').on('click', function() {
      var timeBlockId = $(this).closest('.time-block').attr('id');
      var userInput = $(this).siblings('.description').val();
      localStorage.setItem(timeBlockId, userInput);
    });
  });