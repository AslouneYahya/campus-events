const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

// Start server
const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Frontend server is running on http://localhost:${PORT}`);
}); 