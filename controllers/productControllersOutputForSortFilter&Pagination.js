
// This api for Sorting product by asending and desending order.
API: - http://localhost:8080/api/products/allProducts?sortBy=price&sortOrder=desc
// {
//     "statusCode": 200,
//     "message": "Products fetched successfully",
//     "products": [
//         {
//             "id": 2,
//             "productName": "iphone",
//             "price": 101210,
//             "description": "iphone",
//             "category": "mobile",
//             "createdAt": "2023-07-05T16:32:04.000Z",
//             "updatedAt": "2023-07-05T21:09:12.000Z"
//         },
//         {
//             "id": 3,
//             "productName": "iphone",
//             "price": 101210,
//             "description": "iphone",
//             "category": "mobile",
//             "createdAt": "2023-07-05T21:06:00.000Z",
//             "updatedAt": "2023-07-05T21:06:00.000Z"
//         },
//         {
//             "id": 4,
//             "productName": "iphone",
//             "price": 101210,
//             "description": "iphone",
//             "category": "mobile",
//             "createdAt": "2023-07-05T21:06:09.000Z",
//             "updatedAt": "2023-07-05T21:06:09.000Z"
//         },
//         {
//             "id": 5,
//             "productName": "iphone",
//             "price": 101210,
//             "description": "iphone",
//             "category": "mobile",
//             "createdAt": "2023-07-05T21:58:03.000Z",
//             "updatedAt": "2023-07-05T21:58:03.000Z"
//         },
//         {
//             "id": 6,
//             "productName": "iphone",
//             "price": 101210,
//             "description": "iphone",
//             "category": "mobile",
//             "createdAt": "2023-07-05T21:58:05.000Z",
//             "updatedAt": "2023-07-05T21:58:05.000Z"
//         },
//         {
//             "id": 1,
//             "productName": "washing mashine",
//             "price": 10,
//             "description": "washing mashine",
//             "category": "electronic",
//             "createdAt": "2023-07-05T16:31:54.000Z",
//             "updatedAt": "2023-07-05T16:31:54.000Z"
//         }
//     ]
// }
//=====================================================================================================================================

// This api for filtering  product by there fields.
API: -http://localhost:8080/api/products/allProducts?category=electronics
// {
//     "statusCode": 200,
//     "message": "Products fetched successfully",
//     "products": [
//  {
//             "id": 1,
//             "productName": "washing mashine",
//             "price": 10,
//             "description": "washing mashine",
//             "category": "electronic",
//             "createdAt": "2023-07-05T16:31:54.000Z",
//             "updatedAt": "2023-07-05T16:31:54.000Z"
//         }
//     ]
// }
//=====================================================================================================================================

// This api for pagination 
http://localhost:8080/api/products/allProducts?page=1&limit=2
// {
//     "statusCode": 200,
//     "message": "Products fetched successfully",
//     "products": [
//         {
//             "id": 2,
//             "productName": "iphone",
//             "price": 101210,
//             "description": "iphone",
//             "category": "mobile",
//             "createdAt": "2023-07-05T16:32:04.000Z",
//             "updatedAt": "2023-07-05T21:09:12.000Z"
//         },
//         {
//             "id": 3,
//             "productName": "iphone",
//             "price": 101210,
//             "description": "iphone",
//             "category": "mobile",
//             "createdAt": "2023-07-05T21:06:00.000Z",
//             "updatedAt": "2023-07-05T21:06:00.000Z"
//         }
//     ]
// }















































































































































