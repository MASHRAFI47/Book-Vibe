import { useLoaderData, useParams } from "react-router-dom"

const BookDetails = () => {
    const allBooks = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const singleBook = allBooks.find(book => book.id == idInt);
    const { image, bookName, author, category, review } = singleBook
    return (
        <div>
            <div className="flex flex-col md:flex-row">
                <div className="flex-1">
                    <img src={image} className="min-h-screen" alt={bookName} />
                </div>
                <div className="flex-1">
                    <h1>{bookName}</h1>
                    <p>By: {author}</p>
                    <div className='border-dashed border-y-2 border-[#13131326]'>
                        <p>{category}</p>
                    </div>
                    <p>{review}</p>
                </div>
            </div>

        </div>
    )
}

export default BookDetails