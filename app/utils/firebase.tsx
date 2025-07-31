import { emptyList } from '@/types/consts';
import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  onSnapshot,
  or,
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
//kPx2IKUaqXS4xHG0wShQSRhrUAD3

export const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export const getLists = async (userId: string) => {
  const snapShot = await getDocs(
    query(
      collection(db, "lists"),
        or(
          where("owner", "==", userId),
          where("guests", "array-contains", userId ),
        ),
      orderBy('title', 'asc')
    )
  )

  const data: IListHeader[] = [];

  snapShot.forEach( (doc) => {
    data.push({
      id: data.length,
      uuid: doc.id,
      title: doc.data()["title"]
    });
  })
  return data;
}

export const listAdd = async(listHead:IListHeader, owner:string) => {
  const list:IList = {
    ...emptyList,
    ...listHead,
    owner: owner
  }
  return await addDoc(collection(db, "lists"), list);
}

export const listDel = async (uuid:string) => {
  return deleteDoc(doc(db, "lists", uuid));
}

export const listItemsObserve = (listId: string, myCallback: React.Dispatch<React.SetStateAction<IList>>) => {

  return onSnapshot(
    doc(db, "lists", listId),
    { includeMetadataChanges: false },
    (doc) => {
      console.log('object on firebase >> ');
      console.log(doc.data());
      myCallback({...doc.data(), uuid: doc.id} as IList)
    }
  );
}

export const listUpdate = (list:IList) => {
  return setDoc(
    doc(db, "lists", list.uuid), 
    {...list} 
  )
}

export default {}