import React from "react";
import {loginWithGoogle} from "../utils/auth";
import {firebaseAuth} from "../config/constants";
import { setAuthedUser } from "../actions/authedUser";
import { handleAddUser } from '../actions/users'
import { connect } from 'react-redux'

const firebaseAuthKey = "firebaseAuthInProgress";
const appTokenKey = "appToken";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            splashScreen: false
        };

        this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    }

    handleGoogleLogin() {
        loginWithGoogle()
            .catch(function (error) {
                alert(error);
                localStorage.removeItem(firebaseAuthKey);
            });
        localStorage.setItem(firebaseAuthKey, "1");
    }

    componentWillMount() {
        if (localStorage.getItem(appTokenKey)) {
            this.props.history.push("/app/home");
            return;
        }

        firebaseAuth().onAuthStateChanged(user => {
            if (user) {
                const { dispatch } = this.props
                dispatch(handleAddUser(user));
                localStorage.removeItem(firebaseAuthKey);
                localStorage.setItem(appTokenKey, user.uid);
                this.props.history.push("/app/home")
            }
        });
    }

    render() {
        console.log(firebaseAuthKey + "=" + localStorage.getItem(firebaseAuthKey));
        if (localStorage.getItem(firebaseAuthKey) === "1") return <SplashScreen />;
        return <LoginPage handleGoogleLogin={this.handleGoogleLogin}/>;
    }
}

export default connect()(Login)

const iconStyles = {
    color: "#ffffff"
};

const LoginPage = ({handleGoogleLogin}) => (
    <div>
        <h1>Login</h1>
        <div>
            <button onClick={handleGoogleLogin}>
                Sign in with Google
            </button>

        </div>
    </div>
);

const SplashScreen = () => (<p>Loading...</p>)
