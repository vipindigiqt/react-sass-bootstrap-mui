import * as React from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Invenotry2 from "@mui/icons-material/Inventory2";

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

        <List sx={{ border: "1px solid #ddd" }}>
          <ListItem>
            <ListItemIcon>
              <Invenotry2 />
            </ListItemIcon>
            <ListItemText primary="Sass" secondary="Dart Sass" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Invenotry2 />
            </ListItemIcon>
            <ListItemText
              primary="Bootstrap 5"
              secondary="Fully customizable using Sass + Initial Setup"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Invenotry2 />
            </ListItemIcon>
            <ListItemText
              primary="MUI 5"
              secondary="Fully Customizable Setup"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Invenotry2 />
            </ListItemIcon>
            <ListItemText primary="axios" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Invenotry2 />
            </ListItemIcon>
            <ListItemText
              primary="Prettier, ESLint, Git Hooks Configured"
              secondary="To avoid unwanted errors and performance boost."
            />
          </ListItem>
        </List>

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

        <div className="mt-5">
          <Counter />
        </div>
      </div>
    </Container>
  );
};

export default Example;
