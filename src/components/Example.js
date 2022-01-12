import * as React from "react";
import Button from "@mui/material/Button";

import Container from "./common/Container";
import Counter from "./Counter";
import useToggle from "../hooks/useToggle";

const Example = () => {
  const [outlined, setOutlined] = useToggle();

  return (
    <Container xl={true} className="text-center py-4">
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
            {`Customized Material UI Button (${
              outlined ? "outlined" : "contained"
            }`}
            )
          </Button>
          <small>Click to Toggle Variant</small>
        </div>

        <div className="mt-5 d-grid gap-1">
          <button className="btn btn-primary">GitHub</button>
          <small>A button from Bootstrap 5</small>
        </div>

        <div className="mt-5">
          <Counter />
        </div>
      </div>
    </Container>
  );
};

export default Example;
