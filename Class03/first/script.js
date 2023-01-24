// document.getElementById('sendRequest')
// .addEventListener('click',function(){
//     let xhr = new XMLHttpRequest();
//     xhr.onload = function (){
//         console.log('request send');
//         if(xhr.status >=200 && xhr.status < 300){
//             let objectResponse = JSON.parse(xhr.response)
//             console.log(objectResponse);
//         } else {
//             console.log(xhr.responseText);
//         }
//     }
//     xhr.open("GET","https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json")
//     xhr.send();

// })

// // jquery

// $(document).ready(function(){
//     document.getElementById('sendRequest')
//     .addEventListener('click',function(){
//         $.ajax({
//             url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json",
//             success:function(response){
//                 console.log('request successful');
//                 let responseObject = JSON.parse(response)
//                 console.log(responseObject);
//             },
//             error: function(response){
//                 console.log("The request has failed" + response.status);
//                 console.log(response.responseText);
//             }
//         })
//     })

// })

let btn = document.getElementById("sendRequest");

btn.addEventListener("click", function () {
  fetch(
    "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json"
  )
    .then((data) => {
      data.json().then((parsedData) => {

        let h1 = document.createElement("h1");
        btn.after(h1);
        h1.innerHTML = `Academy name : ${parsedData.academy}`;
        let ul = document.createElement("ul");
        h1.after(ul);
        for (let i = 0; i < 5; i++) {
          let list = document.createElement("li");
          ul.after(list);
          list.innerHTML = `<b>Student ${i + 1} </b>: ${
            parsedData.students[i]
          }`;
        }
      });
    })
    .catch((e) => {
      console.error(e);
    });
});
