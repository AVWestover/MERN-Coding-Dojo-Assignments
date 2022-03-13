const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());                           /* This is new and allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true }));   /* This is new and allows JSON Objects with strings and arrays*/
require('./config/mongoose.config');    /* This is new */
require('./routes/product.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

