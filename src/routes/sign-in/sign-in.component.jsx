import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import SignUpForm from '../../components/signup/signupform'

const SignIn = () =>{
    const logGoogleuser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return(
        <div>
            <h1>Sign-in Page</h1>
            <button onClick={logGoogleuser}>sign in with google popup</button>
            <SignUpForm/>
        </div>
    )
}


export default SignIn;