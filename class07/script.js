// function first(workTime){
//     return new Promise((resolve, reject) => {
//         if (workTime <= 0 ){
//             return reject('This work time is too short to work with! Rejected :)')
//         }
//         setTimeout(()=>{
//             resolve("The time is right, this promise is resolved.")
//         },workTime)
//     })
// }

// function second(){
//     console.log("This is the second thing in the function  SECOND!");
// }

// // console.log(first(0));
// // console.log(first(1000));
// // second()
// first(1000)
// .then((data)=>{
//     console.log(data);
//     second()
// })
// .catch((error)=>{
//     console.log(error);
// });
// second()

// JQUERY

function showDocuments(documents) {
  if (!documents && typeof documents != "object") {
    throw new Error("Problem with documents bate");
  }
  if (documents.length === 0) {
    throw new Error("No documents !!");
  }
  documents.forEach((doc) => {
    console.log(`${doc.name},${doc.type} - ${doc.size}mb`);
  });
}

function getDocumentsJQuery() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json",
      success: (response) => {
        resolve(JSON.parse(response));
      },
      error: (err) => {
        reject(err);
      },
    });
  });
}

getDocumentsJQuery()
  .then((data) => {
    console.log(
      "This is ASYINC OPERATION in the THEN section resolving getDocumentsJQuery promise"
    );
    showDocuments(data);
  })
  .catch((error) => {
    console.log(error + "FROM CATCH ERROR");
  });

// FETCH

function getDocumentsFetch() {
  return new Promise((resolve, reject) => {
    fetch(
      "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json"
    )
      .then((result) => {
        resolve(result.json());
      })
      .catch((error) => {
        reject(error + "fetch error message");
      });
  });
}

getDocumentsFetch()
  .then((data) => {
    console.log("We got the data and is resolved from fetch");
    showDocuments(data);
  })
  .catch((err) => {
    console.log(err + "Error from the catch");
  })
  .finally(() => {
    console.log("Finally the end of this ");
  });

// pending - fulfilled (resolve,reject,finally) - - - - - states of promise

// How do we do it at work
// ASYNC

async function getAllDocuments() {
  let response = await fetch(
    "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json"
  );
  let result = await response.json();

  return result;
}
async function printDocsAsync() {
    try {
  let docs = await getAllDocuments();
  docs.forEach((doc) => {
    console.log(`${doc.name},${doc.type} - ${doc.size}mb`);
  });}
  catch(error){
    console.log(error + " EROOR IN THE TRY/CATCH BLOCK");
  }
}
console.log(printDocsAsync());
console.log(getAllDocuments());