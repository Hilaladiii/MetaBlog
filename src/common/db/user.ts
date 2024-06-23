import {
  getFirestore,
  getDocs,
  collection,
  getDoc,
  doc,
  query,
  where,
  and,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import app from "../lib/firebase";
import { UserType } from "../types/user";
import bcryptjs from "bcryptjs";
import { FirebaseError } from "firebase/app";

const firestore = getFirestore(app);

export async function signUp(data: UserType) {
  const q = query(
    collection(firestore, "users"),
    and(
      where("email", "==", data.email),
      where("username", "==", data.username),
    ),
  );
  const snapshot = await getDocs(q);
  const user = snapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data(),
  }));

  if (user.length > 0) {
    return {
      status: 500,
      message: "Email or Username Already exist!",
    };
  } else {
    try {
      data.password = await bcryptjs.hash(data.password, 10);
      await addDoc(collection(firestore, "users"), data);
      return {
        status: 201,
        message: "Sign-up success",
      };
    } catch (error) {
      return {
        status: 500,
        message: (error as FirebaseError).message,
      };
    }
  }
}

export async function signIn(data: { email: string; password: string }) {
  const q = await query(
    collection(firestore, "users"),
    where("email", "==", data.email),
  );
  const snapshot = await getDocs(q);
  const user = snapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data(),
  }));
  if (user) {
    const password = user[0].data.password;
    const isPasswordValid = await bcryptjs.compare(data.password, password);
    if (isPasswordValid) {
      return user[0].data;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
