import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { firebase, database as default }
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// }, (e) => {

// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// }, (e) => {

// })

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// }, (e) => {

// })

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     }, (e) => {
//         console.log('Error fetching data!', e)
//     })

// database.ref('expenses/-MISGFvqEvbQM_2U8kte').set({
//     amount: 55000
// })

// setTimeout(() => {
//     database.ref('expenses/-MISGFvsw8z9mZx3QCAv').set({
//         amount: 12
//     })
// }, 3000)

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     }).catch((e) => {

//     })
// database.ref('expenses').push({
//     description: 'Buy PS5',
//     note: 'Been waiting to get one of these',
//     amount: 50000,
//     createdAt: 256450
// })

// database.ref('notes/-MISEQkoSM5KONYFy2ki').remove()
// database.ref('notes').push({
//     title: 'Wankathon',
//     body: 'Top 10 wanks'
// })


// const firebaseNotes = {
//     notes: {
//         sdf234sfef: {
//             title: 'firstNote',
//             body: 'This is my note'
//         },
//         sdf3234223:
//     }
// }
// const notes = [{
//     id: 12,
//     title: 'firstNote',
//     body: 'This is my note'
// }, {
//     id: 14,
//     title: 'Ze Note',
//     body: 'Get in the one'
// }]

// database.ref('notes').set(notes)
// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     const name = val.name
//     const jobTitle = val.job.title
//     const jobCompany = val.job.company

//     console.log(`${name} is a ${jobTitle} at ${jobCompany}.`)
// }, (e) => {
//     console.log('Error fetching data.', e)
// })

// setTimeout(() => {
//     database.ref('name').set('Big Daddy')
// }, 3000)

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Error with data fetching', e)
// })

// setTimeout(() => {
//     database.ref('age').set(78)
// }, 3500)

// setTimeout(() => {
//     database.ref().off(onValueChange)
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(67)
// }, 10500)

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     }).catch((e) => {
//         console.log('Error fetching data', e)
//     })

// database.ref().set({
//     name: 'Andrew Luckie',
//     age: 34,
//     stressLevel: 5,
//     job: {
//         title: 'Legend',
//         company: 'Olympus'
//     },
//     location: {
//         city: 'H-town',
//         country: 'New Zealand'
//     }
// }).then(() => {
//     console.log('data is saved!')
// }).catch((e) => {
//     console.log('Save failed. ', e)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })
// database.ref('isSingle').set(null)

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed.')
//     }).catch((e) => {
//         console.log(`Data wasn't removed. `, e)

//     })