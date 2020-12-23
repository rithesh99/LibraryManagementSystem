const API="http://localhost:8000/api"

export const createBook = (token,userId,book) => {
    return fetch(`${API}/book/create/${userId}`,{
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(book)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err)); 
};

export const getBook = (bookId) => {
    return fetch(`${API}/book/${bookId}`,{
        method: "GET",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};
export const getBooks = () => {
    return fetch(`${API}/books`,{
        method: "GET",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};


export const updateBook = (token,bookId,userId,book) => {
    return fetch(`${API}/book/${bookId}/${userId}`,{
        method: "PUT",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(book)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err)); 
};

export const updateBookLend = (token,bookId,userId,book) => {
    return fetch(`${API}/book/${bookId}/${userId}`,{
        method: "PUT",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(book)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err)); 
};


export const deleteBook = (token,bookId,userId) => {
    return fetch(`${API}/book/${bookId}/${userId}`,{
        method: "DELETE",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        // body: JSON.stringify(book)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err)); 
};




