import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router-dom";
import { getWishFromLocalStorage } from "../../utils/localStorage";

import { CiLocationOn } from "react-icons/ci";
import { LuUsers2 } from "react-icons/lu";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { getReadFromLocalStorage } from "../../utils/localStorage";
import { toast } from "react-toastify";



const ListedBooks = () => {

  const allBooks = useLoaderData()
  const localReadData = getReadFromLocalStorage()
  const localWishData = getWishFromLocalStorage()

  const [readBookLists, setReadBookLists] = useState(localReadData)
  const [wishBookLists, setWishBookLists] = useState(localWishData)


  // test
  const [booking, setBooking] = useState(localReadData)
  const [wishing, setWishing] = useState(localWishData)


  //
  const [sortData, setSortData] = useState(localWishData)
  const [order, setOrder] = useState("rating")
  
  useEffect(() => {
    fetch('books.json')
      .then(res => res.json())
      .then(data => setBooking(data))
  }, []);
  
  useEffect(() => {
    fetch('books.json')
      .then(res => res.json())
      .then(data => setWishing(data))
  }, []);

  useEffect(() => {
    const storedLocalData = getReadFromLocalStorage();

    if (allBooks.length > 0) {
      let booksApplied = [];
      for (const id of storedLocalData) {
        const bookId = id.id;
        const book = allBooks.find(book => book.id == bookId)
        if (book) {
          booksApplied.push(book)
        }
      }
    }
  }, [allBooks]);


  const handleSort = (filter) => {
    if (filter == 'rating') {

      readBookLists.sort((a, b) =>
        b.rating - a.rating
      )
      setReadBookLists(readBookLists)

      // test
      let data = [...booking];
      if (data.length > 0) {
        let result = data.sort((a, b) => a.bookName.localeCompare(b.bookName))
        setBooking(result)
      }


      const sorted = [...sortData].sort((a,b) => 
        a.rating < b.rating ? 1 : -1 
      );
      setSortData(sorted)
      setOrder("DSC")
      console.log(sorted)

      // wishBookLists.sort((a, b) =>
      //   b.rating - a.rating
      // )
      // setWishBookLists(wishBookLists)
      // // second test
      // let newData = [...wishing];
      // if (newData.length > 0) {
      //   let result = newData.sort((a, b) => a.bookName.localeCompare(b.bookName))
      //   setWishing(result)
      // }
    }

    else if (filter == 'number-of-pages') {
      readBookLists.sort((a, b) =>
        b.totalPages - a.totalPages
      )
      setReadBookLists(readBookLists)

      // test
      let data = [...booking];
      if (data.length > 0) {
        let result = data.sort((a, b) => a.bookName.localeCompare(b.bookName))
        setBooking(result)
      }


      //wishlist
      const sorted = [...sortData].sort((a,b) => 
        a.totalPages < b.totalPages ? 1 : -1 
      );
      setSortData(sorted)
      setOrder("DSC")
      console.log(sorted)

    }
    else if (filter == 'published-year') {
      readBookLists.sort((a, b) =>
        b.yearOfPublishing - a.yearOfPublishing
      )
      setReadBookLists(readBookLists)

      // test
      let data = [...booking];
      if (data.length > 0) {
        let result = data.sort((a, b) => a.bookName.localeCompare(b.bookName))
        setBooking(result)
      }

      
      //wishlist
      const sorted = [...sortData].sort((a,b) => 
        a.yearOfPublishing < b.yearOfPublishing ? 1 : -1 
      );
      setSortData(sorted)
      setOrder("DSC")
      console.log(sorted)
      
    }
  }





  const [wishBooks, setWishBooks] = useState([])

  useEffect(() => {
    const storedWishData = getWishFromLocalStorage();
    if (allBooks.length > 0) {
      let wishApplied = [];
      for (const id of storedWishData) {
        const wishId = id.id;
        const wishedBook = allBooks.find(book => book.id == wishId)
        if (wishedBook) {
          wishApplied.push(wishedBook);
        }
        setWishBooks(wishApplied)
      }
    }
  }, [allBooks]);

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
            <li onClick={() => handleSort('rating')}><a>Rating</a></li>
            <li onClick={() => handleSort('number-of-pages')}><a>Number of Pages</a></li>
            <li onClick={() => handleSort('published-year')}><a>Published Year</a></li>
          </ul>
        </div>
      </div>

      {/* Tabs */}
      <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <div>
            {/* readbooks list */}
            {
              readBookLists.map((readBook, index) => (
                <div key={index} className="mb-3 border">
                  <div className="card card-side bg-base-100 shadow-xl rounded flex-col md:flex-row">
                    <img src={readBook.image} className="w-full md:w-[20%] p-5 bg-[#1313130D]" alt="Movie" />
                    <div className="card-body">
                      <h2 className="card-title font-playfair text-2xl font-bold">{readBook.bookName}</h2>
                      <div>
                        <p>By: {readBook.author}</p>
                      </div>

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
                        <div>
                          <p className="bg-[#328EFF33] text-[#328EFF] p-2 py-1 md:py-2 rounded-xl">Category: {readBook.category}</p>
                        </div>
                        <div>
                          <p className="bg-[#FFAC3333] text-[#FFAC33] p-2 py-1 md:py-2 rounded-xl">Rating: {readBook.rating}</p>
                        </div>
                        <Link to={`/book-details/${readBook.id}`} className="bg-[#23BE0A] text-white p-2 py-1 md:py-2 rounded-xl">View Details</Link>
                      </div>


                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>



        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist" onClick={() => location.reload()} defaultChecked />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

          {/* Wishlist */}
          <div>
            {
              sortData.map((wishBook, index) => (
                <div key={index} className="mb-3 border">
                  <div className="card card-side bg-base-100 shadow-xl rounded flex-col md:flex-row">
                    <img src={wishBook.image} className="w-full md:w-[20%] p-5 bg-[#1313130D]" alt="Movie" />
                    <div className="card-body">
                      <h2 className="card-title font-playfair text-2xl font-bold">{wishBook.bookName}</h2>
                      <div>
                        <p>By: {wishBook.author}</p>
                      </div>

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
                        <div>
                          <p className="bg-[#328EFF33] text-[#328EFF] p-2 py-1 md:py-2 rounded-xl">Category: {wishBook.category}</p>
                        </div>
                        <div>
                          <p className="bg-[#FFAC3333] text-[#FFAC33] p-2 py-1 md:py-2 rounded-xl">Rating: {wishBook.rating}</p>
                        </div>
                        <Link to={`/book-details/${wishBook.id}`} className="bg-[#23BE0A] text-white p-2 py-1 md:py-2 rounded-xl">View Details</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

        </div>
      </div>

    </div>
  )
}

export default ListedBooks