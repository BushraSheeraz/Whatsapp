// Make a request for a user with a given ID
axios.get('https://tk-whatsapp.herokuapp.com/messages')
    .then(function (response) {
        // handle success
        for (let i = 0; i < response.data.length; i++) {
            let messages = response.data[i];
            document.querySelector('ul').innerHTML +=
                `<ul class="profile">
                    <li>
                        <div class="image">
                            <img src= ${messages.profilePic}>
                        </div>
                        <div class="main">
                            <div class="contact">
                                <span class="name">${messages.name}</span>
                                <span class="time">${messages.time}</span>
                            </div>
                            <div class="message">
                                <span class="line">${messages.firstLine}</span>
                                <span class="unread">${messages.numbUnread}</span>
                            </div>
                        </div>
                    </li>
                </ul>`
        }

        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });


// let handleSuccess = function (response) {
//     // handle success
//     console.log("SUCCESS!");
//     console.log(response);
//     for (let i = 0; i < response.data.length; i++) {
//         // console.log(response.data[i]);
//         let message = response.data[i];
//         document.querySelector("ul").innerHTML += `
//         <li class="message">
//             <h3>${message.name}</h3>
//             <p>${message.number}</p>
//             <p>${message.firstLine}</p>
//             <p>${message.time}</p>
//             <img src="${message.profilePic}" />
//         </li>
//     `

//     }
// }

// let handleError = function (error) {
//     // handle error
//     console.log("ERROR!!!!!!! :'-[ ");
//     console.log(error);
// }

// let finishUp = function () {
//     // always executed
//     console.log("THE END!");
// }


// // Make a request for a user with a given ID
// axios.get('https://tk-whatsapp.herokuapp.com/messages')
//     .then(handleSuccess)
//     .catch(handleError)
//     .finally(finishUp);





{/* <h4>${messages.name}</h4>
<h4>${messages.number}</h4> */}