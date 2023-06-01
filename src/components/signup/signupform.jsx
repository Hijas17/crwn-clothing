import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
const defaultformField={
    displayname:"",
    email:'',
    password:'',
    confirmpassword:''
};


const SignUpForm =()=>{

    const [formField, setformField]= useState(defaultformField);
    const {displayname, email,password,confirmpassword}=formField;

    console.log(formField);

    const handlechange=(event)=>{
        const {name,value}=event.target;
        setformField({...formField, [name]:value})
    }


    const handleSubmit=async(event)=>{
        if(password != confirmpassword){
            alert("Passwords do not match");
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(user,{displayname});
        }
        catch(error){
            console.log('error encountered');
        }
    }



    return(
        <div>
            <h1>Sign In with your Email and Password</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input required type='text'  name="displayname" value={displayname} onChange={handlechange}></input>

                <label>Email</label>
                <input required type='email' onChange={handlechange} name="email" value={email}></input>


                <label>Password</label>
                <input required type="password" onChange={handlechange} name="password" value={password}></input>

                <label>Confirm Password</label>
                <input required type="password" onChange={handlechange} name="confirmpassword" value={confirmpassword}></input>


                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default SignUpForm;