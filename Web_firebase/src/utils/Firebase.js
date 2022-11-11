import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '../keys/firebaseConfig';

//se conecta com aplicação
class Firebase {

    constructor(){
        //iniciando com a key (firebaseConfig) para conectar com BD
        this.app = initializeApp(firebaseConfig)
    }

    getFirestoreDb(){
        return getFirestore(this.app)
    }
}

export default Firebase;
