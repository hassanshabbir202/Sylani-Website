import Foter from "../Footer/Foter";
import { Button } from "antd";
import "../AllCources/AllCources.css";
import AllCource from "./SampleAllCource.json";

const AllCources = () => {
  return (
    <>
      <marquee
        direction="right"
        className="my-3"
        id="all-cources"
        scrollamount="20"
      >
        We Are Providing A Lot Of Cources
      </marquee>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap -m-4">
            {AllCource.map((element) => {
              return (
                <>
                  <div
                    className="p-2 md:w-1/3"
                    style={{
                      width: "460px",
                      marginLeft: "1.5vw",
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                      borderRadius: "12px",
                      marginTop: "4vh",
                    }}
                  >
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={element.img}
                        alt="blog"
                      />
                      <div className="p-6">
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {element.text}
                        </h1>
                        <p className="leading-relaxed mb-3">
                          {element.def.slice(0, 90)}
                        </p>
                        <div className="flex items-center flex-wrap ">
                          <a href={element.readmore} target="_blank">
                            <Button type="primary mx-2">Read More</Button>
                          </a>
                          <a href={element.tutorial} target="_blank">
                            <Button type="primary mx-2">Watch Tutorials</Button>
                          </a>
                          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 mt-3">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            1.2K
                          </span>
                          <span className="text-gray-400 inline-flex items-center leading-none text-sm mt-3">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            6
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      <div className="footer">
        <Foter />
      </div>
    </>
  );
};

export default AllCources;
