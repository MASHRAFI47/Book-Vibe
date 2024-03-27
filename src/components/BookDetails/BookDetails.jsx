import { useLoaderData, useParams } from "react-router-dom"
import { getFromLocalStorage, getWishFromLocalStorage, saveToLocalStorage, saveWishToLocalStorage } from "../../utils/localStorage";

const BookDetails = () => {

    const wishList = getWishFromLocalStorage();
    const readList = getFromLocalStorage();
    console.log(wishList, readList)

    const handleReadList = () => {

        // }
        saveToLocalStorage(singleBook);

        // const otherWishes = wishList.filter(item => item.id != idInt)
        // console.log(otherWishes)
        // saveWishToLocalStorage(otherWishes)


    }
    const handleWishlist = () => {
        // const getData = getWishFromLocalStorage(); // getfrom
        // if (getData.length > 0) {
        //     const findBook = getData.find(item => item.id == idInt)
        //     const bookName = findBook.bookName;
        //     for (const id of getData) {
        //         if (bookName == id.bookName) {
        //             alert('already added')
        //         }
        //     }
        // }
        saveWishToLocalStorage(singleBook)
    }

    const allBooks = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const singleBook = allBooks.find(book => book.id == idInt);
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing } = singleBook


    //verify
    // if (readList.length > 0) {
    //     const readItem = readList.find(item => item.id == idInt)
    //     const wishItem = wishList.find(item => item.id == idInt)
    //     if (wishItem.bookName == readItem.bookName) {
    //         console.log('milse')
    //     }
    // }

    return (
        <div className="mt-10">
            <div className="flex flex-col md:flex-row">
                <div className="flex-1">
                    <img src={image} className="min-h-screen" alt={bookName} />
                </div>
                <div className="flex-1">
                    <h1 className="font-playfair text-2xl md:text-4xl font-bold">{bookName}</h1>
                    <p className="my-3 font-medium">By: {author}</p>
                    <div className='border-solid border-y-2 border-[#13131326]'>
                        <p className="my-3 font-medium">{category}</p>
                    </div>
                    <p className="leading-relaxed my-4"> <span className="text-xl font-bold">Review:</span> {review}</p>
                    <div className="flex gap-3 items-center">
                        <span className="font-worksans font-medium mt-2">Tags</span>
                        {tags.map((tag, index) => (<div className="bg-[#23BE0A33] p-2 rounded-xl text-[#23BE0A] mt-3" key={index}> #{tag}</div>))}
                    </div>
                    <div className='border-solid border-b-2 border-[#13131326] mt-4'></div>
                    <div>

                        <div className="overflow-x-auto">
                            <table className="table">

                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <td>Number of Pages</td>
                                        <td className="font-bold">{totalPages}</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td>Publisher</td>
                                        <td className="font-bold">{publisher}</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <td>Year of publishing</td>
                                        <td className="font-bold">{yearOfPublishing}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <button className="btn" onClick={handleReadList}>Read</button>
                        <button className="btn bg-[#50B1C9]" onClick={handleWishlist}>Wishlist</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default BookDetails