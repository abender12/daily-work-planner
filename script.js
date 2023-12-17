// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
    // Store user input into localStorage
    $('.saveBtn').on('click', function() {

      var text = $(this).siblings('.description').val()
      var time = $(this).parent().attr('id')

      console.log('text:', text)
      console.log('time:', time)

      localStorage.setItem(time, text)
    });


    // Get the current hour.
    const currentHour = dayjs().hour()
      const testHour = dayjs().hour(20).hour()
      console.log(currentHour)

      // Try to make it so if it is before 9am, everything is green. If it is after 5pm, everything is grey.
      if (currentHour < 9) {
        document.querySelectorAll('.time-block').classList.add('future');
      } else if (currentHour > 17) {
        document.querySelectorAll('.time-block').classList.add('past');
      };

      // Every time the hour changes, the previous hours need to be marked as past and turn grey, the current hour needs to be red, and the future hours need to remain green.
      switch (currentHour) {
        case 9:
          document.getElementById('hour-9').classList.add('present')
          document.getElementById('hour-10').classList.add('future')
          document.getElementById('hour-11').classList.add('future')
          document.getElementById('hour-12').classList.add('future')
          document.getElementById('hour-1').classList.add('future')
          document.getElementById('hour-2').classList.add('future')
          document.getElementById('hour-3').classList.add('future')
          document.getElementById('hour-4').classList.add('future')
          document.getElementById('hour-5').classList.add('future')
          break
        
        case 10:
          document.getElementById('hour-9').classList.add('past')
          document.getElementById('hour-10').classList.add('present')
          document.getElementById('hour-11').classList.add('future')
          document.getElementById('hour-12').classList.add('future')
          document.getElementById('hour-1').classList.add('future')
          document.getElementById('hour-2').classList.add('future')
          document.getElementById('hour-3').classList.add('future')
          document.getElementById('hour-4').classList.add('future')
          document.getElementById('hour-5').classList.add('future')
          break

        case 11:
          document.getElementById('hour-9').classList.add('past')
          document.getElementById('hour-10').classList.add('past')
          document.getElementById('hour-11').classList.add('present')
          document.getElementById('hour-12').classList.add('future')
          document.getElementById('hour-1').classList.add('future')
          document.getElementById('hour-2').classList.add('future')
          document.getElementById('hour-3').classList.add('future')
          document.getElementById('hour-4').classList.add('future')
          document.getElementById('hour-5').classList.add('future')
          break

        case 12:
          document.getElementById('hour-9').classList.add('past')
          document.getElementById('hour-10').classList.add('past')
          document.getElementById('hour-11').classList.add('past')
          document.getElementById('hour-12').classList.add('present')
          document.getElementById('hour-1').classList.add('future')
          document.getElementById('hour-2').classList.add('future')
          document.getElementById('hour-3').classList.add('future')
          document.getElementById('hour-4').classList.add('future')
          document.getElementById('hour-5').classList.add('future')
          break

        case 13:
          document.getElementById('hour-9').classList.add('past')
          document.getElementById('hour-10').classList.add('past')
          document.getElementById('hour-11').classList.add('past')
          document.getElementById('hour-12').classList.add('past')
          document.getElementById('hour-1').classList.add('present')
          document.getElementById('hour-2').classList.add('future')
          document.getElementById('hour-3').classList.add('future')
          document.getElementById('hour-4').classList.add('future')
          document.getElementById('hour-5').classList.add('future')
          break

        case 14:
          document.getElementById('hour-9').classList.add('past')
          document.getElementById('hour-10').classList.add('past')
          document.getElementById('hour-11').classList.add('past')
          document.getElementById('hour-12').classList.add('past')
          document.getElementById('hour-1').classList.add('past')
          document.getElementById('hour-2').classList.add('present')
          document.getElementById('hour-3').classList.add('future')
          document.getElementById('hour-4').classList.add('future')
          document.getElementById('hour-5').classList.add('future')
          break

        case 15:
          document.getElementById('hour-9').classList.add('past')
          document.getElementById('hour-10').classList.add('past')
          document.getElementById('hour-11').classList.add('past')
          document.getElementById('hour-12').classList.add('past')
          document.getElementById('hour-1').classList.add('past')
          document.getElementById('hour-2').classList.add('past')
          document.getElementById('hour-3').classList.add('present')
          document.getElementById('hour-4').classList.add('future')
          document.getElementById('hour-5').classList.add('future')
          break

        case 16:
          document.getElementById('hour-9').classList.add('past')
          document.getElementById('hour-10').classList.add('past')
          document.getElementById('hour-11').classList.add('past')
          document.getElementById('hour-12').classList.add('past')
          document.getElementById('hour-1').classList.add('past')
          document.getElementById('hour-2').classList.add('past')
          document.getElementById('hour-3').classList.add('past')
          document.getElementById('hour-4').classList.add('present')
          document.getElementById('hour-5').classList.add('future')
          break

        case 17:
          document.getElementById('hour-9').classList.add('past')
          document.getElementById('hour-10').classList.add('past')
          document.getElementById('hour-11').classList.add('past')
          document.getElementById('hour-12').classList.add('past')
          document.getElementById('hour-1').classList.add('past')
          document.getElementById('hour-2').classList.add('past')
          document.getElementById('hour-3').classList.add('past')
          document.getElementById('hour-4').classList.add('pasat')
          document.getElementById('hour-5').classList.add('present')
          break
      }

    
    // Retrieve information from localStorage
    var hour9 = localStorage.getItem("hour-9");
    $("#hour-9 .description").val(hour9);
  
    var hour10 = localStorage.getItem("hour-10");
    $("#hour-10 .description").val(hour10);
  
    var hour11 = localStorage.getItem("hour-11");
    $("#hour-11 .description").val(hour11);
    
    var hour12 = localStorage.getItem("hour-12");
    $("#hour-12 .description").val(hour12);
    
    var hour13 = localStorage.getItem("hour-1");
    $("#hour-1 .description").val(hour13);
    
    var hour14 = localStorage.getItem("hour-2");
    $("#hour-2 .description").val(hour14);
    
    var hour15 = localStorage.getItem("hour-3");
    $("#hour-3 .description").val(hour15);
    
    var hour16 = localStorage.getItem("hour-4");
    $("#hour-4 .description").val(hour16);
    
    var hour17 = localStorage.getItem("hour-5");
    $("#hour-5 .description").val(hour17);


    // TODO: Add code to display the current date in the header of the page.
    const currentDay = dayjs();
      $('#currentDay').text(currentDay.format('dddd, MMMM/DD/YYYY'));
  });
