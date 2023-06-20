import { BrowserRouter } from "react-router-dom";
import ApiProvider from "./context/ApiProvider";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <ApiProvider>
          <AppRouter />
        </ApiProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
