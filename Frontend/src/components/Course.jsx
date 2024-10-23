import React from "react";
import Cards from "./Cards";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-20 items-center justify-center text-center ">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Were delighted to have you{" "}
            <span className="text-pink-500">HerE! :</span>
          </h1>
          <p className="mt-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            architecto neque ratione ipsum dignissimos alias quod voluptatem
            cupiditate aspernatur ipsa.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-1 rounded-md mt-4">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
