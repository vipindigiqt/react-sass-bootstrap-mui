import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import useToggle from "../hooks/useToggle";

const Example = () => {
  const [outlined, setOutlined] = useToggle();
  const [count, setCount] = React.useState(0);

  const addCount = () => {
    setCount((count) => count + 1);
  };

  const substractCount = () => {
    count >= 1 && setCount((count) => count - 1);
  };

  return (
    <div className="container-lg text-center py-4">
      <h1 className="mb-5">Hello World</h1>

      <div className="boilerplate-info">
        <h4 className="mb-4 text-muted">Available packages by default</h4>

        <ul className="list-group">
          <li className="list-group-item">Sass (Dart Sass)</li>
          <li className="list-group-item">
            Bootstrap 5 (Fully customizable using Sass + Setup)
          </li>
          <li className="list-group-item">MUI (Fully Customizable Setup)</li>
          <li className="list-group-item">Prettier, ESLint, Git Hooks</li>
        </ul>

        <div className="mt-5 d-grid gap-1">
          <Button
            onClick={setOutlined}
            variant={outlined ? "outlined" : "contained"}
          >
            {`Customized Material UI Button ${
              outlined ? "(outlined)" : "(contained)"
            }`}
          </Button>
          <small>Click to Toggle Variant</small>
        </div>

        <div className="mt-5 d-grid gap-1">
          <button className="btn btn-primary">GitHub</button>
          <small>A button from Bootstrap 5</small>
        </div>

        <div className="mt-5">
          <p className="text-secondary display-3 fw-bold">{count}</p>
          <ButtonGroup variant="outlined">
            <Button onClick={addCount}>Add</Button>
            <Button disabled={count === 0} onClick={substractCount}>
              Substract
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default Example;
