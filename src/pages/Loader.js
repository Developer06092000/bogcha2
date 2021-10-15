import React, { useEffect, useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import { Link } from "react-router-dom";
import styles from "../css/loader.module.css";
import Location from "./Location";
export default function Loader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div>
      <div className={styles.loader}>
        <CircleLoader size={20} color={"#FF8080"} loading={loading} />
      </div>
    </div>
  );
}
