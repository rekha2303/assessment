console.log("connected")

// let p = document.getElementById("para");
// let template = document.getElementById("input");
// let button = document.getElementById("btn");
// button.addEventListener("click", function(e) {
//     console.log("click the button");
//     p.innerHTML = e.target.value;
// ;
// })

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    console.log(filter);
    table = document.getElementById("tbl-container");
    tr = table.getElementsByTagName("tr");
    console.log(tr);
    for (i = 0; i < tr.length; i++) {
    var abc = 0;
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) == 0) {
          abc = 1;
        } else {
         // tr[i].style.display = "none";
        }
      } 
      td1 = tr[i].getElementsByTagName("td")[1];
      if (td1) {
        txtValue = td1.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) == 0) {
          abc = 1;
        } else {
          //tr[i].style.display = "none";
        }
      }
      if (abc == 1) {
          tr[i].style.display = "";
        }
        else
        {
        tr[i].style.display = "none";
        }
    }
  }