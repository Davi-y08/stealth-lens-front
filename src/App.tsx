import AuthPage from "./pages/AuthPage";
import LandingPage from "./pages/LandingPage";
import type { AuthTab } from "./components/auth/AuthCard";

function App() {
  const pathname =
    typeof window === "undefined" ? "/" : window.location.pathname.toLowerCase();

  const authRoutes: Record<string, AuthTab> = {
    "/auth": "login",
    "/login": "login",
    "/signup": "signup",
  };

  const initialAuthTab = authRoutes[pathname];

  if (initialAuthTab) {
    return <AuthPage initialTab={initialAuthTab} />;
  }

  return <LandingPage />;
}

export default App;
