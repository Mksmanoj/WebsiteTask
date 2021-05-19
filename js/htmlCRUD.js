document.querySelector(".btn_add").addEventListener("click", onFormSubmit);
document.querySelector(".btn_reset").addEventListener("click", reset_Form);
document.querySelector(".btn_update").addEventListener("click", onFormUpdate);
function onFormSubmit() {
  var formData = readData();
  insertNewRecord(formData);
  document.querySelector(".btn_update").disabled = false;
}
function onFormUpdate() {
  var readdata = readData();
  updateRowEvent(readdata);
  document.querySelector(".btn_add").disabled = false;
}
function readData() {
  var formData = {};
  formData["get_name"] = document.getElementById("name").value;
  formData["get_gender"] = document.querySelector(
    "input[name = gender]:checked"
  ).value;
  formData["get_age"] = document.getElementById("age").value;
  formData["get_Team"] = document.getElementById("Team").value;
  return formData;
}
function insertNewRecord(data) {
  var table, newRow, cell1, cell2, cell3, cell4, cell5;
  table = document.querySelector(".row1");
  newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell2 = newRow.insertCell(1);
  cell3 = newRow.insertCell(2);
  cell4 = newRow.insertCell(3);
  cell5 = newRow.insertCell(4);

  cell1.innerHTML = data.get_name;
  cell2.innerHTML = data.get_gender;
  cell3.innerHTML = data.get_age;
  cell4.innerHTML = data.get_city;
  cell5.innerHTML = `<a href="#Foo" onclick="updateRow(this)">Update</a>
                       <a href="#Foo" onclick="deleteRow(this)">/Delete</a>`;
}

var selectedRow = null;
function updateRow(td) {
  document.querySelector(".btn_add").disabled = true;
  selectedRow = td.parentElement.parentElement;
  document.getElementById("name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("age").value = selectedRow.cells[2].innerHTML;
  document.getElementById("Team").value = selectedRow.cells[3].innerHTML;
  document.querySelector("input[name = gender].checked").value =
    selectedRow.cells[1].innerHTML;
}

function updateRowEvent(readRowdata) {
  selectedRow.cells[0].innerHTML = readRowdata.get_name;
  selectedRow.cells[1].innerHTML = readRowdata.get_gender;
  selectedRow.cells[2].innerHTML = readRowdata.get_age;
  selectedRow.cells[3].innerHTML = readRowdata.get_Team;
}

function reset_Form() {
  document.getElementById("name").value = "";
  document.getElementById("male").checked = false;
  document.getElementById("female").checked = false;
  document.getElementById("age").value = "";
  document.getElementById("Team").value = "";
  document.querySelector(".btn_add").disabled = false;
  selectedRow = null;
}

function deleteRow(td) {
  if (confirm("Are you sure you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.querySelector(".row1").deleteRow(row.rowIndex);
  }
}

window.addEventListener("load", function () {
  document.querySelector(".btn_update").disabled = true;
});

function btn_add() {
  alert("added !");
}
