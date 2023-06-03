// export const getAmazonStatus = (req, res) => {
//     return fetch("https://www.amazon.com",{
//         method: "GET",
//     })
//     .then((response) => {
//         console.log(response);
//         let url = response.url;
//         let statusCode = response.status;
//         let respDate = new Date();
//         return {
//             url: url,
//             statusCode: statusCode,
//             respDate: respDate,
//         };
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }

// export const getGoogleStatus = (req, res) => {
//     return fetch("https://www.google.com",{
//         method: "GET",
//     })
//     .then((response) => {
//         console.log(response);
//         let url = response.url;
//         let statusCode = response.status;
//         let respDate = new Date();
//         return {
//             url: url,
//             statusCode: statusCode,
//             respDate: respDate,
//         };
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }

export const getAmazonStatus = (req, res) => {
    return fetch("http://localhost:6090/v1/amazon-status",
    {
        method: "GET",
    })
    .then((response) => {
        return response.json();
    })
    .catch((err) => {
        console.log(err);
    })
}

export const getGoogleStatus = (req, res) => {
    return fetch("http://localhost:6090/v1/google-status",
    {
        method: "GET",
    })
    .then((response) => {
        return response.json();
    })
    .catch((err) => {
        console.log(err);
    })
}