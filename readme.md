## **Project Setup**

### 1. **Environment Variables**

- **MongoDB Atlas Connection**: You are using MongoDB Atlas with a free cluster. Add the following to your `.env` file:

  ```plaintext
  DB_URI='mongodb+srv://gokgokraj:fLDTVMRHnopFOMmw@sampleapimongo.kgvzo.mongodb.net/test?retryWrites=true&w=majority'
  PORT=3000
  ```

### 2. **Node Version & Installation**

- **Set Node Version**: Use Node version `22.11.0`.
- **Installation Command**:

  ```bash
  nvm install 22.11.0 && nvm use 22.11.0 && npm install
  ```

---

## **API Documentation**

### **User API**

1. **Create a User**

   - **Endpoint**: `POST /api/users`
   - **Description**: Creates a new user with details like name, email, age, and address.
   - **Request Body**:

     ```json
     {
       "name": "<user-name>",
       "email": "<user-email>"
       "age": <age>,
       "address": {
         "street": "<user-street>",
         "city": "<city>",
         "zipCode": "<pin-code>"
       }
     }
     ```
2. **Get User by ID**

   - **Endpoint**: `GET /api/users/{id}`
   - **Description**: Retrieves a user by their ID.
   - **Example**: User ID `672896fb15668820dc02a7db`
3. **Update User**

   - **Endpoint**: `PUT /api/users/{id}`
   - **Description**: Updates user information such as name, email, age, and address.
   - **Example**: User ID `672896fb15668820dc02a7db`
   - **Request Body**:

     ```json
     {
       "name": "<user-name>",
       "email": "<user-email>"
       "age": <age>,
       "address": {
         "street": "<user-street>",
         "city": "<city>",
         "zipCode": "<pin-code>"
       }
     }

     ```
4. **Delete User**

   - **Endpoint**: `DELETE /api/users/{id}`
   - **Description**: Deletes a user by their ID.
5. **Buy Product**

   - **Endpoint**: `POST /api/users/{id}/buy_product`
   - **Description**: Allows a user to purchase a product by specifying the product ID and quantity.
   - **Request Body**:

     ```json
     {
       "productId": <product-id>,
       "quantity": 1
     }
     ```
6. **Get User Purchases**

   - **Endpoint**: `GET /api/users/{id}/purchases`
   - **Description**: Lists all purchases made by a user.
   - **Responses**:
     - **200 OK**: Returns a list of user purchases.
     - **500 Internal Server Error**: If there is a server error.
     - response like
       ```
       [
           {
               "quantity": 1,
               "purchaseDate": "2024-11-04T13:37:45.112Z",
               "userId": "672896fb15668820dc02a7db",
               "userName": "gokul raj kv",
               "userEmail": "gokul.raj.com",
               "productName": "MicroSoft Xbox",
               "productDescription": "Gaming Console",
               "productPrice": 10.99
           }
       ]
       ```

---

### **Product API**

1. **Create a Product**

   - **Endpoint**: `POST /api/products`
   - **Description**: Adds a new product to the catalog with details like name, price, and description.
   - **Request Body**:

     ```json
     {
       "name": "MicroSoft Xbox",
       "price": 10.99,
       "description": "Gaming Console"
     }
     ```
2. **Get All Products**

   - **Endpoint**: `GET /api/products`
   - **Description**: Retrieves all products from the catalog.
3. **Delete Product**

   - **Endpoint**: `DELETE /api/products/{id}`
   - **Description**: Deletes a product by ID.

---
