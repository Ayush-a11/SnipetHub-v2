"use client"
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { BaseUri } from '../CommonUtility/ApiTemplate/Config.js';
import ApiHook from '../CommonUtility/ApiTemplate/useApiHook.js';
import Loader from '../CommonUtility/Loader.jsx';

function InfiniteScroll({ devMode:string }) {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const RequestUrl = `${BaseUri}/tv/top_rated?page=${page}`;
  const Body = "";
  const Method = 'Get';
  const [data, setData] = useState([]);
  const sentinelRef = useRef(null);
  const temp = ApiHook(Method, RequestUrl, Body, page);
  const [cardLoaded, setCardLoaded] = useState({});

  useEffect(() => {
    if (temp.results) {
      const newCardLoaded = temp.results.reduce((acc, item) => {
        acc[item.id] = false;
        return acc;
      }, {});
      setCardLoaded((prev) => ({ ...prev, ...newCardLoaded }));
      setData((prev) => [...prev, ...temp.results]);
      setLoading(false);
    }
  }, [temp]);

  // Debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleObserver = useCallback(debounce((entries) => {
    if (entries[0].isIntersecting && !loading) {
      setLoading(true);
      setPage((page) => page + 1);
    }
  }, 200), [loading]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: document.querySelector('.observe'),
      rootMargin: '0px',
      threshold: 0.1,
    });

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [handleObserver]);

  const handleImageLoad = (id) => {
    setCardLoaded((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="relative w-11/12 m-auto rounded-xl ">
      <h1 className="text-textColor text-4xl border-accent p-1">Infinite Scroll + Lazy Loading</h1>
      {devMode &&
        <div className="flex justify-end bg-accent text-textColor p-2 transition-transform duration-300">
          <button className={`relative z-10 ${currentTab === 'Snip' ? 'border-b-2 border-purple-500' : ''}`} onClick={() => setCurrentTab('Snip')}>Snippet {'</>'}</button>
        </div>
      }
      <div className="observe grid grid-cols-4 h-screen overflow-auto border-2 border-accent">
        <div className="absolute z-50 top-1/2 rounded-full left-1/2 bg-accent">
          {loading && <Loader />}
        </div>
        {data.map((item) => (
          <div key={item?.id}>
            <div className={`card w-44 h-60 flex flex-col items-center bg-opacity-90 mt-10 mx-auto bg-accent shadow-xl hover:scale-125 transition-transform duration-300`}>
              <h3 className="bg-black bg-opacity-80 px-2 relative top-5 left-7 text-purple-500">{item.vote_average} Rating</h3>
              {!cardLoaded[item.id] && <Loader />} {/* Show loader while image is loading */}
              <img
                className={`bg-cover size-40 ${cardLoaded[item.id] ? 'block' : 'hidden'}`}
                src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
                onLoad={() => handleImageLoad(item.id)}
                alt={item?.original_name}
              />
              <h1 className="text-textColor">{item?.original_name}</h1>
            </div>
          </div>
        ))}
        <div ref={sentinelRef} className="h-10 bg-transparent"></div>
      </div>
    </div>
  );
}

export default InfiniteScroll;
