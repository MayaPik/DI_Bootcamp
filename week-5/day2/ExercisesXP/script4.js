//The point of this challenge is to display a list of two books on your browser.

let allBooks = [
    {
        id: 0,
        title : "Bible",
        author : "God",
        image : "<img src='./bible.jpeg'/ style=width:100px>",
        alreadyRead : true
    },

    {
        id: 1,
        title : "Kuran",
        author : "Allah",
        image : "<img src='./kuran.jpeg'/ style=width:100px>",
        alreadyRead : false
    }

]
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).

let table = document.createElement("table");
//create the table
const tblBody = document.createElement("tbody");

  for (let i = 0; i < 4; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 2; j++) {
        //creat the table
      const cell = document.createElement("td");
      cell.style.padding = '10px';
      cell.style.textAlign = 'center';



      row.appendChild(cell);
        //place text
        let cellText = Object.values(allBooks[j])[i +1];
        cell.innerHTML = cellText;

            if (allBooks[j].alreadyRead === true) {
               cell.style.color = 'red';

            }

    }

    tblBody.appendChild(row);

  }

  // put the <tbody> in the <table>

  table.appendChild(tblBody);
  // appends <table> into <body>
  document.getElementsByClassName('listBooks')[0].appendChild(table);
  // sets the border attribute of tbl to '2'
  table.setAttribute("border", "1");

