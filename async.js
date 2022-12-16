const axios = require('axios')

// // callback async
// setTimeout(() => {
//     // add logic
//     console.log("Saya dipanggil 5 detik kemudian")
//     const value = 10

//     console.log("ini adalah value", value)

//     setTimeout(() => {
//         const name = "Saefulloh"

//         console.log("ini adalah nama", name)

//         setTimeout(() => {
//             const name = "Saefulloh"

//             console.log("ini adalah nama", name)

//             setTimeout(() => {
//                 const name = "Saefulloh"

//                 console.log("ini adalah nama", name)

//                 setTimeout(() => {
//                     const name = "Saefulloh"
            
//                     console.log("ini adalah nama", name)

//                     setTimeout(() => {
//                         const name = "Saefulloh"

//                         console.log("ini adalah nama", name)
//                     }, 1)
//                 }, 1)
//             }, 1)
//         }, 1)
//     }, 1)

//     console.log("saya diluar callback")
// }, 5 * 1000)

// console.log("Saya akan dipanggil seketika")

// promise
// const thisIsFunctionPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const name = "Saefulloh"

//             resolve(name)
//         }, 1)
//     })
// }

// thisIsFunctionPromise().then((result) => {
//     console.log("ini adalah result", result)

//     thisIsFunctionPromise().then((result) => {
//         console.log("ini adalah result", result)

//         thisIsFunctionPromise().then((result) => {
//             console.log("ini adalah result", result)

//             thisIsFunctionPromise().then((result) => {
//                 console.log("ini adalah result", result)

//                 thisIsFunctionPromise().then((result) => {
//                     console.log("ini adalah result", result)
//                 })
//             })
//         })
//     })
// })

const userAPI = "https://jsonplaceholder.typicode.com/users/3/inipastigagal/karna/apinya/gaada"

axios.get(userAPI).then((result) => {
    console.log(`Halo nama saya adalah ${result.data.name}.\nEmail saya adalah ${result.data.email}.\nSaya tinggal di ${result.data.address.street}`)
}).catch(error => {
    console.log(error.response.statusText)
})

// async

/**
 * contoh penerapan async
 * 1. call api: front end -> back end
 * 2. async backend
 *  1. get data makanan dengan geolocation terdekat 2 detik
    2. kalkulasi jarak makanan dengan titik geolocation 5 detik
    3. get ratting per makanan 1 detik 4. get promo per restoran 2 detik
 */

// Tim 1
// Muhammad Mufti Ramadhan
// Mochamad Fajri Ilham Nurdin
// Ridho Ghiffary Muhammad
// Respatyadi Hari Nugroho
// Yusron Abdullah

// Tim 2
// Tabah Salahudin Amri
// Ade Maulana Akbar
// Achmad Yoga
// Alfonsus Christofer
// Angello Tegar Sahaduta

// Tim 3
// Muhammad Yasin Alqurni
// Yehezkiel Andrea F Hebber
// Deppy Supardi
// Abya Ephan R
// Dustin

// Tugas:
// 1. Buat request api untuk https://jsonplaceholder.typicode.com/todos
// 2. Buat request api untuk https://jsonplaceholder.typicode.com/posts/4
// 3. Buat request api untuk https://jsonplaceholder.typicode.com/comments/6
