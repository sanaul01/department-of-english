import { useEffect, useState } from "react";
import initializeFirebase from "../Components/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

initializeFirebase();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false)

    const auth = getAuth();

    const registerUser = (name, email, password) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, name, email, password)
        .then((userCredential)=>{
            const user = userCredential.user;
        })
        .catch((error) =>{
            const errorCode = error.code;
            const errorMessage = error.message;
        })
        .finally(()=>setIsLoading(false));
    };

    const loginUser =(email, password)=>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            const user = userCredential.user
        })
        .catch((error)=>{
            const errorData = error.data;
            const errorMessage = error.message;
        })
        .finally(()=>setIsLoading(false));
    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        });
        return ()=>unsubscribe;
    },[])

    const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{
            // signout successfully
        })
        .catch(error =>{

        })
        .finally(()=>setIsLoading(false))
    }


    return {
        user,
        isLoading,
        registerUser,
        loginUser,
        logOut,
    }
}

export default useFirebase;