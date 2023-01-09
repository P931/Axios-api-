import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const useCustom = (url) => {
  const [Data, setData] = useState();
  const [isError, setisError] = useState("");
  const [Load, setLoad] = useState();

  const getapidata = async () => {
    // const url = "https://dummyjson.com/users";

    try {
      const res = await axios.get(url);
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(`your data is not get ${error}`);
      setisError(error.message);
    } finally {
      console.log("loading your data");
      <div className="load">Loading....</div>;
      setLoad(Load);
    }
  };

  // const getapifetch = async () => {
  //   try {
  //     const res = await fetch("https://dummyjson.com/users");
  //     const data = await res.json();
  //     console.log(data);
  //     setData(data);
  //   } catch (error) {
  //     console.log(error);
  //     setisError(error.message);
  //     // setisError(error);
  //   }
  // };

  useEffect(() => {
    getapidata();
    // getapifetch();
  }, []);

  return { Data, isError, Load };
};

export default useCustom;
