
// //backend API
const promise = new Promise((resolve, reject) => { //resolve/reject are callback functions
    if (Math.random() > 0.5) {
        setTimeout( () => resolve('Random number ok'), 250) //success
     } 
     else { 
        setTimeout( () => reject('Random number too low'), 250) //failure
    }
})

// //Frontend API call browser asking for data from your server (login, password, etc.)
// promise
// .finally(()=> console.log('Wait is over, promise has settled'))
// .then((result)=> console.log('Success ' + result))
// .catch((error) => console.log('Error ' + error))

let fetchUsers = async