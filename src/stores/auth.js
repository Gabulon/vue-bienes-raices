import {defineStore} from 'pinia'
import{useFirebaseAuth} from 'vuefire'
import {signInWithEmailAndPassword} from 'firebase/auth'

export const useAuthStore  = defiineStore('Auth', () =>{
    const auth = useFirebaseAuth()
    const login = (email, password) =>{
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{

        })
        .catch(error=>{
            
        })
    }
    return{
        login
    }
})