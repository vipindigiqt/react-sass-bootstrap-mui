import * as React from "react";
import Button from "@mui/material/Button";

import Container from "./common/Container";
import Counter from "./Counter";
import useToggle from "../hooks/useToggle";

const Example = () => {
  const [outlined, setOutlined] = useToggle();

  return (
    <Container xl={true} className="text-center py-5">
      <div className="boilerplate-info">
        <h4 className="mb-4 text-muted fw-bold fs-4">
          Available packages by default
        </h4>

        <ul className="list-group">
          <li className="list-group-item">Sass</li>
          <li className="list-group-item">
            Bootstrap 5 (Fully customizable using Sass + Initial Setup)
          </li>
          <li className="list-group-item">MUI 5 (Fully Customizable Setup)</li>
          <li className="list-group-item">axios</li>
          <li className="list-group-item">
            Prettier, ESLint, Git Hooks Configured.
          </li>
        </ul>

        <div className="mt-5 d-grid gap-1">
          <Button
            onClick={setOutlined}
            size="large"
            variant={outlined ? "outlined" : "contained"}
          >
            {`Customized Material UI Button (${
              outlined ? "outlined" : "contained"
            }`}
            )
          </Button>
          <small className="text-secondary">Click to Toggle Variant</small>
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
