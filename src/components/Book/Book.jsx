import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Book = ({ book }) => {
    const { id, image, category, bookName, author, tags, rating } = book
    return (
        <div className='p-5 border border-[#13131326] rounded-xl'>
            <Link to={`/book-details/${id}`}>
                <div className="card bg-base-100 shadow-xl">
                    <figure className='bg-[#F3F3F3] p-5'><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex gap-5'>
                            {
                                tags.map((tag, index) => (<div className='bg-[#23BE0A33] p-2 rounded-xl text-[#23BE0A]' key={index}>{tag}</div>))
                            }
                        </div>
                        <h2 className="card-title font-playfair text-2xl">{bookName}</h2>
                        <p>By: {author}</p>
                        <div className='border-dashed border-t-2 border-[#13131326]'>
                        </div>
                        <div className="card-actions flex items-center justify-between">
                            <div>
                                <p>{category}</p>
                            </div>
                            <div>
                                <p className='text-xl flex items-center'> {rating} <CiStar /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object
}

export default Book