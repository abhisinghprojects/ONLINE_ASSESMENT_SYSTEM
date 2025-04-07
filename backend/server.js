import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import messagesRoutes from './routes/messages.js';

dotenv.config();
const app = express();
const PORT = 4040;

app.use(express.json());
app.use(cors());

//connect to MongoDB using connection string
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log("MongoDB Connected"))
//     .catch(err => console.log("MongoDB Connection Error", err));

app.get('/message', (req, res) => {
    res.send('Hello from the server');
});

//just to verify the port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);




