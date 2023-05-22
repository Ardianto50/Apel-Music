import { Button, TextField } from "@mui/material";


function App() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col gap-3 w-96">
        <TextField size="small" variant="outlined" label={"Test"} />
        <Button size="small" color="primary" variant="contained">Test</Button>
      </div>
    </div>
  );
}

export default App;
