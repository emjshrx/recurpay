import CheckoutPage from "./pages/checkout";
import RecurpayMainPage from "./pages/RecurpayMainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/merchant" element={<CheckoutPage />} />
          <Route path="/main" element={<RecurpayMainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
