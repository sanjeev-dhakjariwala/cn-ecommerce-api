# cn-ecommerce-api

# Node.js Ecommerce API

This is a Node.js Ecommerce API that allows you to manage products in a database. The API provides endpoints for adding, listing, deleting, and updating product quantities.

## Getting Started

To get started with this API, follow the steps below:

1. Clone this repository to your local machine
2. Install dependencies by running `npm install`
3. Start the server by running `npm start`
4. The server will be running on `http://localhost:5001`
5. The server is also deployed in 

## Endpoints

### Add Products

Adds a new product to the database.

**URL**

`POST /products/create`

**Request Body**
```
{
    "name": "Product Name",
    "quantity": 100
}
```
**Response**
```
{
    "message": "Product created successfully",
    "data": {
        "id": "1234567890",
        "name": "Product Name",
        "quantity": 100
    }
}
```
### List Products

Returns a list of all products in the database.

**URL**

`GET /products`

**Response**
```
{
    "message": "Products listed successfully",
    "data": [
        {
            "id": "1234567890",
            "name": "Product Name",
            "quantity": 100
        },
        {
            "id": "0987654321",
            "name": "Another Product",
            "quantity": 50
        }
    ]
}
```

### Delete Products

Deletes a product from the database.

**URL**

`DELETE /products/:id`

**Response**
```
{
    "message": "Product deleted successfully",
    "data": {
        "id": "1234567890",
        "name": "Product Name",
        "quantity": 100
    }
}
```
### Update Product Quantity

Updates the quantity of a product in the database.

**URL**

`POST /products/:id/update_quantity/?number=10`

**Request Parameters**

- `id`: The ID of the product to update.
- `number`: The number to add to the current quantity. Use a negative number to decrement the quantity.

**Response**
```
{
    "message": "Product quantity updated successfully",
    "data": {
        "id": "1234567890",
        "name": "Product Name",
        "quantity": 110
    }
}
```
## Error Responses

If an error occurs, the API will respond with an error message and an appropriate status code.
{
"error": "Error message"
}

## Conclusion

This Node.js Ecommerce API provides a simple way to manage products in a database. You can use it to add, list, delete, and update product quantities with ease.
