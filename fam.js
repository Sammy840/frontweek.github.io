let thisMessage = document.getElementById("message"),
    rIndex,
    table = document.getElementById("table");
            
// check the empty input
function checkEmptyInput(){
  let isEmpty = false,
      fname = document.getElementById("fname").value,
      lname = document.getElementById("lname").value,
      age = document.getElementById("age").value;
            
  if(fname === ""){
    thisMessage.innerHTML = "First Name Connot Be Empty!";
      isEmpty = true;
    }
      else if(lname === ""){
        thisMessage.innerHTML = "Last Name Connot Be Empty!";
      isEmpty = true;
    }
      else if(age === ""){
        thisMessage.innerHTML = "Age Connot Be Empty!";
      isEmpty = true;
    }
      return isEmpty;
};       
            
// add Row
function addHtmlTableRow(){
  // get the table by id
  // create a new row and cells
  // get value from input text
  // set the values into row cell's
  if(!checkEmptyInput()){
    let newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        age = document.getElementById("age").value;
            
        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = age;
        // call the function to set the event to the new row
        
  }selectedRowToInput();
};
            
// display selected row data into input text
function selectedRowToInput(){
                
  for(let i = 1; i < table.rows.length; i++){
    table.rows[i].onclick = function(){
      // get the seected row index
      rIndex = this.rowIndex;
      document.getElementById("fname").value = this.cells[0].innerHTML;
      document.getElementById("lname").value = this.cells[1].innerHTML;
      document.getElementById("age").value = this.cells[2].innerHTML;
    };
  }
};
  selectedRowToInput();
            
function editHtmlTbleSelectedRow(){
  let fname = document.getElementById("fname").value,
      lname = document.getElementById("lname").value,
      age = document.getElementById("age").value;
      if(!checkEmptyInput()){
        table.rows[rIndex].cells[0].innerHTML = fname;
        table.rows[rIndex].cells[1].innerHTML = lname;
        table.rows[rIndex].cells[2].innerHTML = age;
      }
};


function removeSelectedRow(){
  table.deleteRow(rIndex);
 // clear input text
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("age").value = "";
};