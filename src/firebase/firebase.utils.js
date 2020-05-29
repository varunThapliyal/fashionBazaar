import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyC5ufRjAwSBfNCdATolkWDshpd1omhSEvY",
    authDomain: "fashionbazaar-db.firebaseapp.com",
    databaseURL: "https://fashionbazaar-db.firebaseio.com",
    projectId: "fashionbazaar-db",
    storageBucket: "fashionbazaar-db.appspot.com",
    messagingSenderId: "246270696603",
    appId: "1:246270696603:web:15800d3b9b4885d6b0fa3e",
    measurementId: "G-MT1L2Z6E22"
};

firebase.initializeApp(config);


export const createUserProfile=async (userAuth,...additionalData)=>{
if(!userAuth){
    return;
}
const userRef=firestore.doc(`users/${userAuth.uid}`);
const userSnapshot=await userRef.get();

if(!userSnapshot.exists){
    const {displayName,email} = userAuth;
    const createdAt = new Date();


    try{
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
    }
    catch(e){
     console.log('Error in creating User');
    }
   
}
return userRef;

}

export const firestore=firebase.firestore();
export const auth=firebase.auth();


const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;