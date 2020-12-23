import React, {useState, useEffect} from 'react'
import { getBooks, updateBookLend } from '../../components/books/helper'
import Base from '../../shared/Base'
import './Home.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { isAuthenticated } from '../../components/auth';

function Home() {

    const [books, setBooks] = useState([])
    const [lend, setLend] = useState(false)
    const {user, token} = isAuthenticated()

    const onLend = (id) => {
        // event.preventDefault()
        updateBookLend(token,  id, user._id, {lend: {"_id": user._id,"name": user.name}})
        .then(res => console.log(res))
        .then(res => setLend(!lend))
        .catch(err => console.log(err))
    }

    useEffect(() => {
       getBooks()
       .then(res => setBooks(res))
       .catch(err => console.log(err))
    //    console.log(books);
    }, [lend])

    return (
        <Base>
            <div className="search__field">
                <input type="text"/>
            </div>
            <div className="home">
                {books.map((book,i) => {
                    return(
                        <div className="card1">
                            <div className="card__image">
                                <img src={book.imageUrl} alt="" className="card__image__pic"/>
                            </div>
                            <div className="card__details">
                                <p className="card__name">{book.name}</p>
                                <p className="card__author">-{book.author}</p>
                                <span className="card__category">{book.category}</span>
                                <p className="card__publishedBy">Published By: {book.publisher}</p>
                            
                             </div>
                             {book.lend == "none" ? (
                                 <div className="card__lend">
                                    <p className="card__lendBy">Available</p>
                                    <a className="card__lendBy__icon"  ><ShoppingCartIcon onClick={() => onLend(book._id)} /></a>
                                </div>
                             ): (
                                <div className="card__lend">
                                    <p className="card__lendBy">Lended by: {book.lend.name}</p>
                                </div>
                             )}
                            
                        </div>  
                    )
                })}
            </div>
        </Base>
    )
}

export default Home;
