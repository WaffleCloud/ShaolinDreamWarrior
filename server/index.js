const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3002;
const app = express();

app.get('/',(req, res) =>{
    return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
  });

  app.use('/src/style.css', express.static(path.join(__dirname,'../src/style.css')));

  app.use('/src/index.js', express.static(path.join(__dirname,'../src/index.js')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
}); 