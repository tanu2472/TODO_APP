import express from 'express';
const app = express();
app.use(express.json());
const PORT = 5000;

const TODO_ITEMS = [
    "Sample Todo Item",
    "Another Todo Item",
    "Yet Another Todo Item"
];
 app.get('/todos', (req, res) => {
    res.json({
        success: true,
        todos: TODO_ITEMS,
        message: "Todos fetched successfully"
    });
});

app.post('/todos', (req, res) => {  
  //req.body {todo: "New Todo Item"}
  const { todo } = req.body;
  TODO_ITEMS.push(toto);

    res.json({
        success: true,
        data : TODO_ITEMS,
        message: "Todo added successfully"
    });
});

app.listen(PORT, () => {
    console.log("Server is running on PORT 5000");
});