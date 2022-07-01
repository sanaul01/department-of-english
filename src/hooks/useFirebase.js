import { useEffect, useState } from "react";
import initializeFirebase from "../Components/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, updateProfile, signOut } from "firebase/auth";

initializeFirebase();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [authError, setAuthError] = useState('');
    

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = ( email, password, name, navigate) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            
            setAuthError('');
            const newUser = { email, displayName: name};
            setUser(newUser);

            /* ===========Update profile name============ */
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {

              }).catch((error) => {
                setAuthError(error.message);
              });

            navigate('/')
        })
        .catch((error) =>{
            setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));
    };

    const loginUser =(email, password, location, navigate)=>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            const destination = location?.state?.from || '/home';
            navigate(destination);
            setAuthError('');
        })
        .catch((error)=>{
            setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));
    };


    const singInWithGoogle =(location, navigate)=>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            const user = result.user;
            const destination = location?.state?.from || '/home';
            navigate(destination);
            setAuthError('');
        })
        .catch((error)=>{
            setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));
    }

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
    },[]);

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
        authError,
        registerUser,
        singInWithGoogle,
        loginUser,
        logOut,
    }
}

export default useFirebase;