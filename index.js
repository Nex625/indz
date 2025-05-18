const express = require('express');
const app = express();
app.use(express.json());

const tasks = [];

app.get('/tasks', (req, res) => res.json(tasks));
app.post('/tasks', (req, res) => {
  tasks.push(req.body);
  res.status(201).send('Task added');
});
app.delete('/tasks', (req, res) => {
  tasks.length = 0;
  res.send('All tasks cleared');
});
app.get('/health', (req, res) => res.send('OK'));

app.listen(3000, () => console.log('Server running on port 3000'));
