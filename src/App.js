import React from 'react';
import logo from './logo.svg';
import './App.css';

export default function AuthorQuiz({ turnData }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} />
      <Continue />
      <Footer />
    </div>
  );
}

const Hero = () => {
  return (
    <div className="row">
      <div className="jumbotran col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  );
};
const Book = ({ title }) => {
  return (
    <div className="answer">
      <h1>{title}</h1>
    </div>
  );
};
const Turn = ({ author, books }) => {
  return (
    <div
      className="row turn"
      style={{ backgroundColor: "greenyellow", color: "red" }}
    >
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorImage" alt="Author" />
      </div>
      <div className="col-6">
        {books.map(title => (
          <Book title={title} key={title} />
        ))}
      </div>
    </div>
  );
};

const Continue = () => {
  return <div className="row" />;
};

const Footer = () => {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">
          You guys give a thumb{" "}
          <a href="https://opeeny.github.io" target="blank">
            me
          </a>
        </p>
      </div>
    </div>
  );
};


export default App;
