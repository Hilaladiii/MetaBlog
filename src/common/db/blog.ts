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

export async function getPosts() {
  try {
    const q = await query(collection(firestore, "posts"));
    const snapshot = await getDocs(q);
    const blog = await snapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    return {
      status: 200,
      message: "Success get all posts",
      data: blog,
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as FirebaseError).message,
    };
  }
}

export async function getPostById(id: string) {
  try {
    const snapshot = await getDoc(doc(firestore, "posts", id));
    const data = snapshot.data();
    return {
      status: 200,
      message: "success get product",
      data: data,
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as FirebaseError).message,
    };
  }
}
