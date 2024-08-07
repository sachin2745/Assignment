'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ShowSchools = () => {
  const router = useRouter();
  const [postArray, setPostArray] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchPostData = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/getall`)
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const sortedPosts = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setPostArray(sortedPosts);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false in case of an error
      });
  }

  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <section className="text-gray-600 body-font bg-mate_black dark:bg-primary max-w-screen-xl mx-auto">
      <div className='text-center font-Luckiest_Guy text-black dark:text-black pt-10'>
        <h1 className='text-4xl tracking-widest'>School</h1>
        <h3 className='font-normal tracking-wider text-1xl'>Add School &rsaquo; Show School</h3>
      </div>
      <div className="flex flex-wrap mt-10 mb-10">
        {loading ? (
          <div className="w-full mt-10 text-center text-3xl lg:text-5xl text-black font-Luckiest_Guy tracking-wider">
            <p>Schools Loading...</p>
          </div>
        ) : (
          postArray.map((post, index) => (
            <div key={post._id} className="xl:w-1/4 md:w-1/2 w-full p-6 sm:p-4">
              <div className="bg-white shadow-lg p-2 rounded-md capitalize">
                <img
                  className="h-56 rounded w-full object-cover mb-4 hover:scale-105 transition transform duration-500 ease-in-out"
                  src={`${process.env.NEXT_PUBLIC_API_URL}/` + post.image}
                  alt={post.name}
                  onError={(e) => {
                    e.currentTarget.src = 'image.jpg'; // Replace with the path to your default image
                    console.error('Image failed to load:', e.currentTarget.src);
                  }}
                />
                <p className="leading-relaxed text-base font-DM_Sans font-semibold">
                  {post.city}
                </p>
                <h2 className="text-lg text-gray-900 font-DM_Sans font-[1000] title-font mb-4 line-clamp-*">
                  {post.name}
                </h2>
                <div className="flex items-center justify-between flex-wrap font-Barlow_Semi_Condensed">
                  <h2 className="inline-flex items-center md:mb-2 lg:mb-0 tracking-widest text-black text-sm font-medium title-font">
                    {post.address}
                  </h2>
                  <h3 className="inline-flex items-center md:mb-2 lg:mb-0 rounded-md bg-black px-2 text-center text-sm font-medium text-white">
                    No. {index + 1}
                  </h3>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default ShowSchools;
