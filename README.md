# aws-user-signup-pipeline
Demonstrates a basic login data pipeline on AWS using EC2 (Node.js + HTML form), DynamoDB (NoSQL storage), and Lambda with SES (event-driven email). This project showcases how cloud-native applications can be built using AWS-managed services.

 ## Table of Contents

- [Project Overview] 
- [Features]  
- [Technologies Used]
- [Architecture Workflow]  
- [Project Structure]
- [Getting Started]
- [Installation & Deployment]
- [Usage]
- [Screenshots]
- [Contributing]

---

## Project Overview

This is a full-stack cloud project showcasing a Node.js backend running on an AWS EC2 instance. The application collects user data (username, email, password) via an HTML form, stores it in a DynamoDB table, and automatically sends a welcome email triggered using AWS Lambda and SES.


## Features

- User registration form hosted on EC2
- Data persistence using Amazon DynamoDB
- DynamoDB Streams to trigger Lambda on new inserts
- Automated welcome email sent via AWS SES
- Simple and scalable serverless workflow

---

## Technologies Used

- AWS EC2 (Amazon Linux 2)
- Node.js
- HTML, CSS, JavaScript (Frontend)
- Amazon DynamoDB
- AWS Lambda
- AWS Simple Email Service (SES)

---

## Architecture Workflow

1. User submits the registration form hosted on EC2.
2. Node.js backend receives and stores user data in DynamoDB.
3. DynamoDB Streams detect the new insert event.
4. Lambda function is triggered by the stream event.
5. Lambda sends a welcome email via SES to the user's email address.

---

## Project Structure

/app # Node.js backend application code
/lambda # Lambda function code triggered by DynamoDB stream
/screenshots # Screenshots for README documentation


---

## Getting Started

### Prerequisites

- AWS Account with appropriate IAM permissions for EC2, DynamoDB, Lambda, and SES
- Node.js installed (version 12.x or above recommended)
- AWS CLI configured locally (for deployment convenience)
- SES verified email address (both sender and, if in sandbox, recipient)

---

## Installation & Deployment

1. Clone the repository:
git clone https://github.com/chetan080808/cloud-login-workflow.git

cd cloud-login-workflow



2. Navigate to the `/app` directory and install dependencies:

cd app
npm install

text

3. Configure your AWS credentials via environment variables or AWS CLI.

4. Create DynamoDB Table (`mydatabase`) with the following attributes:

- Primary Key: `username` (String)

5. Launch an EC2 instance (Amazon Linux 2) and deploy the Node.js app.

6. Deploy the Lambda function from `/lambda` directory with trigger on your DynamoDB Stream.

7. Verify SES is set up and has verified sender email.

8. Start your Node.js app on EC2:

node app.js


---

## Usage

- Access the application via EC2 public IP or domain.
- Fill out and submit the user registration form.
- Upon successful data submission, a welcome email will be sent automatically.

---

## Screenshots

Here are some examples to help visualize the app and AWS setup:

![User Registration Form](Screenshots/UserForm.png.png)  
_User registration form hosted on EC2_

![DynamoDB Table](Screenshots/DynamoTable.png.png)  
_DynamoDB table view in AWS console_

![Lambda Trigger Setup](Screenshots/LambdaTrigger.png.png)  
_Lambda function triggered by DynamoDB Stream_

![Welcome Email Sample](Screenshots/WelcomeEmail.png.png)  
_Sample welcome email sent via SES_


---

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your improvements.

