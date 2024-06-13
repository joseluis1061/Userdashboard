import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from './contexts/AuthProvider';
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashboard";
import Error404 from "./pages/auth/Error404";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import TestVAK from './components/TestVAK';


const ProtectedLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-y-auto p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

ProtectedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={
            <ProtectedLayout>
              <Dashboard />
            </ProtectedLayout>
          } />
          <Route path="/testvak" element={
            <ProtectedLayout>
              <TestVAK />
            </ProtectedLayout>
          } />
          <Route path="/profile" element={
            <ProtectedLayout>
              <Profile />
            </ProtectedLayout>
          } />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
