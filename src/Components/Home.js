import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

  const [books, setBooks] = useState([])
  const [books2, setBooks2] = useState([])

  useEffect(
    () => {
      fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
        .then(response => response.json())
        .then(data => 
        setBooks(data.items)
        )
        .catch(error => console.log(error))

       fetch('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes')
        .then(response => response.json())
        .then(data => setBooks2(data.items))
    }, [])
  
  return (
    <div className='home'>
      <div className='book-hero-section'>
       {
         books.map((book, index) => {
          return(
          <div className='book-div' key={index}>
            <img src={book.volumeInfo.imageLinks.smallThumbnail}/>
            <div className='title-div'>
              <h1 id='book-title'>{book.volumeInfo.title}</h1>
              <p id='book-description'>{book.volumeInfo.description}</p>
              <button id='read-btn'>Now Read!</button>
              </div>
          </div>
          )
         })

       }
      </div>
      <h1>More Books</h1>
      <div className='books-container'>
        {
          books.map((book,index) => (
            <img className='book' key={index} src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.imageLinks.smallThumbnail}/>)
          )
        }
        {
          books2.map((book, index) => 
            <img className='book' key={index} src={book.volumeInfo.imageLinks.smallThumbnail}alt={book.volumeInfo.title}/>)
        }
      </div>
    </div>
  )
}

export default Home