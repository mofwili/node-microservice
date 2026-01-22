const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Simple endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Argo CD Demo Microservice!' });
});

// Get environment info
app.get('/api/info', (req, res) => {
  res.json({
    service: 'node-microservice',
    version: process.env.VERSION || '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

app.listen(port, () => {
  console.log(`Microservice running on port ${port}`);
});
