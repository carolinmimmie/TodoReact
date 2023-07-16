import DeleteIcon from "@mui/icons-material/Delete";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import "./todos.css";
import Todo from "./todoClass";
interface ITodos {
  todo: Todo[];
  deleteTodo: (id: number) => void;
  statusTodo: (id: number) => void;
}
const Todos = ({ todo, deleteTodo, statusTodo }: ITodos) => {
  return (
    <div className="list">
      {todo.map((x) => (
        <List key={x.id} className="todo">
          <ListItem
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTodo(x.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              style={{ textDecoration: x.completed ? "line-through" : "none" }}
              onClick={() => statusTodo(x.id)}
              primary={x.todo}
            />
          </ListItem>
        </List>
      ))}
    </div>
  );
};

export default Todos;
