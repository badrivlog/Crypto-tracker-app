import "./App.css";
import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [currency, setCurrency] = useState("usd");
  return <Home currency={currency} setCurrency={setCurrency} />;
}

export default App;
