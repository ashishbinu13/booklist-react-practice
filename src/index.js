import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./Books";
import { Book } from "./Book";

const BookList = () => {
  return (
    <>
      <h1>Best Sellers in Books</h1>
      <section className="book-list">
        {books.map((book, index) => {
          return <Book key={book.id} {...book} index={index} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
