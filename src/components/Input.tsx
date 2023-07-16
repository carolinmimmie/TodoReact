import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./input.css";
interface IInput {
  addTodo: () => void;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}
const Input = ({ addTodo, setInput }: IInput) => {
  return (
    <div className="input">
      <TextField
        id="outlined-basic"
        label="Att göra"
        variant="outlined"
        onChange={(event) => setInput(event.target.value)}
      />

      <Button onClick={addTodo} variant="contained">
        Lägg till
      </Button>
    </div>
  );
};
export default Input;
