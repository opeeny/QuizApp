import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';


const authors = [
    {
      name: "Robert Kiyosaki",
      imageUrl:
        "https://assets.entrepreneur.com/content/1x1/300/20160310203057-robert-standard.jpeg?width=200&crop=1:1",
      imageSource: "Google",
      books: ["Rich Dad", "Fake", "Cash flow game"]
    },
    {
      name: "Opeeny Godfrey",
      imageUrl: "https://opeeny.github.io/images/opeeny.jpg?width=200&crop=1:1",
      imageSource: "opeeny.github.io",
      books: ["FIQ", "Back in the day", "Fail forward"]
    },
    {
      name: "Jin frey",
      imageUrl: "https://invictafc.com/wp-content/uploads/2015/07/Jinh_Yu_Frey_Bio.jpg?width=200&crop=1:1",
      imageSource: "opeeny.github.io",
      books: ["BZQ", "Body build", "xenophobic"]
    },
    {
      name: "Charles Dickens",
      imageUrl:
        "https://cdn.britannica.com/17/82717-050-5D9C010D/Charles-Dickens.jpg?width=200&crop=1:1",
      imageSource: "opeeny.github.io",
      books: ["Hamlet", "Macbeth", "Romeo & Juliet"]
    }
  ];

  const state = {
    turnData: getTurnData(authors)
  };
  function getTurnData(authors) {
    const allBooks = authors.reduce((p, c, i) => {
      return p.concat(c.books);
    }, []);
    const fourRandomBooks = shuffle(allBooks).slice(0, 4);
    const answer = sample(fourRandomBooks);
    return {
      books: fourRandomBooks,
      author: authors.find(author => author.books.some(title => title === answer))
    };
  }
  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <React.StrictMode>
      <AuthorQuiz {...state} />
    </React.StrictMode>,
    rootElement
  );
  
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
