const express = require('express');
const app = express();
const path = require('path');



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
   
  });

app.listen(8081, () => {
    console.log('Listening on port 8081');
});
