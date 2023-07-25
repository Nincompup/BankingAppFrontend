import React, { useContext, useState } from 'react'
import InputControl from "../Input";
import styles from "./signup.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { registeradmin } from '../../action/auth';
import { AuthContext } from '../../context/authcontext';

const SignupAdmin = () => {
    const navigate = useNavigate();
    const {currentUser,loginn}=useContext(AuthContext);

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
      });
    const [errorMsg, setErrorMsg] = useState(""); 
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    
    // const handleSubmission = () => {
    //     if (!values.name || !values.email || !values.pass) {
    //       setErrorMsg("Fill all fields");
    //       return;
    //     }
    //     setErrorMsg("");
    
    //     setSubmitButtonDisabled(true);
    //     createUserWithEmailAndPassword(auth, values.email, values.pass)
    //       .then(async (res) => {
    //         setSubmitButtonDisabled(false);
    //         const user = res.user;
    //         await updateProfile(user, {
    //           displayName: values.name,
    //         });
    //         navigate("/");
    //       })
    //       .catch((err) => {
    //         setSubmitButtonDisabled(false);
    //         setErrorMsg(err.message);
    //       });
    //   };

    const handleSubmission =async()=>{
        const data=await registeradmin(values,navigate);
        console.log(data);
        await loginn(data);
        console.log(currentUser)
  }
  
    

    
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>

        <InputControl
          label="Name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
          placeholder="Enter your name"
        />

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
          placeholder="Enter Password"
        />
       

<div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
        </div>

   </div>
    </div>
  )
}

export default SignupAdmin