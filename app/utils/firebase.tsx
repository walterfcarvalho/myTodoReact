import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  where
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCp21aNjs1Vsb34F7WBi-cDsLyU25V4EzU",
  authDomain: "listadecompras-a689c.firebaseapp.com",
  projectId: "listadecompras-a689c",
  storageBucket: "listadecompras-a689c.appspot.com",
  messagingSenderId: "975403012912",
  appId: "1:975403012912:web:f382b3f6a08dbc9301eef5",
  measurementId: "G-D6D4Q3PM6Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const list = async (userId: string = "kPx2IKUaqXS4xHG0wShQSRhrUAD3") => {
  const snapShot = await getDocs(
    query(
      collection(db, "lists"),
      where("owner", "==", userId),
      orderBy('title', 'asc')
    )
  )

  const data: IListHeader[] = [];

  snapShot.forEach(doc => {
    data.push({
      id: doc.id,
      title: doc.data()["title"]
    });
  })
  return data;
}

export const listAdd = async( list:IList) => {
  return await addDoc(collection(db, "lists"), list);
}

export  const listObserve = (listId: string, myCallback: React.Dispatch<React.SetStateAction<IList>>) => {

  return onSnapshot(
    doc(db, "lists", listId),
    { includeMetadataChanges: false },
    (doc) => {
      console.log('object on firebase >> ');
      console.log(doc.data());
      myCallback({...doc.data(), id: doc.id} as IList)
    }
  );

}

export const listUpdate = (list:IList) => {
  return setDoc(
    doc(db, "lists", list.id), 
    {...list} 
  )
}



export default {}