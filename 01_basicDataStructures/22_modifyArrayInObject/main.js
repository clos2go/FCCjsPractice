console.clear()

// Modify an Array Stored in an Object
// Now you've seen all the basic operations for JavaScript objects.
// You can add, modify, and remove key-value pairs,
// check if keys exist, and iterate over all the keys in an object.
// As you continue learning JavaScript you will see even more versatile
// applications of objects. Additionally, the Data Structures lessons
// located in the Coding Interview Prep section of the curriculum also
// cover the ES6 Map and Set objects, both of which are similar to ordinary
// objects but provide some additional features. Now that you've learned the
// basics of arrays and objects, you're fully prepared to begin tackling
// more complex problems using JavaScript!

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: ['Sam', 'Kira', 'Tomo'],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
}

function addFriend(userObj, friend) {
  let userObjData = userObj.data.friends
  let newFriends = userObj.data.friends.push(friend)
  return userObjData
}

console.log(addFriend(user, 'Pete'))
