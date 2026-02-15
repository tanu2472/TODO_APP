import express from 'express';
const app = express();
app.use(express.json());
const PORT = 5000;

const TODO_ITEMS = [
    {
        id:1,
        todoItem:"Learn Node.js",
        priority:"High",
        emoji:"📚",
        isDone:false,
        createAt:new Date().toISOString(),
    },
    {
        id:2,
        todoItem:"Buy Pen",
        priority:"medium",
        emoji:"🖊️",
        isDone:false,
        createAt:new Date().toISOString(),
    },
    {
        id:3,
        todoItem:"Go for a walk",
        priority:"low",
        emoji:" 🚶‍♂️",
        isDone:false,
        createAt:new Date().toISOString(),
    }

    
];
 app.get('/todos', (req, res) => {    
        res.json({
        data:TODO_ITEMS,
        message: "Todos fetched successfully",
    });
});


app.post('/todos', (req, res) => {  
  //req.body {todo: "New Todo Item"}
  const { todo , priority,emoji } = req.body;

  
  const todoObj = {
    id: TODO_ITEMS[TODO_ITEMS.length - 1].id + 1 ,
    todoItem:todo,
    priority:priority,
    emoji:emoji,
    isDone:false,
    createAt:new Date().toISOString()

  };

  TODO_ITEMS.push( todoObj);

    res.json({
        success: true,
        data : TODO_ITEMS,
        message: "Todo added successfully"
    });
});

app.get("/todos/:id", (req,res) => {
    const { id } = req.params;

    const todoItem = TODO_ITEMS.find((item) => {
        if (item.id ==id)
            return item;
    });
    if (todoItem){
        res.json({
            success: true,
            data:todoItem,
            message:"Todo item fetched successfully"

        });
    }else{
        res.json({
            success:false,
            message:"Todo item not found"
        })
    }
});


app.listen(PORT, () => {
    console.log("Server is running on PORT 5000");
});