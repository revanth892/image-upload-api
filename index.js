const express = require('express');
const router=require('./routes/route.js')
const app = express();

app.use(express.json());
app.use('/api/notes', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
