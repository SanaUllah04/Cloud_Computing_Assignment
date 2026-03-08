require("dotenv").config();
const express = require("express");
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");
const bcrypt = require("bcrypt");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Initialize DynamoDB client (AWS SDK v3)
const client = new DynamoDBClient({ region: process.env.AWS_REGION || "us-east-1" });
const dynamoDb = DynamoDBDocumentClient.from(client);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("views"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "form.html"));
});

app.post("/submit", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    const params = {
      TableName: process.env.TABLE_NAME || "my-database",
      Item: {
        userId: Date.now().toString(),
        username: username,
        email: email,
        password: hashedPassword,
        createdAt: new Date().toISOString(),
      },
    };

    await dynamoDb.send(new PutCommand(params));

    res.json({ success: true, message: "Signup successful! Check your email." });
  } catch (error) {
    console.error("Error storing data:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
