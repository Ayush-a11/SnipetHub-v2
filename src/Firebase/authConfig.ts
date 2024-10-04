import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  GoogleAuthProvider, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  Auth, 
  UserCredential 
} from "firebase/auth";

class FirebaseAuthConfig {
  private app: any;
  private auth: Auth;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth();
  }

  // Login with email and password
  LoginWithEmailPassword = (email: string, password: string): Promise<string | void | Error> => {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential: UserCredential) => {
        const user = userCredential.user;
        console.log('login details', user);
        return user.uid;
      })
      .catch((error) => {
        console.error('Login error', error);
        return error;
      });
  };

  // Sign up with email and password
  SignUpWithEmailPassword = (email: string, password: string): Promise<string | void | Error> => {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential: UserCredential) => {
        const user = userCredential.user;
        console.log('signup details', user);
        return user.uid;
      })
      .catch((error) => {
        console.error('Sign up error', error);
        return error;
      });
  };

  // Sign in with Google
  signInWithGoogleAuth = (): Promise<string | void | Error> => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log('Google login details', user);
        return user.uid;
      })
      .catch((error) => {
        console.error('Google sign in error', error);
        return error;
      });
  };
}

// const authObj = new FirebaseAuthConfig();
// export default authObj;
