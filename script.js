// Define a dummy JSON object with document data
var documentData = [{
   title: "giao thoa ánh sáng",
   link: "/docs/de-thi-giua-hk1-mon-ly-lop-11-2.pdf"
}, {
   title: "ánh sáng đơn sắc",
   link: "document2.pdf"
}, {
   title: "Dao động điều hoà",
   link: "document3.pdf"
}, {
   title: "Dao động điện từ",
   link: "document4.pdf"
}, {
   title: "Mạch dao động LC",
   link: "document5.pdf"
}];
 
// Function to create document list items based on the JSON data
function createDocumentList() {
   var ul = document.getElementById("document-list");
   for (var i = 0; i < documentData.length; i++) {
       var li = document.createElement("li");
       var a = document.createElement("a");
       a.href = documentData[i].link;
       a.textContent = documentData[i].title;
       li.appendChild(a);
       ul.appendChild(li);
   }
}
 
// Call the createDocumentList function on page load
window.onload = createDocumentList;
 
function searchFunction() {
   // Declare variables
   var input, filter, ul, li, a, i, txtValue;
   input = document.getElementById('search');
   filter = input.value.toUpperCase();
   ul = document.getElementById('document-list');
   li = ul.getElementsByTagName('li');
 
   // Loop through all list items, and hide those who don't match the search query
   for (i = 0; i < li.length; i++) {
       a = li[i].getElementsByTagName('a')[0];
       txtValue = a.textContent || a.innerText;
       if (txtValue.toUpperCase().indexOf(filter) > -1) {
           li[i].style.display = '';
       } else {
           li[i].style.display = 'none';
       }
   }
}
