import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../Auth/Firebase";

import firebase from "firebase/app";
import "firebase/auth";
const ContextAuthor = createContext();

const useAuth = () => {
    return useContext(ContextAuthor);
}

const AuthProvider = (props) => {
    const [currentUser, setCurrentUser] = useState({});

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }
    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const handleGoogleIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth()
            .signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedIn = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photoURL: photoURL,
                    success: true
                }
                return signedIn;

            })
            .catch(err => {
                console.log(err);
                console.log(err.massage);
            })
    }

    const handleFbIn = () => {
        var fbProvider = new firebase.auth.FacebookAuthProvider();
        return firebase.auth()
            .signInWithPopup(fbProvider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedIn = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photoURL: photoURL,
                    success: true
                }
                return signedIn;

            })
            .catch(err => {
                console.log(err);
                console.log(err.massage);
            })
    }





    const logout = () => {
        return auth.signOut();
    }


    const updateEmail = (email) => {
        return auth.updateEmail(email);
    }

    const updatePassword = (password) => {
        return currentUser.updatePassword(password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user)
        })
        return unsubscribe;
    }, []);

    return (
        <ContextAuthor.Provider value={{
            currentUser,
            signup,
            login,
            logout,
            updateEmail,
            updatePassword,
            handleGoogleIn,
            handleFbIn

        }}>
            {props.children}
        </ContextAuthor.Provider>
    )
}

export { ContextAuthor, AuthProvider, useAuth };


