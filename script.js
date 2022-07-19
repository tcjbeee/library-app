let myLibrary = [];
let newLibrary = [];
let indexNumber = 0;


// Book Constructor
function Book(name, author, pages, haveRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

// Adding Book Object to Library Array
Book.prototype.addBookToLibrary = function addBookToLibrary() {
    myLibrary.push(this);
}

let bookDisplay = document.querySelector(".appHolder");
const button = document.querySelector(".addButton");
const formDiv = document.querySelector(".formDiv");
const formHolder = document.querySelector(".formDiv");


// Function that is run through each time a new book is added from the end of the array.
function addNewBook(myLibrary) {
    let newAddition = myLibrary[0];
    newLibrary.push(newAddition);
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
    readButton = document.createElement("button");
    readButton.className = "readButton";

    // Delete Button SVG

    deleteButton = document.createElement("img");
    deleteButton.src = "icons/delete.svg";
    deleteButton.dataset.buttonIndex = indexNumber;
    deleteButton.id = "delete";


    readButton.dataset.buttonIndex = indexNumber;
    newChild.dataset.index = indexNumber;
    indexNumber++;

    // Initial Read Status Setup

    if (newAddition.haveRead === true) {
        readButton.textContent = "I Have Read This";
        readButton.style.backgroundColor = "#8bde83";
    }
    else {
        readButton.textContent = "I Have Not Read This";
        readButton.style.backgroundColor = "#c2c2c2";
    }

    // Append All New Elements

    newChild.appendChild(deleteButton);
    newChild.appendChild(nameText);
    newChild.appendChild(titleJoin);
    newChild.appendChild(authorText);
    newChild.appendChild(pagesText);
    newChild.appendChild(readButton);





    // Setting up Read Button Event

    readButton.addEventListener("click", () => {
        let buttonNumber = event.target.getAttribute(["data-button-index"]);
        newLibrary[buttonNumber].haveRead = (!newLibrary[buttonNumber].haveRead);
        if (newLibrary[buttonNumber].haveRead === true) {
            event.target.textContent = "I Have Read This";
            event.target.style.backgroundColor = "#8bde83";
        }
        else {
            event.target.textContent = "I Have Not Read This";
            event.target.style.backgroundColor = "#c2c2c2";
        }
        
    });

    // Setting Up Delete Button Event

    deleteButton.addEventListener("click", () => {
        let buttonNumber = event.target.getAttribute(["data-button-index"]);
        newLibrary.splice(buttonNumber);
        entryToDelete = document.querySelector(`[data-index="${buttonNumber}`);
        console.log(entryToDelete);
        entryToDelete.remove();
        console.log(entryToDelete);


        

    });

}

while (myLibrary.length != 0){
    addNewBook(myLibrary);
};

button.addEventListener("click", () => {

    if (document.querySelector(".checkBox") != null) {
        return null;
    }
        else {
        formHolder.name = "bookForm";
        formHolder.method = "post";
        nameField = document.createElement("input");
        nameField.name = "bookName";
        nameField.className = "nameField";
        nameField.placeholder = "Sherlock Holmes";
        nameLabel = document.createElement("label");
        nameLabel.for = "nameField";
        nameLabel.textContent = "Book Name:";
        formHolder.appendChild(nameLabel);
        formHolder.appendChild(nameField);
        authorField = document.createElement("input");
        authorField.name = "authorName";
        authorField.className = "authorField";
        authorLabel = document.createElement("label");
        authorLabel.for = "authorName";
        authorLabel.textContent = "Author:";
        formHolder.appendChild(authorLabel);
        formHolder.appendChild(authorField);
        pageField = document.createElement("input");
        pageField.name = "pageNumbers";
        pageField.className = "pageField";
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

        submitButton.addEventListener("click", () => {
                let newName = document.querySelector(".nameField").value;
                let newAuthor = document.querySelector(".authorField").value;
                let newPages = document.querySelector(".pageField").value;
                let newHaveRead = document.querySelector(".checkBox").checked;
                let newBook = new Book (newName, newAuthor, newPages, newHaveRead);
                newBook.addBookToLibrary();
                addNewBook(myLibrary);
                while (formHolder.firstChild) {
                    formHolder.removeChild(formHolder.firstChild);
                }
            
        });

        // Cancel

        cancelButton = document.createElement("button");
        cancelButton.className = "cancelButton";
        cancelButton.textContent = "Cancel";
        formHolder.appendChild(cancelButton);


        cancelButton.addEventListener("click", () => {
            while (formHolder.firstChild) {
                formHolder.removeChild(formHolder.firstChild);
            }
        });

    }
});
