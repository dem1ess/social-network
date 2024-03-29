import "./App.css";
import Header from "./components/header/Header";
import {Nav} from "./components/navbar/Nav";
import {Profile} from "./components/profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/profile"
                           render={() => <Profile/>}/>
                    <Route path="/users"
                           render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
