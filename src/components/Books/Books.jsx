import { useEffect, useState } from "react"
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch(`../books.json`)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);
    return (
        <section>
            <h1 className="font-worksans text-3xl font-bold font-playfair text-center mb-3">Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-5">
                {
                    books.map((book) => <Book key={book.id} book={book} />)
                }
            </div>
        </section>
    )
}

export default Books