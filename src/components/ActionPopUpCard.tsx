import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Navbar';
import Footer from './Footer';

export default function ActionPopUpCart() {
  const [data, setData] = useState<any>();
  const [imdbData, setIMDBData] = useState<any>();
  const location = useLocation();

  // ---Fetch data---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '1fc11d78';

        // Check if data and data.imdbID exist before making the request
        if (data && data.imdbID) {
          const response = await axios.get(
            `https://www.omdbapi.com/?i=${data.imdbID}&apikey=${apiKey}`
          );

          setIMDBData(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if (location.state) {
      // Access the state passed through the Link
      setData(location.state);
    }

    fetchData();
  }, [data, location.state]);

  // ---Loading page---
  if (!imdbData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-slate-100 h-[90%]">
      <Navbar />
      {/* Body section */}
      <div className="body_Action w-auto mx-12   h-auto  sm:mx-5 ">
        {/* **** TITLE ***** */}
        <div className="body_title  flex gap-x-1  mt-16 sm:flex-wrap  ">
          <img
            src={imdbData.Poster}
            alt=""
            className=" w-60 h-64 lg:min-w-60 mr-2"
          />
          <div className="title_Action ml-4 sm:ml-0 ">
            <h1 className="font-bold text-4xl my-5 ">{imdbData.Title}</h1>
            <p className="text-xl">
              {imdbData.Year}/ {imdbData.Genre}
            </p>
          </div>
        </div>
        {/*  ***** TABLE **** */}
        <div className="mt-16">
          <div className="title flex ">
            <h1 className="mr-16 font-bold">Title</h1>
            <h5>{imdbData.Title}</h5>
          </div>
          <hr className="border-b-[1px] border-gray-300 my-5" />
          <div className="title flex">
            <h1 className="mr-[4.2rem] font-bold">Year</h1>
            <h5>{imdbData.Year}</h5>
          </div>
          <hr className="border-b-[1px] border-gray-300 my-5" />
          <div className="title flex">
            <h1 className="mr-14 font-bold">Genre</h1>
            <h5>{imdbData.Genre}</h5>
          </div>
          <hr className="border-b-[1px] border-gray-300 my-5" />
          <div className="title flex">
            <h1 className="mr-[72px] font-bold">Plot</h1>
            <h5>{imdbData.Plot}</h5>
          </div>
          <hr className="border-b-[1px] border-gray-300 my-5" />
          <div className="title flex">
            <h1 className="mr-16 font-bold">Type</h1>
            <h5>{imdbData.Type}</h5>
          </div>
          <hr className="border-b-[1px] border-gray-300 my-5" />
          <div className="title flex mb-12">
            <h1 className="mr-8 font-bold">Released</h1>
            <h5>{imdbData.Released}</h5>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
