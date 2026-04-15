import AuthPage from "./pages/AuthPage";
import LandingPage from "./pages/LandingPage";

function App() {
  const pathname =
    typeof window === "undefined" ? "/" : window.location.pathname.toLowerCase();

  if (pathname === "/auth") {
    return <AuthPage />;
  }

  return <LandingPage />;
}

export default App;
