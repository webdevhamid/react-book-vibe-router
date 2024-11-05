import toast from "react-hot-toast";

const getStoredReadList = () => {
  // Get data from local storage
  // read-list
  const storedListItemsStr = localStorage.getItem("read-list");
  if (storedListItemsStr) {
    const storedItems = JSON.parse(storedListItemsStr);
    return storedItems;
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredReadList(); // array
  if (storedList.includes(id)) {
    // Do not add it
    toast.error("Sorry! This book is already added!");
  } else {
    storedList.push(id);
    // set item to the read-list key
    const storedListItemsStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListItemsStr);
    toast.success("Book successfully added!");
  }
};

// Get stored wish list books from the local storage
const getStoredWishList = () => {
  const storedListStr = localStorage.getItem("wish-list");
  if (storedListStr) {
    const storedItems = JSON.parse(storedListStr);
    return storedItems;
  } else {
    return [];
  }
};

const addToWishList = (id) => {
  const storedList = getStoredWishList();
  if (storedList.includes(id)) {
    // Do not add the id to the stored list
    toast.error("Sorry! This book is already added!");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    // Store data to wish-list
    localStorage.setItem("wish-list", storedListStr);
    toast.success("Book successfully added to your wishlist!");
  }
};

export { addToStoredReadList, addToWishList, getStoredReadList, getStoredWishList };
