import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const addCount = () => {
    setCount((count) => count + 1);
  };

  const substractCount = () => {
    count >= 1 && setCount((count) => count - 1);
  };

  return (
    <>
      <p className="text-secondary display-1 fw-bold">{count}</p>
      <ButtonGroup variant="outlined" size="large">
        <Button startIcon={<AddIcon />} onClick={addCount}>
          Add
        </Button>
        <Button
          startIcon={<RemoveIcon />}
          disabled={count === 0}
          onClick={substractCount}
        >
          Substract
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Counter;
