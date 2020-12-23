import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import Base from '../../../shared/Base'
import { getBooks } from '../helper'
import Card from '../../../shared/Card'

function Dashboard() {

    const [books, setBooks] = useState([])

    useEffect(() => {
       getBooks() 
       .then(res => {
           setBooks(res)
           console.log(res);
           console.log(books);
        })
       .catch(err => console.log(err))
       console.log("BookS",books);
    }, [books])

   

    return (
        <Base>
        <div style={{display:"flex", flexWrap:"wrap", backgroundColor:"#fff", borderRadius:"20px", marginTop:"30px"}}>
            {books && books.map((book,i) => {
                return(
                    <Card style={{flex:"0.5"}} key={i}
                        _id={book._id}
                        name={book.name}
                        author={book.author}
                        publisher={book.publisher}
                        imageUrl={book.imageUrl}
                        category={book.category}
                    />   
                )
            })}
           
    </div>
           
        </Base>
    )
}

export default Dashboard;
