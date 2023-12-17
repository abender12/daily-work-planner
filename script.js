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
    


    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    const currentHour = dayjs().hour()
      // const testHour = dayjs().hour(9).hour()
      console.log(currentHour)
      if (currentHour < 9 || currentHour > 17) return;
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

    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
  


    // TODO: Add code to display the current date in the header of the page.
    const currentDay = dayjs();
      $('#currentDay').text(currentDay.format('dddd, MMMM/DD/YYYY'));
  });
