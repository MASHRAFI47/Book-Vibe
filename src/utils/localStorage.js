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

    const localRead = getReadFromLocalStorage();
    const existingRead = localRead.find(w => w.id == data.id);

    if (existingRead) {
        if(isExist) {
            toast('already added to wishlist')
        }
        toast('You have already read this book')
    }
    else {
        if(!isExist) {
            saveWish.push(data);
            localStorage.setItem('wishlist', JSON.stringify(saveWish));
            toast('Successfully added to wishlist')
        } else {
            toast('you already added this to wishlist')
        }
        
    }
}


export const deleteWishFromLocalStorage = (id) => {
    let wishlist = getWishFromLocalStorage();
    const remaining = wishlist.filter(d => d.id != id.id);
    localStorage.setItem('wishlist', JSON.stringify(remaining));
    // toast('deleted wish')
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
        toast('You have already read this book')
    }
    else {
        saveRead.push(data);
        localStorage.setItem('readlist', JSON.stringify(saveRead));
        toast('Added to Read')
    }
}

export const deleteReadFromLocalStorage = (id) => {
    let readlist = getReadFromLocalStorage();
    const remaining = readlist.filter(d => d.id != id.id);
    localStorage.setItem('wishlist', JSON.stringify(remaining));
    toast('deleted read')
}







// export const saveWishToLocalStorage = (data) => {
//     let saveWish = getWishFromLocalStorage();
//     const isExist = saveWish.find(w => w.id == data.id);
//     if (isExist) {
//         toast('already exists wish')
//     }
//     else {
//         saveWish.push(data);
//         localStorage.setItem('wishlist', JSON.stringify(saveWish));
//         toast('success wish')
//     }
// }






// export const saveWishToLocalStorage = (data) => {

//     const readList = getReadFromLocalStorage();


//     let saveWish = getWishFromLocalStorage();
//     // const isExist = saveWish.find(w => w.id == data.id);
//     const isExist = saveWish.find(w => w.id == data.id);
//     console.log(isExist)

    

//     if (isExist) {
//         toast('already exists wish')
//     }
//     else {
//         console.log(readList)
//         for (const read of readList) {
//             console.log(read)
//         }
//         if (saveWish.length >= 0) {
//             saveWish.push(data);
//             localStorage.setItem('wishlist', JSON.stringify(saveWish));
//             toast('success wish')

           
//         }
//     }
// }
