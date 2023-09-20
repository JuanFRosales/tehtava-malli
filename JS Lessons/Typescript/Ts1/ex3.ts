export {}; // hack to ignore Book from task 4
// TODO: Define a type alias named 'Book' with appropriate properties
type book = {
    title: string;
    author: string;
    publicationYear: number;
}

// TODO: Implement the promptForBook function
function promptForBook() {
  // TODO: Prompt user for book details (title, author, publication year)
  const bookTitle = prompt('Book title: ');
  const bookAuthor =  prompt('Book author: ');
  const publicationYearInput = prompt('Enter the publication year:');
  const bookPublicationYear = +publicationYearInput;


  // TODO: Create an object of type 'Book' with the entered values
  const book: Book ={
        title: bookTitle,
        author: bookAuthor,
        publicationYear: bookPublicationYear,
  };
  return book;
}

// TODO: Call the promptForBook function to get the book details
const bookDetails = promptForBook();

// TODO: Display the details of the book object to the user
console.log("Book Details:");
console.log(`Title: ${bookDetails.title}`);
console.log(`Author: ${bookDetails.author}`);
console.log(`Publication Year: ${bookDetails.publicationYear}`);
