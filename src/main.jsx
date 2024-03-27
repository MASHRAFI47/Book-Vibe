import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from '../src/components/Root/Root'
import Home from './pages/Home/Home';
import ListedBooks from './pages/ListedBooks/ListedBooks';
import PagesToRead from './pages/PagesToRead/PagesToRead';
import BookDetails from './components/BookDetails/BookDetails';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/listed-books',
        element: <ListedBooks />,
        loader: () => fetch(`../books.json`)
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead />
      },
      {
        path:'/book-details/:id',
        element: <BookDetails />,
        loader: () => fetch(`../books.json`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
