import * as React from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";

import Container from "./common/Container";
import Counter from "./Counter";
import useToggle from "../hooks/useToggle";

import reactImage from "../assets/images/react.jpg";

const Example = () => {
  const [outlined, setOutlined] = useToggle();

  return (
    <Container xl={true} className="text-center py-5">
      <div className="boilerplate-info">
        <div className="d-flex flex-column flex-lg-row align-items-lg-center">
          <div className="me-5">
            <img src={reactImage} className="w-100 img-fluid rounded" alt="" />
          </div>

          <div>
            <h4 className="mb-4 text-dark fw-bold fs-4">
              Available packages by default
            </h4>

            <List sx={{ border: "1px solid #ddd" }}>
              <ListItem>
                <ListItemIcon>
                  <GridViewRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Sass" secondary="Dart Sass." />
              </ListItem>
              <Divider sx={{ marginY: ".5rem" }} />
              <ListItem>
                <ListItemIcon>
                  <GridViewRoundedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Bootstrap 5"
                  secondary="Fully customizable using Sass + Initial Setup."
                />
              </ListItem>
              <Divider sx={{ marginY: ".5rem" }} />
              <ListItem>
                <ListItemIcon>
                  <GridViewRoundedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="MUI 5"
                  secondary="Fully Customizable Setup."
                />
              </ListItem>
              <Divider sx={{ marginY: ".5rem" }} />
              <ListItem>
                <ListItemIcon>
                  <GridViewRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="axios" secondary="For data fetching." />
              </ListItem>
              <Divider sx={{ marginY: ".5rem" }} />
              <ListItem>
                <ListItemIcon>
                  <GridViewRoundedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="validator"
                  secondary="For different types of data validation."
                />
              </ListItem>
              <Divider sx={{ marginY: ".5rem" }} />
              <ListItem>
                <ListItemIcon>
                  <GridViewRoundedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Prettier, ESLint, Git Hooks Configured"
                  secondary="To avoid unwanted errors and performance boost."
                />
              </ListItem>
            </List>
          </div>
        </div>

        <div className="mt-5 d-flex flex-column align-items-center gap-2">
          <Button
            onClick={setOutlined}
            size="large"
            fullWidth={false}
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
