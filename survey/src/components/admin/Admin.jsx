import { useState, useEffect } from "react";

import AdminSets from "./AdminSets";

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
    await fetch(`http://localhost:5000/sets/${id}`, {
      method: "DELETE",
    });
    setSets(sets.filter((set) => set._id !== id));
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
    <div>
      <AdminSets
        sets={sets}
        onDelete={deleteSet}
        onAddSet={addSet}
        onNewQuestion={newQuestion}
      />
    </div>
  );
}

export default Admin;


// function reorder(list, startIndex, endIndex) {
//     const result = list.map((list_item) => { return list_item })
//     const [removed] = result.splice(startIndex, 1);
//     result.splice(endIndex, 0, removed);

//     return result;
//   }


//   //TODO: Move to Admin instead of doing all this weird state stuff
//   const onOrderChanged = (result) => {
//     console.log(result)
//     if (!result.destination) {
//       return;
//     }
//     if (result.source.index === result.destination.index) {
//       return;
//     }

//     const newItems = reorder(
//       currentSet.questions,
//       result.source.index,
//       result.destination.index
//     );

//     const updatedSet = {
//       _id: currentSet._id,
//       questions: newItems,
//     };

//     const stringified = JSON.stringify(updatedSet);
//     //setCurrentSet(updatedSet);

//     // fetch(`http://localhost:5000/sets/${currentSet._id}`, {
//     //   method: "PATCH",
//     //   headers: {
//     //     "Content-type": "application/json",
//     //   },
//     //   body: stringified,
//     // })
//     //   .then((response) => {
//     //     if (!response.ok) throw Error(response.statusText);
//     //     return response.json();
//     //   })
//     //   .then((data) => {
//     //     setCurrentSet(data);
//     //   })

//   }
