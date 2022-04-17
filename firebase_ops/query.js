// Import the functions you need from the SDKs you need
import { v4 as uuidv4 } from 'uuid'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL7EyPPi5adNXO9G15PjJMzvHGkCImqfk",
  authDomain: "food-redemption.firebaseapp.com",
  projectId: "food-redemption",
  storageBucket: "food-redemption.appspot.com",
  messagingSenderId: "1036202884953",
  appId: "1:1036202884953:web:31b1c5fc66efc39c141648",
  measurementId: "G-508LN6Z68Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const GetAllFood = async () => {
    const res = await getDocs(collection(db, "food"));
    return res;
};

export const AddFields = async() => {
    const data = {
        date_added: '04/16/2022',
        dietary_restrictions: '',
        img_url: '',
        name: '',
        owner: '',
        owner_id: '',
        quantity_available: '',
        quantity_claimed: ''
    }
    for (let i = 0; i < 20; i++) {
        await setDoc(doc(db, "food", uuidv4().toString()), data);
    }
}