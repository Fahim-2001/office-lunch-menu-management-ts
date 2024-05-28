import "./App.css";
import { UserProvider } from "./contexts/UserContext";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <div className="app">
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </div>
  );
}

export default App;
