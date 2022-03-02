import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomePage/HomeScreen";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegScreen from "./screens/RegisterScreen/RegScreen";
import CreateNoteScreen from "./screens/CreateNoteScreen/CreateNoteScreen";
import EditNote from "./screens/EditNote/EditNote";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="App">
        <Route path="/" component={HomeScreen} exact />
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/register" component={RegScreen} exact />
        <Route path="/mynotes" component={MyNotes} exact />
        <Route path="/createnote" component={CreateNoteScreen} exact />
        <Route path="/note/:id" component={EditNote} exact />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
