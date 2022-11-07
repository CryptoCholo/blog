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
  
  firstname: "john",
  
  lastname: "gotti",
  
  username: 'teflon_don",
  
}


Responses

Success

{

    message: 'Signup successful',
	
    user: {
	
        "password": "c0san0stra",
		
  		"firstname": "john",
		
  		"lastname": "gotti",
		
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
