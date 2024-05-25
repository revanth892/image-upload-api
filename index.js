const express = require('express');
const router=require('./routes/route.js')
const mongoose=require('mongoose')
const mongowebsite="mongodb+srv://asrevanthnaidu:MOr7x0h4LfOSUE3B@cluster0.vgknlpl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// consr MONGO_URL=
const app = express();

app.use(express.json());
app.use('/api/notes', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
mongoose.connect(mongowebsite)
.then(()=>{
    console.log("the database is connected");
})
.catch(err=>{
    console.log(err);
})
