import React, { useEffect, useState } from "react";
import styles from "./Table.module.css";

export default function Table() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();

    setData(data);
    console.log(data.users);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <>
        <button>Add Person</button>
      </>
    </div>
  );
}
