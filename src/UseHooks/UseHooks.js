import firebaseAuthentication from "../firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signOut , updateProfile ,signInWithEmailAndPassword, getIdToken  } from "firebase/auth";
import { useEffect, useState } from "react";


firebaseAuthentication()

const UseHooks = () =>{
    
    const [error, setError] = useState()
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('');
    const auth = getAuth();

    const register = (email,password,name) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user)
            newUser(name)
            saveUser(email,name)
            
        })
        .catch(error =>{
            setError(error.message)
        })
    }


    const loginUser = (email,password,navigate,location) =>{
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user)
            setError(' ')
            const destication = location?.state?.from  || "/";
            navigate(destication, { replace: true });

        })
        .catch(error =>{
            setError(error.message)
        })
        .finally(() => setLoading(false))
    }


    const newUser = (name) =>{
        updateProfile(auth.currentUser , {
            displayName: name
        })
    }

    useEffect(() =>{
        fetch(`https://evening-ridge-81485.herokuapp.com/users/${user?.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user?.email])


    useEffect(() =>{
        onAuthStateChanged(auth, user =>{
            if(user){
                getIdToken(user)
                .then(idToken => {
                    setToken(idToken)
                })
                setUser(user)
            }
            else{
                setUser({ })
            }
            setLoading(false)
        })
    },[])

    const logOut = () =>{
        setLoading(true)
        signOut(auth)
        .then(result =>{
            setUser({ })
        })
        .finally(() => setLoading(false))
    }

    const saveUser = (email,displayName) =>{
        const user = {email:email, displayName:displayName}
        fetch('https://evening-ridge-81485.herokuapp.com/users', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }


    return{
        register,
        user,
        logOut,
        error,
        loginUser,
        loading,
        admin,
        token
    }








}

export default UseHooks;