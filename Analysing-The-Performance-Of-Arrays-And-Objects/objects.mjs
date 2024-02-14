 let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4]
 }

 console.log(Object.keys(instructor)); // --> This is O(n) because, the function will look trough he object and add the keys in the object to an array. The more the keys in the object, the more the time it takes.
 console.log(Object.entries(instructor)); // --> This is O(n)  because, the function will compile all the keys and values into different arrays. 
 console.log(Object.values(instructor)); // --> This is O(n) because, the function will look trough he object and add the values in the object to an array. The more the values in the object, the more the time it takes.
 console.log(instructor.hasOwnProperty('favoriteNumbers')); // --> This is O(1) because, this looks more like accessing a key in an object.
// BIG-O of Objects

// Insertion - O(1)
// Removal - O(1)
// Access - O(1)
// Search - (n) -> This is different from access and it is talking about the amount of time it takes to search for something in the value of a key.


// For example; what key holds the value "true"?
// To solve this question, we have to look trough the keys to check which one has the value of "true".
// As the number of keys grows, the more time it takes.