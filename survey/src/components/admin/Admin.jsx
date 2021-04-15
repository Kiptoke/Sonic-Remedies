import { useState, useEffect } from "react";


import AdminSets from "./AdminSets";

import "../../css/components/admin/admin.css";


function Admin() {
  const [setOrder, setSetOrder] = useState([]);
  const [sets, setSets] = useState([]);
  const [questions, setQuestions] = useState([]);


  //get sets
  useEffect(() => {

    const getSets = async () => {
      const serverSets = await fetchSets();
      const res = await fetch("http://localhost:5000/set-order");
      const orderData = await res.json();


      if (orderData.length === 0) {
        let order = []
        for (let i = 0; i < serverSets.length; i++) {
          order.push(serverSets[i]._id)
        }
        const orderObj = {
          sets: order
        }
        fetch("http://localhost:5000/set-order", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(orderObj),
        })
          .then((res) => {
            res.json()
          })
          .then((data) => {
            setSetOrder(data)
          })
        setSets(serverSets)
      }
      else {
        setSetOrder(orderData[0].sets)
        const orderedSets = []
        for (let i = 0; i < orderData[0].sets.length; i++) {
          for (let j = 0; j < serverSets.length; j++) {
            if (orderData[0].sets[i] === serverSets[j]._id) {
              orderedSets.push(serverSets[j]);
              break;
            }
          }
        }
        setSets(orderedSets);
      }
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
    if (retval === true) {
      await fetch(`http://localhost:5000/sets/${id}`, {
        method: "DELETE",
      });
      setSets(sets.filter((set) => set._id !== id));
      const curSetOrder = setOrder.filter((set) => set !== id)
      const orderObj = { sets: curSetOrder }
      const res = await fetch('http://localhost:5000/set-order/', {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(orderObj)
      });

      const orderData = await res.json();
      setSetOrder(orderData.sets)
    }

  };

  const duplicateSet = async (set) => {
    const dupeSet = { title: set.title, questions: set.questions }
    const res = await fetch("http://localhost:5000/sets", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dupeSet),
    });

    const data = await res.json();
    setSets([...sets, data]);

    //set order
    const curSetOrder = setOrder
    curSetOrder.push(data._id)

    const orderObj = { sets: curSetOrder }
    console.log(orderObj)
    const orderRes = await fetch('http://localhost:5000/set-order/', {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(orderObj)
    });

    const orderData = await orderRes.json();
    setSetOrder(orderData.sets)
  }

  const addSet = async (title, music) => {
    const questions = [];
    const set = { title: title, questions: questions, music: music };

    const res = await fetch("http://localhost:5000/sets", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(set),
    });

    const data = await res.json();
    setSets([...sets, data]);

    //set order
    const curSetOrder = setOrder
    curSetOrder.push(data._id)

    const orderObj = { sets: curSetOrder }
    console.log(orderObj)
    const orderRes = await fetch('http://localhost:5000/set-order/', {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(orderObj)
    });

    const orderData = await orderRes.json();
    setSetOrder(orderData.sets)
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


  const changeSetOrder = (sets) => {

    const updatedSet = {
      sets: sets,
    };

    const stringified = JSON.stringify(updatedSet);

    fetch(`http://localhost:5000/set-order`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: stringified,
    })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        setSetOrder(data.sets)
        const orderedSets = []
        for (let i = 0; i < data.sets.length; i++) {
          for (let j = 0; j < sets.length; j++) {
            if (data.sets[i] === sets[j]._id) {
              orderedSets.push(sets[j]);
              break;
            }
          }
        }
        setSets(orderedSets);
      })
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
        onOrderChanged={changeSetOrder}
      />
    </div>
  );
}

export default Admin;


