
let myYear = document.getElementById('myYear')
let myMonth = document.getElementById('myMonth')


myYear.addEventListener('keydown', checkLetter);
myMonth.addEventListener('keydown', checkLetter);


function checkLetter(event) {
  if (event.keyCode < 65 || event.keyCode > 90) {
 } 
 else {
  event.preventDefault();

 }
}
let submit = document.getElementById('submit')

submit.addEventListener('click', showCalendar)

function showCalendar(year, month) {
  year = myYear.value ;
  month = myMonth.value-1;

  let theDate =document.createElement('div')
    document.body.appendChild(theDate)
    theDate.innerHTML = "Calender for " + myYear.value + "/" + myMonth.value;
  let day = new Date();

  day.setFullYear(year);
  day.setMonth(month-1);

  firstDay = day.getDay()
  console.log(firstDay)

  let daysOfm = new Date(year,month-1, 0).getDate();
  console.log(daysOfm)
  let tbl = document.createElement("table"); // create body of the calendar

  // creating all cells
  let date = 1;
  for (let i = 0; i < 6; i++) {
      // creates a table row
        
      if (i === 0) {
      for (let j=0; j<7; j++) {
        switch(j) {
          case 0:
            day = "SU";
            break;
          case 1:
            day = "MO";
            break;
          case 2:
             day = "TU";
            break;
          case 3:
            day = "WE";
            break;
          case 4:
            day = "TH";
            break;
          case 5:
            day = "FR";
            break;
          case 6:
            day = "SA";
        }  

        head = document.createElement("th");
        headText = document.createTextNode(day);
        head.appendChild(headText);
        tbl.appendChild(head);

      }
        
      }

      
      let row = document.createElement("tr");
    
      //creating individual cells, filing them up with data.
      for (let j = 0; j < 7; j++) {
   
      if (i === 0 && j < firstDay) {
              cell = document.createElement("td");
              cellText = document.createTextNode(".");
              cell.appendChild(cellText);
              row.appendChild(cell);
          }
          else if(date > daysOfm) {
            cell = document.createElement("td");
            cellText = document.createTextNode(".");
            cell.appendChild(cellText);
            row.appendChild(cell);          
          }
          else {
              cell = document.createElement("td");
              cellText = document.createTextNode(date);
              cell.appendChild(cellText);
              row.appendChild(cell);
              date++;

          }
          
      }

      tbl.appendChild(row); // appending each row into calendar body.
  }


  document.body.appendChild(tbl);
  tbl.setAttribute("border", "1");

}
