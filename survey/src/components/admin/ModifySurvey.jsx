import { useState, useEffect } from "react";
import API from "../../services/api-client";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import AdminSets from "./AdminSets";

import "../../css/components/admin/admin.scss";

function ModifySurvey() {
  const [setOrder, setSetOrder] = useState([]);
  const [sets, setSets] = useState([]);
  const [questions, setQuestions] = useState([]);

  //get sets
  useEffect(() => {
    const getSets = async () => {
      const serverSets = await API.getAll("sets");
      const orderData = await API.getAll("set-order");

      if (orderData.length === 0) {
        let order = [];
        for (let i = 0; i < serverSets.length; i++) {
          order.push(serverSets[i]._id);
        }
        const orderObj = {
          sets: order,
        };
        const newSetOrder = await API.post("set-order", orderObj);
        setSetOrder(newSetOrder);
        setSets(serverSets);
      } else {
        setSetOrder(orderData[0].sets);
        const orderedSets = [];
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
      const serverQuestions = await API.getAll("questions");
      setQuestions(serverQuestions);
    };
    getSets();
    getQuestions();
  }, []);

  const deleteSet = async (id) => {
    var retval = window.confirm("Delete this set?");
    if (retval === true) {
      API.deleteOne("sets", id);
      setSets(sets.filter((set) => set._id !== id));
      const curSetOrder = setOrder.filter((set) => set !== id);
      const orderObj = { sets: curSetOrder };
      const orderData = await API.patch("set-order", orderObj);
      setSetOrder(orderData.sets);
    }
  };

  const duplicateSet = async (set) => {
    addSet(set.title, set.music, set.questions);
  };

  const addSet = async (title, music, questions = []) => {
    const set = { title: title, questions: questions, music: music };
    const data = await API.post("sets", set);
    setSets([...sets, data]);

    //set order
    const curSetOrder = setOrder;
    curSetOrder.push(data._id);

    const orderObj = { sets: curSetOrder };
    const orderData = await API.patch("set-order", orderObj);
    setSetOrder(orderData.sets);
  };

  const newQuestion = async (title, type, options) => {
    const question = { title: title, input_type: type };
    if (options !== "") {
      const opts_arr = parseOptions(options);
      question.options = opts_arr;
    }
    const data = await API.post("questions", question);
    setQuestions([...questions, data]);
  };

  function parseOptions(options) {
    const arr = [];
    if (!options) return null;
    let start_of_opt = 0;
    for (let i = 0; i < options.length; i++) {
      let current = options.charAt(i);
      if (current === ";") {
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

  const changeSetOrder = async (sets) => {
    const updatedSet = {
      sets: sets,
    };
    const data = await API.patch("set-order", updatedSet);
    setSetOrder(data.sets);
    const orderedSets = [];
    for (let i = 0; i < data.sets.length; i++) {
      for (let j = 0; j < sets.length; j++) {
        if (data.sets[i] === sets[j]._id) {
          orderedSets.push(sets[j]);
          break;
        }
      }
    }
    setSets(orderedSets);
  };

  const switchMusic = async (id, music, index) => {
    API.patchOne("sets", id, { music: music });
    let temp_sets = sets;
    temp_sets[index].music = music;
    setSets(temp_sets);
  };

  const editTitle = async (id, title, index) => {
    API.patchOne("sets", id, { title: title });
    let temp_sets = sets;
    temp_sets[index].title = title;
    setSets(temp_sets);
  };

  return (
    <div className="outer-div admin-container">
      <Link to="/admin">
        <Button>Return to Admin Home</Button>
      </Link>
      <AdminSets
        sets={sets}
        allQuestions={questions}
        onDelete={deleteSet}
        onDuplicate={duplicateSet}
        onAddSet={addSet}
        onNewQuestion={newQuestion}
        onChangeOrder={changeSetOrder}
        onMusicSwitch={switchMusic}
        onEditTitle={editTitle}
      />
    </div>
  );
}

export default ModifySurvey;
