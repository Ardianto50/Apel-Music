import { Button, TextField } from "@mui/material";
import Navbar from "./assets/components/Navbar";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
