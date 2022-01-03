import Button from "@mui/material/Button";

const App = () => {
  return (
    <div className="App">
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
            <Button variant="contained">Checkout the Source on GitHub</Button>
            <small>A button from MUI</small>
          </div>

          <div className="mt-5 d-grid gap-1">
            <button className="btn btn-primary">GitHub</button>
            <small>A button from Bootstrap 5</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
