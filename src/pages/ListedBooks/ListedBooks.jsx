import {  useState } from "react"
import { Link, useLoaderData } from "react-router-dom";
// import { getWishFromLocalStorage } from "../../utils/localStorage";

import { CiLocationOn } from "react-icons/ci";
import { LuUsers2 } from "react-icons/lu";
import { MdOutlineInsertPageBreak } from "react-icons/md";



const ListedBooks = () => {
  const [readBooks, setReadBooks] = useState([])

  const allBooks = useLoaderData()

  // useEffect(() => {
  //   const storedLocalData = getFromLocalStorage();

  //   if (allBooks.length > 0) {
  //     const booksApplied = [];
  //     for (const id of storedLocalData) {
  //       const bookId = id.id;
  //       const book = allBooks.find(book => book.id == bookId)
  //       if (book) {
  //         booksApplied.push(book)
  //       }
  //     }
  //     setReadBooks(booksApplied)
  //   }
  // }, [allBooks]);



  // const [wishBooks, setWishBooks] = useState([])

  // useEffect(() => {
  //   const storedWishData = getWishFromLocalStorage();
  //   if (allBooks.length > 0) {
  //     let wishApplied = [];
  //     for (const id of storedWishData) {
  //       const wishId = id.id;
  //       const wishedBook = allBooks.find(book => book.id == wishId)
  //       if (wishedBook) {
  //         wishApplied.push(wishedBook);
  //       }
  //       setWishBooks(wishApplied)
  //     }
  //   }
  // }, []);

  return (
    <div>
      <div className="text-center text-3xl font-bold bg-[#1313130D] py-4 rounded-xl">
        <h1>Books</h1>
      </div>

      {/* DropDown */}
      <div className="text-center mt-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 btn-success text-white">Sort By</div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div>

      {/* Tabs */}
      <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <div>
            {readBooks.map((readBook, index) => (
              <div key={index} className="mt-0 md:mt-6 border p-0 md:p-3 rounded-xl">
                <div className="flex flex-col md:flex-row ml-5 md:ml-0">
                  <div className="w-full md:w-1/3 p-3 md:p-0">
                    <img src={readBook.image} className="bg-[#1313130D] p-5 w-full md:w-1/2" alt="" />
                  </div>
                  <div className="w-2/3">
                    <h1 className="font-playfair text-2xl font-bold">{readBook.bookName}</h1>
                    <p>By: {readBook.author}</p>
                    <div className="items-center hidden md:inline-flex">
                      <span className="font-bold mt-2 mr-4">Tag</span>
                      <div className="flex gap-2 items-center">
                        {
                          readBook.tags.map((tag, index) =>
                            <div className="bg-[#23BE0A33] p-1 px-2 rounded-xl text-[#23BE0A] mt-3" key={index}>
                              #{tag}
                            </div>)
                        }
                        <p className="mt-3 flex items-center text-[#131313CC]">  <CiLocationOn /> Year of Publishing: {readBook.yearOfPublishing}</p>
                      </div>
                    </div>

                    {/* mobile */}
                    <div className="flex items-center md:hidden">
                      <div className="flex gap-2 items-center">
                        {
                          readBook.tags.map((tag, index) =>
                            <div className="bg-[#23BE0A33] p-1 px-2 rounded-xl text-[#23BE0A]" key={index}>
                              #{tag}
                            </div>)
                        }
                      </div>
                      <p className="mt-3 items-center text-[#131313CC] hidden md:inline-flex">  <CiLocationOn /> Year of Publishing: {readBook.yearOfPublishing}</p>

                    </div>

                    <div className="flex flex-col md:flex-row gap-0 md:gap-5 space-y-2 mb-0 md:mb-2">
                      <p className="mt-3 items-center text-[#131313CC] inline-flex md:hidden mb-0 md:mb-2">  <CiLocationOn /> Year of Publishing: {readBook.yearOfPublishing}</p>
                      <p className="flex items-center text-[#131313CC]"><LuUsers2 /> Publisher: {readBook.publisher}</p>
                      <p className="flex items-center text-[#131313CC]"><MdOutlineInsertPageBreak /> Page: {readBook.totalPages}</p>
                    </div>
                    <div className="border-b-2">
                    </div>

                    <div className="flex gap-2 md:gap-5 mt-3 mb-3">
                      <p className="bg-[#328EFF33] text-[#328EFF] p-2 py-1 md:py-2 rounded-xl">Category: {readBook.category}</p>
                      <p className="bg-[#FFAC3333] text-[#FFAC33] p-2 py-1 md:py-2 rounded-xl">Rating: {readBook.rating}</p>
                      <Link to={`/book-details/${readBook.id}`} className="btn btn-success text-white p-2 py-1 md:py-2 rounded-xl">View Details</Link>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>



        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist" checked />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

          {/* Wishlist */}
          <div>
            {wishBooks.map((wishBook, index) => (
              <div key={index} className="mt-0 md:mt-6 border p-0 md:p-3 rounded-xl">
                <div className="flex flex-col md:flex-row ml-5 md:ml-0">
                  <div className="w-full md:w-1/3 p-3 md:p-0">
                    <img src={wishBook.image} className="bg-[#1313130D] p-5 w-full md:w-1/2" alt="" />
                  </div>
                  <div className="w-2/3">
                    <h1 className="font-playfair text-2xl font-bold">{wishBook.bookName}</h1>
                    <p>By: {wishBook.author}</p>
                    <div className="items-center hidden md:inline-flex">
                      <span className="font-bold mt-2 mr-4">Tag</span>
                      <div className="flex gap-2 items-center">
                        {
                          wishBook.tags.map((tag, index) =>
                            <div className="bg-[#23BE0A33] p-1 px-2 rounded-xl text-[#23BE0A] mt-3" key={index}>
                              #{tag}
                            </div>)
                        }
                        <p className="mt-3 flex items-center text-[#131313CC]">  <CiLocationOn /> Year of Publishing: {wishBook.yearOfPublishing}</p>
                      </div>
                    </div>

                    {/* mobile */}
                    <div className="flex items-center md:hidden">
                      <div className="flex gap-2 items-center">
                        {
                          wishBook.tags.map((tag, index) =>
                            <div className="bg-[#23BE0A33] p-1 px-2 rounded-xl text-[#23BE0A]" key={index}>
                              #{tag}
                            </div>)
                        }
                      </div>
                      <p className="mt-3 items-center text-[#131313CC] hidden md:inline-flex">  <CiLocationOn /> Year of Publishing: {wishBook.yearOfPublishing}</p>

                    </div>

                    <div className="flex flex-col md:flex-row gap-0 md:gap-5 space-y-2 mb-0 md:mb-2">
                      <p className="mt-3 items-center text-[#131313CC] inline-flex md:hidden mb-0 md:mb-2">  <CiLocationOn /> Year of Publishing: {wishBook.yearOfPublishing}</p>
                      <p className="flex items-center text-[#131313CC]"><LuUsers2 /> Publisher: {wishBook.publisher}</p>
                      <p className="flex items-center text-[#131313CC]"><MdOutlineInsertPageBreak /> Page: {wishBook.totalPages}</p>
                    </div>
                    <div className="border-b-2">
                    </div>

                    <div className="flex gap-2 md:gap-5 mt-3 mb-3">
                      <p className="bg-[#328EFF33] text-[#328EFF] p-2 py-1 md:py-2 rounded-xl">Category: {wishBook.category}</p>
                      <p className="bg-[#FFAC3333] text-[#FFAC33] p-2 py-1 md:py-2 rounded-xl">Rating: {wishBook.rating}</p>
                      <Link to={`/book-details/${wishBook.id}`} className="btn btn-success text-white p-2 py-1 md:py-2 rounded-xl">View Details</Link>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  )
}

export default ListedBooks