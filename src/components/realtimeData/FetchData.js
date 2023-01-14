import React, { useEffect, useState } from "react";
import StartFirebase from "../firebaseConfig/FirebaseConfig";
import { ref, onValue } from "firebase/database";

const db = StartFirebase();
const FetchData = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const dbRef = ref(db, "Images");
    onValue(dbRef, (snapshot) => {
      var records = [];
      snapshot.forEach((childSnapShot) => {
        let keyName = childSnapShot.key;
        let data = childSnapShot.val();
        records.push({ Key: keyName, data: data });
      });
      setImages([{ images: records }]);
    });
  }, []);

  return <div></div>;
};

export default FetchData;
