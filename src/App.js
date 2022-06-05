import { array } from './data';
import './App.css';
import { useState } from 'react';



function App() {

  const [db, setDb] = useState(array)


  return (
    <div className="App">
      {db.map((elm) => {
        return (
          <div key={elm.id}>
            <h2>Name: {elm.name}</h2>
            {elm.books.map((book) => {
              return (
                <div key={book.id}>
                  <span>Book id: {book.id}</span>
                  <span> | </span>
                  <span>Book title: {book.title}</span>
                  <span> | </span>
                  <span>Book author: {book.author}</span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
