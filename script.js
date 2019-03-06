var selectedRow=null

function onFormsubmit(){
    if(validate()){
    var formData=readFormData();
    if(selectedRow==null)
       insertNewRecord(formData);
    else
       updateRecord(formData);
    resetForm();
  }
}

function readFormData() {
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["Phone"] = document.getElementById("Phone").value;
    return formData;
}

function insertNewRecord(data){
    var table=document.getElementById("subscriberlist").getElementsByTagName('tbody')[0];
    var newRow =table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML=data.Name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML=data.Phone;
    cell2=newRow.insertCell(2);
    cell2.innerHTML= `<a onclick="onEdit(this)">Edit</a>
                       <a  onclick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("Name").value = "";
    document.getElementById("Phone").value= "";
    selectedRow = null;

}

function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("Name").value =selectedRow.cells[0].innerHTML;
    document.getElementById("Phone").value =selectedRow.cells[1].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.Name;
    selectedRow.cells[1].innerHTML=formData.Phone;
}

function onDelete(td) {
    if(confirm('Are u sure to delete this record ?')) {
    row = td.parentElement.parentElement;
    document.getElementById("subsciberlist").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
    isValid=true;
    if (document.getElementById("Name").value=="") {
       isValid=false;
       document.getElementById("NameValidationError").classList.remove("hide");
    } else {
        isValid=true;
         if(!document.getElementById("NameValidationError").classList.contains("hide"))
            document.getElementById("NameValidationError").classList.add("hide");
    }
       return isValid;
    }



