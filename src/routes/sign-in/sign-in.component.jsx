import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";


const SignIn = () =>{
    const logGoogleuser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return(
        <div>
            <h1>Sign-in Page</h1>
            <button onClick={logGoogleuser}>sing in with google popup</button>
        </div>
    )
}


export default SignIn;