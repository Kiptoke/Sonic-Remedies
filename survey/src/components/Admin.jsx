import { useState, useEffect } from "react";
import "../css/components/admin.css";
import AdminSets from "./AdminSets";

function Admin() {
  const [sets, setSets] = useState([]);

  //get sets
  useEffect(() => {
    const getSets = async () => {
      const serverSets = await fetchSets();
      setSets(serverSets);
    };
    getSets();
  }, []);

  //fetch sets
  const fetchSets = async () => {
    const res = await fetch("http://localhost:5000/sets");
    const data = await res.json();

    return data;
  };

  return (
    <div>
      <AdminSets sets={sets} />
    </div>
  );
}

export default Admin;
