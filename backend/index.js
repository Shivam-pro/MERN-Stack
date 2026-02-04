import express from 'express';
import { connectToDB } from './config/db.js';
import dotenv from 'dotenv';
import notes from './data/notes.js';
import userRoutes from './routes/userRoutes.js';
import notesRouter from './routes/notesRouter.js'
import auth from './middlewares/auth.js';

const app = express();
dotenv.config();
connectToDB();
app.use(express.json())

app.get('/', (req, res) => {
  res.send("hello server!");
});

// app.get('/api/notes', (req, res) => {
//   // const note = notes.find(n => n._id === req.params.id); 
//   // res.send(note);
//   res.json(notes);
// });

app.use('/api/users', userRoutes);
app.use('/api/note', auth, notesRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})

