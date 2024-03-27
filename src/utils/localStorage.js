// export const saveWishToLocalStorage = (data) => {
//     const anotherData = JSON.parse(localStorage.getItem('wishlist')) || [];
//     const existsWish = anotherData.find(item => item.id == data.id)
//     if (!existsWish) {
//         anotherData.push(data);
//         localStorage.setItem('wishlist', JSON.stringify(anotherData));
//         alert('added successfully')
//     } else {
//         alert('already added to read books list')
//     }
// }

// export const getWishFromLocalStorage = () => {
//     const data = JSON.parse(localStorage.getItem('wishlist')) || [];
//     return data;
// }

// export const removeFromLocalStorage = (data) => {
//     let bookItem = JSON.parse(localStorage.getItem('wishlist')) || [];
//     const exists = bookItem.find(item => item.id == data.id)

//     // const newBookArray = [];
//     // for (const id of bookItem) {
//     //     const bookId = id.id;
//     //     const removeBook = bookId - 1
//     //     // newBookArray.push(bookId)
//     //     // console.log(newBookArray)
//     //     if(exists) {
//     //         bookItem.splice(removeBook, 1)
//     //         localStorage.setItem('wishlist', JSON.stringify(bookItem))
//     //     }
//     // }
//     // console.log(exists)
//     // if(exists) {
//     //     // console.log(exists.id)
//     //     bookItem.splice(exists.id, 1)
//     //     localStorage.setItem('wishlist', JSON.stringify(bookItem))
//     // }
// }

// export const saveToLocalStorage = (data) => {
//     const savedData = JSON.parse(localStorage.getItem('read')) || [];

//     const exists = savedData.find(item => item.id == data.id)

//     if (!exists) {
//         savedData.push(data);
//         localStorage.setItem('read', JSON.stringify(savedData));
//         alert('added successfully')
//     } else {
//         alert('already added')
//     }

// }

// export const getFromLocalStorage = () => {
//     const data = JSON.parse(localStorage.getItem('read')) || [];
//     return data
// }

// export const saveWishToLocalStorage = (data) => {
//     let saveWish = getWishFromLocalStorage();
//     const isExist = saveWish.find(w => w.id == data.id);
//     console.log(isExist)
//     if (isExist) {
//         toast('already exists wish')
//     }
//     else {
//         saveWish.push(data);
//         localStorage.setItem('wishlist', JSON.stringify(saveWish));
//         toast('success wish')
//     }
// }














import { toast } from 'react-toastify';


export const getWishFromLocalStorage = () => {
    let wishlist = [];
    const storedData = localStorage.getItem('wishlist');
    if (storedData) {
        wishlist = JSON.parse(storedData)
    }
    return wishlist;
}

export const saveWishToLocalStorage = (data) => {
    let saveWish = getWishFromLocalStorage();
    const isExist = saveWish.find(w => w.id == data.id);
    if (isExist) {
        toast('already exists wish')
    }
    else {
        saveWish.push(data);
        localStorage.setItem('wishlist', JSON.stringify(saveWish));
        toast('success wish')
    }
}

export const deleteWishFromLocalStorage = (id) => {
    let wishlist = getWishFromLocalStorage();
    const remaining = wishlist.filter(d => d.id != id.id);
    localStorage.setItem('wishlist', JSON.stringify(remaining));
    toast('deleted wish')
}



export const getReadFromLocalStorage = () => {
    let readlist = [];
    const storedData = localStorage.getItem('readlist');
    if (storedData) {
        readlist = JSON.parse(storedData)
    }
    return readlist;
}

export const saveReadToLocalStorage = (data) => {
    let saveRead = getReadFromLocalStorage();
    const isExist = saveRead.find(w => w.id == data.id);
    console.log(isExist)
    if (isExist) {
        toast('already exists read')
    }
    else {
        saveRead.push(data);
        localStorage.setItem('readlist', JSON.stringify(saveRead));
        toast('success read')
    }
}

export const deleteReadFromLocalStorage = (id) => {
    let readlist = getReadFromLocalStorage();
    const remaining = readlist.filter(d => d.id != id.id);
    localStorage.setItem('wishlist', JSON.stringify(remaining));
    toast('deleted read')
}









