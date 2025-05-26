import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, googleProvider } from "../Firebase";
import { signInWithPopup, getAdditionalUserInfo } from "firebase/auth";
import { getDoc } from "firebase/firestore";

// ✅ Add this function:
export const signUp = async (email, password, extraData = {}) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    email: user.email,
    ...extraData,
  });

  return user;
};

// ✅ Already there:
export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  const user = result.user;

  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      provider: "google",
    });
  }

  return user;
};
