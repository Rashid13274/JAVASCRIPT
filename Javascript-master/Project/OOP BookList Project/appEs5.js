//Book Constructor
function Book(title, author, isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}
// UI Constructor 
function UI(){};

// add book to List
 UI.prototype.addBookToList=function(book){
     const list=document.getElementById('book-list');
    // create tr
    const  row=document.createElement('tr');
    // insert cols
    row.innerHTML=`
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">x</a></td>`
    list.appendChild(row);

 }
 // show alert
 UI.prototype.showAlert=function(message, className){
     // create div 
      const div = document.createElement('div');
      // add class name to div
      div.className=`alert ${className}`;
      //  add  text 
      div.appendChild(document.createTextNode(message));
      // get parent
       const  container =document.querySelector('.container');
       // get form
       const form=document.querySelector('#book-form');
       // insert alert
       container.insertBefore(div,form);
       //set time out
       setTimeout(function(){
           document.querySelector('.alert').remove();
       },3000)

 }

 // clear fields
 UI.prototype.clearField= function(){
     document.getElementById('title').value='';
     document.getElementById('author').value='';
     document.getElementById('isbn').value='';

 }
//Event Listner
document.getElementById('book-form').addEventListener('submit',function(e){
    // Get form values
    const title=document.getElementById('title').value,
          author=document.getElementById('author').value,
          isbn=document.getElementById('isbn').value;
    
    // instantiate book
    const book=new Book(title,author,isbn);
    // console.log(book);

    // instantiate new ui
     const ui=new UI();
    // console.log(book);

    // validate 
    if(title==='' || author==='' || isbn===''){
      ui.showAlert('please fill in the  fields', 'error');
    }else{
        // add book to  list
        ui.addBookToList(book);
        // show sucess
         ui.showAlert(`Book Added`,'success')
         // clear fields
         ui.clearField();
    }

    
    e.preventDefault();
})
     