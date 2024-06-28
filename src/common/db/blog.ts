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
  DocumentData,
  deleteDoc,
  orderBy,
  limit,
  FirestoreError,
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
    const date = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const formattedDate = `${monthNames[date.getMonth()]} ${String(date.getDate()).padStart(2, "0")},${date.getFullYear()}`;

    if (fileUrl) {
      const blogData = {
        title: data.title,
        content: data.content,
        image: fileUrl,
        author: data.author,
        category: data.category,
        createdAt: formattedDate,
        views: 0,
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

export async function getData(collectionName: string) {
  try {
    const q = await query(collection(firestore, collectionName));
    const snapshot = await getDocs(q);
    const blog = await snapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    return {
      status: 200,
      message: `Success get all ${collectionName}`,
      data: blog,
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as FirebaseError).message,
    };
  }
}

export async function getDataById(collectionName: string, id: string) {
  try {
    const documentRef = doc(firestore, collectionName, id);
    const snapshot = await getDoc(documentRef);

    if (!snapshot.exists()) {
      return {
        status: 404,
        message: `Document with id ${id} not found in ${collectionName} collection`,
      };
    }

    const data = snapshot.data();
    const updatedData = {
      ...data,
      views: (data.views || 0) + 1,
    };

    await updateDoc(documentRef, { views: updatedData.views });

    return {
      status: 200,
      message: `Success getting ${collectionName} by id`,
      data: updatedData,
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as FirebaseError).message,
    };
  }
}

export async function getSpesificData({
  collectionName,
  field,
  operator,
  queryValue,
}: {
  collectionName: string;
  field: string;
  queryValue: string;
  operator: "==" | "!=" | "<" | "<=" | ">" | ">=" | "in" | "not-in";
}) {
  try {
    const q = query(
      collection(firestore, collectionName),
      where(field, operator, queryValue),
    );
    const querySnapshot = await getDocs(q);

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    if (data.length <= 0) {
      return {
        status: 404,
        data: [],
        message: "your post is empty",
      };
    }
    return {
      status: 200,
      data: data,
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as FirebaseError).message,
    };
  }
}

export async function getDataLimit({
  collectionName,
  limitValue,
  orderByField,
}: {
  collectionName: string;
  limitValue: number;
  orderByField: string;
}) {
  try {
    const q = await query(
      collection(firestore, collectionName),
      limit(limitValue),
      orderBy(orderByField, "desc"),
    );

    const snapshoot = await getDocs(q);
    const data = await snapshoot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    return {
      status: 200,
      data: data,
      message: "success get data",
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as FirebaseError).message,
    };
  }
}

export async function deletePost(id: string) {
  try {
    const parsedId = JSON.parse(id).id;
    await deleteDoc(doc(firestore, "posts", parsedId));
    return {
      status: 200,
      message: "success delete post",
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as FirestoreError).message,
    };
  }
}
