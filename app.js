let restaurants = document.querySelector('#restaurants');

restaurants.innerHTML = `<h1 class = title>all restaurants will be displayed here</h1>`

function addReview() {
    //alert('hello');
    //grab value of text box

    let val = document.querySelector('#review_text').value;
    //make sure we grabbed the value
    //alert(val);

    let m = document.querySelector('#allr_r').id;
    alert(m);

    let temp = {
        text: val,
        res_id: m
    }

    // no linking the reviews to restaurants
    db.collection('reviews').add(temp).then(() => {
        console.log('review added');
    })

}


// add a text box to allow users to search for all restaurants in a particular location
// case sensitive
//where()

//in progress
function search_r() {

}

db.collection('restaurants').get().then(response => {
    let mydata = response.docs;

    let html = `<div class = "select" id="all_r"><select>`;

    // loop through the array using foreach
    mydata.forEach(d => {
        html += `<option value="${d.id}">${d.data().name}</option>`
    })

    html += "</select></div>"

    //append the HTML to the document (restaurants div)
    restaurants.innerHTML += html;
})



// alert(restaurants);

function displayData() {
    db.collection('restaurants').get().then(response => {

        let res = response.docs;
        res.forEach(r => {
            restaurants.innerHTML += `<p>${r.data().name} is in ${r.data().location}</p>`
        })

    })
}

// save data to the database

// function saveData() {
//     let newRestaurant = {
//         name: "lorem ipsum",
//         location: "somewhere"
//     }
//     db.collection('restaurants').add(newRestaurant);
// }


db.collection('restaurants').where('location', '==', 'verona').get().then(response => {
    let mydata = repsonse.docs;

    mydata.forEach(d => {
        console.log(`${d.data().name}`)
    })
})
// //Step 2: use this to verify that your firebase was linked correctly
// console.log(firebase);

// //Step 3: Create Firestore database

// //Step 4: db.collection(name of collection).get.then(response)... (asynchronous programming. need to wait for response from firebase)
// db.collection('restaurants').get().then(response => {
//     console.log(response.docs[0].data());
// })

// db.collection('restaurants').get().then(response => {
//     console.log(response.docs[0].data().name + " is in " +
//         response.docs[1].data().name);
// })