import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/ui/layout";
import { CreateAccountForm, Landing, NoMatch, } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        {/* auth */}
         <Route path="/create-account-rider" element={<CreateAccountForm />} />

        {/* Shared layout (Navbar + Footer are inside Layout) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
        </Route>

        {/* Using path="*"" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit
          routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
