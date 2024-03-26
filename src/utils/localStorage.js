// export const saveWishToLocalStorage = (data) => {
//     const anotherData = JSON.parse(localStorage.getItem('wishlist')) || [];
//     const existsWish = anotherData.find(item => item.id == data.id)
//     if (!existsWish) {
//         anotherData.push(data);
//         localStorage.setItem('wishlist', JSON.stringify(anotherData));
//         alert('added successfully')
//     } else {
//         alert('already added')
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

export const saveToLocalStorage = (data) => {
    const savedData = JSON.parse(localStorage.getItem('read')) || [];

    const exists = savedData.find(item => item.id == data.id)

    if (!exists) {
        savedData.push(data);
        localStorage.setItem('read', JSON.stringify(savedData));
        alert('added successfully')
    } else {
        alert('already added')
    }

}


export const getFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem('read')) || [];
    return data
}



