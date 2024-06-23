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
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  getBlob,
} from "firebase/storage";
import app, { storage } from "../lib/firebase";
import { BlogType } from "../types/blog";
import { FirebaseError } from "firebase/app";

const firestore = getFirestore(app);

export async function createPost(data: BlogType) {
  try {
    const fileRef = ref(storage, `files/${data.image.name}`);
    console.log(fileRef);
    const uploadTask = uploadBytesResumable(fileRef, data.image);
    await new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          reject(error);
        },
        () => {
          resolve(uploadTask.snapshot.ref);
        },
      );
    });
    const fileUrl = await getDownloadURL(fileRef);
    if (fileUrl) {
      const blogData = {
        title: data.title,
        content: data.content,
        image: fileUrl,
        author: data.author,
      };
      await addDoc(collection(firestore, "posts"), blogData);
      return {
        status: 201,
        message: "Create post successfully",
      };
    } else {
      return {
        status: 400,
        message: "Create post failed",
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: (error as FirebaseError).message,
    };
  }
}
