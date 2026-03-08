require("dotenv").config();
const express = require("express");
const AWS = require("aws-sdk");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

AWS.config.update({ region: process.env.AWS_REGION });
const dynamo = new AWS.DynamoDB.DocumentClient();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("views"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "form.html"));
});

app.post("/submit", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).send("All fields are required");
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const params = {
      TableName: process.env.TABLE_NAME,
      Item: {
        userId: Date.now().toString(),
        username: username,
        email: email,
        password: hashedPassword,
      },
    };

    await dynamo.put(params).promise();

    res.send("Signup successful! Check your email.");
  } catch (error) {
    console.error("Error storing data:", error);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
