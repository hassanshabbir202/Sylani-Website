import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StartFirebase from "../firebaseConfig/FirebaseConfig";
import { ref, onValue } from "firebase/database";
import "../HeroSection/HeroCss.css";
import Video from "../video/Video";
const db = StartFirebase();

const HeroSec = () => {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);

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

  const prev = () => {
    setCount(count - 1);
    console.log(count);
    if (count === 0) {
      setCount(2);
    }
  };

  const next = () => {
    setCount(count + 1);
    if (count === 2) {
      setCount(0);
    }
  };

  return (
    <div>
      {images.map((ele) => {
        return (
          <>
            <section className="text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium" style={{color:"hsl(85deg 54% 51%)"}}>
                    Life Changing Oppurtunities
                  </h1>
                  <p className="mb-8 leading-relaxed paragraph">
                    Sylani are providing many free of cost packages Together we
                    <br /> can do something for Pakistan And can develop
                    Pakistan
                    <br /> This is a great opportunity for you to improve your
                    life <br /> Together we carry this mission forward!
                  </p>
                  <div className="flex justify-center">
                   <Link to="/cources"><button className="ml-4 inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg explore-cources">
                      Explore Cources
                    </button></Link>
                  </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-6 mr-4">
                  <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src={ele.images[count].data}
                  />
                   <div className="btn-container">
                   <button className="ml-4 inline-flex text-gray-700 border-0 py-2 px-6 focus:outline-none rounded text-lg left-arrow" onClick={prev}>
                    &#8592;
                    </button>
                    <button className="ml-4 inline-flex text-gray-700 border-0 py-2 px-6 focus:outline-none rounded text-lg right-arrow" onClick={next}>
                    &#8594;
                    </button>
                   </div>
                </div>
              </div>
            </section>
            <hr />
            <Video/>
          </>
        );
      })}
    </div>
  );
};

export default HeroSec;
