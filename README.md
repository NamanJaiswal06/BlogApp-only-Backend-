#  Blog App Backend API

A RESTful backend service for a blog application that allows users to create posts, like/dislike them, and add comments. This API handles all core blog functionalities and can be integrated with any frontend.


##  Features

* Create, update, and delete blog posts
* Like and dislike posts
* Add and retrieve comments
* Fetch all posts or a single post
* Structured REST API


##  Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose



### 📄 Posts

* `GET /posts` → Get all posts
* `GET /posts/:id` → Get a single post
* `POST /posts` → Create a new post
* `PUT /posts/:id` → Update a post
* `DELETE /posts/:id` → Delete a post


###  Likes /  Dislikes

* `PUT /posts/:id/like` → Like a post
* `PUT /posts/:id/dislike` → Dislike a post


###  Comments

* `POST /posts/:id/comment` → Add a comment
* `GET /posts/:id/comments` → Get all comments for a post


##  Project Structure

blog-backend/
│── controllers/
│── models/
│── routes/
│── config/
│── server.js
```


##  Testing

You can test the API using:

* Postman
* Mongo DB Compass


##  Future Improvements

* User authentication (JWT)
* Pagination for posts
* Image upload support
* Role-based access control





This project is licensed under the MIT License.
