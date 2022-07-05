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

