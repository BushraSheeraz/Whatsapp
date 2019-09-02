function check() {
    const cityName = document.querySelector('input').value;


    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5651b311f4bde3b478a18fbf9b55efcd`)
        .then(function(response) {
            // handle success
            console.log(response.data.weather[0].main);
            document.querySelector("h1").innerHTML = response.data.weather[2].main;
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        })
        .finally(function() {
            // always executed
        });
}














// let handleSuccess = function(response) {
//     // handle success
//     console.log("SUCCESS!");
//     console.log(response);
//     for (let i = 0; i < response.data.length; i++) {
//         // console.log(response.data[i]);
//         let message = response.data[i];
//         document.querySelector("ul").innerHTML +=
//             `<ul class="design">
//                <li >
//                <img src="${message.profilePic}" />
//               <h4>${message.name}</h4>
//               <h4>${message.number}</h4>
//                <h4>${message.firstLine}</h4>
//                <h4>${message.time}</h4>

//             </li>
//         </ul>
//     `

//     }
// }

// let handleError = function(error) {
//     // handle error
//     console.log("ERROR!!!!!!! :'-[ ");
//     console.log(error);
// }

// let finishUp = function() {
//     // always executed
//     console.log("THE END!");
// }


// // Make a request for a user with a given ID
// axios.get('https://tk-whatsapp.herokuapp.com/messages')
//     .then(handleSuccess)
//     .catch(handleError)
//     .finally(finishUp);





// https://www.github.com/search?q=Jamia-fatima

// protocol : http
// path: /search
// queryString : q= jamila-fatima
// server address::www.github.com