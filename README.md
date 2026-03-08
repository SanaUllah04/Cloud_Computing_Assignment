# AWS User Signup Form

A modern Node.js and Express application for user signup with AWS DynamoDB integration, built with the latest dependencies and best practices.

## Features

✅ Modern AWS SDK v3 (latest)  
✅ Secure password hashing with bcrypt  
✅ Email validation  
✅ Responsive UI with modern styling  
✅ Error handling and validation  
✅ Environment variable configuration  
✅ JSON API responses  

## Tech Stack

- **Node.js** with Express.js (latest versions)
- **AWS SDK v3** (@aws-sdk/client-dynamodb, @aws-sdk/lib-dynamodb)
- **Bcrypt** for password hashing
- **Dotenv** for environment configuration
- **Modern HTML/CSS/JavaScript** frontend

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
AWS_REGION=us-east-1
TABLE_NAME=user-signups
PORT=3000
```

Or copy from template:
```bash
cp .env.example .env
```

### 3. AWS Setup

Make sure your AWS credentials are configured. You can do this through:
- AWS CLI: `aws configure`
- Environment variables: `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`
- IAM roles (if running on AWS)

Create a DynamoDB table named `user-signups` with partition key `userId`.

### 4. Run the Application

```bash
npm start
```

The application will run on `http://localhost:3000`

## API Endpoints

### GET /
Returns the signup form page

### POST /submit
Accepts user signup data in JSON format

**Request body:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "secure_password"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Signup successful! Check your email."
}
```

## What Was Fixed

✅ Removed deprecated AWS SDK v2, upgraded to AWS SDK v3  
✅ Removed redundant body-parser dependency, using Express built-in middleware  
✅ Added form.html to views folder as expected by the app  
✅ Enhanced form with modern styling and client-side validation  
✅ Added email format validation  
✅ Improved error handling with proper HTTP status codes  
✅ Changed responses to JSON format for better API integration  
✅ Added timestamps to DynamoDB records  
✅ Increased bcrypt rounds to 12 (more secure)  
✅ Added PORT configuration from environment  
✅ Added error handling middleware  
✅ Created .env.example for easy setup  

## Project Structure

```
.
├── index.js              # Main Express application
├── package.json          # Dependencies (updated)
├── .env.example          # Environment variables template
├── .env                  # Environment variables (create from example)
└── views/
    └── form.html         # Signup form (moved from root)
```