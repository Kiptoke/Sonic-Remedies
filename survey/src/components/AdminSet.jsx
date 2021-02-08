import React from "react";

import AdminQuestion from "./AdminQuestion";

const AdminSet = ({ set }) => {
  console.log(set.questions[0]);
  return (
    <div>
      {set.questions.map((question) => (
        <AdminQuestion key={question} qid={question} />
      ))}
    </div>
  );
};

export default AdminSet;
