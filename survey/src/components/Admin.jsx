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

  const deleteSet = async (id) => {
    await fetch(`http://localhost:5000/sets/${id}`, {
      method: "DELETE",
    });
    setSets(sets.filter((set) => set.id !== id));
  };

  const addSet = async (title) => {
    const questions = [];
    const set = { title: title, questions: questions };

    const res = await fetch("http://localhost:5000/sets", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(set),
    });

    const data = await res.json();
    setSets([...sets, data]);
  };

  const newQuestion = async (title, type, options) => {
    console.log("yo angelo");
  };

  return (
    <div>
      <AdminSets
        sets={sets}
        onDelete={deleteSet}
        onAddSet={addSet}
        onAddQuestion={newQuestion}
      />
    </div>
  );
}

export default Admin;
