const getStoredReadList = () => {
  // Save data to local storage
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
    console.log(id, "Already exists in the read list");
  } else {
    storedList.push(id);
    // set item to the read-list key
    const storedListItemsStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListItemsStr);
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
    console.log(id, "Already exist in the local storage");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedListStr);
  }
};

export { addToStoredReadList, addToWishList };
