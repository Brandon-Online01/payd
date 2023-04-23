import { Routes, Route } from "react-router-dom";

//components
import Home from "./pages/home";
import Wallet from "./pages/wallet";
import Notifications from "./pages/notifications";
import Support from "./pages/support";
import Profile from "./pages/profile";
import Settings from "./pages/settings";
import Login from "./pages/login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/support" element={<Support />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );    
}

export default App;
