import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/ui/layout";
import { CreateAccountForm, ForgotPasswordEmailForm, ForgotPasswordPhoneForm, Landing, LoginForm, NoMatch, Onboarding, } from "./pages";

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Geist" }}>
        <Routes>

          {/* auth */}
          <Route path="/create-account-rider" element={<CreateAccountForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgot-password-phone" element={<ForgotPasswordPhoneForm />} />
          <Route path="/forgot-password-email" element={<ForgotPasswordEmailForm />} />
          <Route path="/onboarding" element={<Onboarding />} />

          {/* Shared layout (Navbar + Footer are inside Layout) */}
          <Route element={<Layout />}>
            <Route path="/" element={<Landing />} />
          </Route>

          {/* Using path="*"" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit
          routes for. */}
          <Route path="*" element={<NoMatch />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
