# blog
This is a Blog api 

Requirements

1. User should be able to signup
2. User should be able to signin with Passport using JWT
3. Both Users signed in and those not signed in should be able to get posts
4. Both Users signed in and those not signed in should be able to get a post
4. Signed Users should be able to create posts
5. Signed in Users should be able to update and delete their posts
6. Posts have draft default state.
7. A user should be able to query their posts by state.

Setup

1. Install NodeJS, mongodb
2. pull this repo
3. update env with example.env
4. run npm run start

Base URL

https://altschool-bckend.herokuapp.com/

Models

a.Users: 
{

  1. first_name: {type: String, required: true},
  2. last_name: {type: String, required: true},
  3. username: {type: String, unique: true},
  4. password: {type: String, required: true},
  5. posts:[{type: Schema.Types.ObjectId, ref: 'Post'}],
  6. created_at: Date 
  
}

b. Posts: 
{

  1. title: {type: String, required: true, unique: true},
  2. description: String,
  3. author:  { type: Schema.Types.ObjectId, required: true, ref: "User" },
  4. state: {type: String,  requred: true, enum: ['draft', 'published'],  default: 'draft'},
  5. read_count: {type: Number, default: 0},
  6. reading_time: Number,
  7. tags: String,
  8. body: {type: String, required: true},
  9. timestamp: Date 
  
}

Api

Signup User
Route: /signup
Method: POST

Body:

{

  password: "c0san0stra",
  
  first_name: "john",
  
  last_name: "gotti",
  
  username: 'teflon_don",
  
}


Responses

Success

{

    message: 'Signup successful',
	
    user: {
	
        "password": "c0san0stra",
		
  		"first_name": "john",
		
  		"last_name": "gotti",
		
  		"username": 'teflon_don",
		
    }
}

Login User

Route: /login

Method: POST

Body:
{

  password: "c0san0stra",
  
  username: 'teflon_don",
  
}


Responses

Success

{

    message: 'Logged in successfully',
	
    token: 'sjlkGAGGDDhhhTREbjMJH987JvCCcCjHYrZA'
	
}


Create Post

Route: /posts

Method: POST

Header

Authorization: Bearer {token}

Body:

{

   title: God Abeg,
   
   description: Adventures of AltSchool Africa,
   
   body: My Eye Dey Red.
   
}


Responses
Success

{

  status: true,
  
  post: {
  
   title: God Abeg,
   
   description: Adventures of AltSchool Africa,
   
   body: My Eye Dey Red,
   
   author: "6367e3713d896ca37ae45438",
   
   state: "draft",
   
   read_count: 0,
   
   _id: "6368ff0eca061f8398a20f99",
   
   timestamp: "2022-11-07T12:50:22.712Z",
   
  }

Get Post

Route: /Posts/:id

Method: GET

Header

Authorization: Bearer {token}

Responses

Success

{

  "post": {
  
    "_id": "6368cda2b8d472d32c587662",
    
    "title": "God gat us",
    
    "description": "no be small thing at all",
    
    "author": {
    
      "_id": "6367e3713d896ca37ae45438",
      
      "username": "mrcholo2022"
      
    },
    
    "state": "published",
    
    "read_count": 5,
    
    "body": "my eye dey pepper me still a lot to do",
    
    "timestamp": "2022-11-07T12:47:14.230Z",
    
	}
}
    
    

Get Posts

Route: /posts

Method: GET

Header:

Authorization: Bearer {token}

Query params:

page (default: 1),

per_page (default: 20),

order_by (default: created_at),

order (options: asc | desc, default: desc),

state,

created_at,

author, 

title, 

tags,
 
 
Responses

Success

{

  "status": true,
  
  "posts": [
  
    {
    
      "_id": "6368cda2b8d472d32c587662",
      
      "title": "God gat us",
      
      "description": "no be small thing at all",
      
      "author": "6367e3713d896ca37ae45438",
      
      "state": "published",
      
      "read_count": 4,
      
      "body": "my eye dey pepper me still a lot to do",
      
      "timestamp": "2022-11-07T09:46:46.148Z",
      
    }
  ]
}


Publish Post

Route: /Posts/:id/publish

Method: POST

Header

Authorization: Bearer {token}

Responses

Success


{

  "message": "Post with id 6368ff0eca061f8398a20f99 has been published",
  
  "post": {
  
    "_id": "6368ff0eca061f8398a20f99",
    
    "title": "mrcholo2022",
    
    "description": "12345678900",
    
    "author": "6367e3713d896ca37ae45438",
    
    "state": "published",
    
    "read_count": 0,
    
    "body": "chibueze",
    
    "timestamp": "2022-11-07T12:58:57.951Z",
    
  }
  
}

Update Post

Route: /Posts/:id

Method: PUT

Header

Authorization: Bearer {token}

body:
{   
    "title": "mrcholo2022",
    
    "description": "12345678900",
    
    "body": "chibueze",
    
  }
  
}

Responses

Success

{


  message: "Post with id 636902b0ca061f8398a20fa1 updated",
  
  
  post: {
  
    title: "mrcholo2000",
    
    description: "0012345678900",
    
    author: "6367e3713d896ca37ae45438",
    
    state: "draft",
    
    read_count: 0,
    
    body: "chibuezeARINZE",
    
    _id: "636902b0ca061f8398a20fa1",
    
    timestamp: "2022-11-07T13:05:52.623Z",
 
  }
  
}




