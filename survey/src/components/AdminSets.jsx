import React from "react";
import AdminSet from "./AdminSet";

const AdminSets = ({ sets }) => {
  return (
    <div>
      {sets.map((set) => (
        <AdminSet qid={set.id} set={set} />
      ))}
    </div>
  );
};

export default AdminSets;
