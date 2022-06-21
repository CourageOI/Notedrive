import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomePage/HomeScreen";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegScreen from "./screens/RegisterScreen/RegScreen";
import CreateNoteScreen from "./screens/CreateNoteScreen/CreateNoteScreen";
import EditNote from "./screens/EditNote/EditNote";
import { useSelector } from "react-redux";

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const user = userInfo;
  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={!user ? <HomeScreen /> : <Navigate replace to="/mynotes" />}
        />
        <Route
          path="/login"
          element={!user ? <LoginScreen /> : <Navigate replace to="/mynotes" />}
        />
        <Route
          path="/register"
          element={!user ? <RegScreen /> : <Navigate replace to="/mynotes" />}
        />
        <Route
          path="/mynotes"
          element={user ? <MyNotes /> : <Navigate replace to="/" />}
        />
        <Route
          path="/createnote"
          element={user ? <CreateNoteScreen /> : <Navigate replace to="/" />}
        />
        <Route
          path="/note/:id"
          element={user ? <EditNote /> : <Navigate replace to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
