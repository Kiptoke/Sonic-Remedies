import { useState, useEffect } from "react";


import AdminSets from "./AdminSets";

import "../../css/components/admin/admin.css";


function Admin() {
  const [sets, setSets] = useState([]);
  const [questions, setQuestions] = useState([]);


  //get sets
  useEffect(() => {

    const getSets = async () => {
      const serverSets = await fetchSets();
      setSets(serverSets);
      console.log(serverSets);
    };
    const getQuestions = async () => {
      const serverQuestions = await fetchQuestions();
      setQuestions(serverQuestions);
    }
    getSets();
    getQuestions();
  }, []);



  //fetch sets
  const fetchSets = async () => {
    const res = await fetch("http://localhost:5000/sets");
    const data = await res.json();
    return data;
  };

  //fetch questions
  const fetchQuestions = async () => {
    const res = await fetch("http://localhost:5000/questions");
    const data = await res.json();

    return data;
  }

  const deleteSet = async (id) => {
    var retval = window.confirm("Delete this set?");
    if(retval === true) {
      await fetch(`http://localhost:5000/sets/${id}`, {
        method: "DELETE",
      });
      setSets(sets.filter((set) => set._id !== id));
    }
    
  };

  const duplicateSet = async (set) => {
    const dupeSet = {title: set.title, questions: set.questions}
    const res = await fetch("http://localhost:5000/sets", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dupeSet),
    });

    const data = await res.json();
    setSets([...sets, data]);
  }

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
    const question = { title: title, input_type: type }
    if (options !== "") {
      const opts_arr = parseOptions(options);
      question.options = opts_arr;
    }

    const res = await fetch("http://localhost:5000/questions", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(question),
    });
    const data = await res.json();
    setQuestions([...questions, data]);
  };

  function parseOptions(options) {
    const arr = [];
    let start_of_opt = 0;
    for (let i = 0; i < options.length; i++) {
      let current = options.charAt(i);
      if (current === ';') {
        let sub = options.substring(start_of_opt, i);
        let trimmed = sub.trim();
        arr.push(trimmed);
        start_of_opt = i + 1;
      }
    }
    let sub = options.substring(start_of_opt, options.length);
    let trimmed = sub.trim();
    if (trimmed !== "") {
      arr.push(trimmed);
    }

    return arr;
  }





  return (
    <div className="outer-div">
      <h1>Sets Currently in Database:</h1>
      <hr></hr>
      <AdminSets
        sets={sets}
        onDelete={deleteSet}
        onDuplicate={duplicateSet}
        onAddSet={addSet}
        onNewQuestion={newQuestion}
      />
    </div>
  );
}

export default Admin;


