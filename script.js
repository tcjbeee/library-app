let myLibrary = [];


// Book Constructor
function Book(name, author, pages, haveRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkein", "300", "false");

const darkTower = new Book("The Dark Tower", "Stephen King", "387", "true");

// Adding Book Object to Library Array
Book.prototype.addBookToLibrary = function addBookToLibrary() {
    myLibrary.push(this);
}

theHobbit.addBookToLibrary();
darkTower.addBookToLibrary();

let bookDisplay = document.querySelector(".appHolder");
const button = document.querySelector(".addButton");
const formDiv = document.querySelector(".formDiv");


// Function that is run through each time a new book is added from the end of the array.
function addNewBook(myLibrary) {
    let newAddition = myLibrary[0];
    myLibrary.shift();
    let newChild = document.createElement("div");
    newChild.className = "book";
    bookDisplay.appendChild(newChild);
    nameText = document.createElement("p");
    nameText.className = "textField name";
    titleJoin = document.createElement("p");
    titleJoin.className = "textField join";
    authorText = document.createElement("p");
    authorText.className = "textField author";
    pagesText = document.createElement("p");
    pagesText.className = "textField pages";   
    nameText.textContent = newAddition.name;
    titleJoin.textContent = "by";
    authorText.textContent = newAddition.author;
    pagesText.textContent = "Pages: " + newAddition.pages;


    newChild.appendChild(nameText);
    newChild.appendChild(titleJoin);
    newChild.appendChild(authorText);
    newChild.appendChild(pagesText);


}

while (myLibrary.length != 0){
    console.log(myLibrary.length)
    addNewBook(myLibrary);
};

/*function openForm() {
    formHolder = document.querySelector(".formDiv");
    formHolder.name = "bookForm";
    formHolder.method = "post";
    //formHolder.action = addFormBook() {}
    nameField = document.createElement("input");
    nameField.name = "bookName";
    nameField.value = "Test Book Name";
    formHolder.appendChild(nameField);
    
} */

button.addEventListener("click", () => {
        formHolder = document.querySelector(".formDiv");
        formHolder.name = "bookForm";
        formHolder.method = "post";
        //formHolder.action = addFormBook() {}
        nameField = document.createElement("input");
        nameField.name = "bookName";
        nameField.placeholder = "Sherlock Holmes";
        nameLabel = document.createElement("label");
        nameLabel.for = "nameField";
        nameLabel.textContent = "Book Name:";
        formHolder.appendChild(nameLabel);
        formHolder.appendChild(nameField);
        authorField = document.createElement("input");
        authorField.name = "authorName";
        authorLabel = document.createElement("label");
        authorLabel.for = "authorName";
        authorLabel.textContent = "Author:";
        formHolder.appendChild(authorLabel);
        formHolder.appendChild(authorField);
        pageField = document.createElement("input");
        pageField.name = "pageNumbers";
        pageField.type = "number";
        pageLabel = document.createElement("label");
        pageLabel.for = "pageNumbers";
        pageLabel.textContent = "Number of Pages:";
        formHolder.appendChild(pageLabel);
        formHolder.appendChild(pageField);
        readField = document.createElement("input");
        readField.className = "checkBox";
        readField.name = "haveRead";
        readField.type = "checkBox";
        readLabel = document.createElement("label");
        readLabel.for = "checkBox";
        readLabel.textContent = "Have I read this?";
        formHolder.appendChild(readLabel);
        formHolder.appendChild(readField);

        // Submit
        submitButton = document.createElement("input");
        submitButton.type = "submit";
        submitButton.className = "submitButton";
        submitButton.textContent = "Submit Book";
        formHolder.appendChild(submitButton);
});
