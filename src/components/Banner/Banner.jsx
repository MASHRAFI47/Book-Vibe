import { Link } from 'react-router-dom'
import book1 from '../../assets/images/book1.png'

const Banner = () => {
    return (
        <div className='bg-[#1313130D] mt-6 py-5 rounded-none md:rounded-xl'>
            <div className='flex justify-around items-center'>
                <div className='ml-4 lg:ml-0'>
                    <h1 className='text-3xl md:text-5xl font-bold font-playfair mb-3'>Books to freshen up <br /> you and your bookshelf</h1>
                    <Link to={'/listed-books'} className="btn btn-success text-white mt-4">View The List</Link>
                </div>
                <div className='py-2'>
                    <img src={book1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner