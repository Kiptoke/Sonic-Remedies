import API from "../services/api-client";
import localDB from "./localDB";

const getAndSortSets = async (setSets, setSetOrder) => {
  let serverSets = await API.getAll("sets");
  let orderData = await API.getAll("set-order");
  if (!serverSets || !orderData) {
    serverSets = localDB["sets"];
    orderData = localDB["set-order"];
    alert("Failed to load DB");
  }

  if (orderData.length === 0) {
    let order = [];
    for (let i = 0; i < serverSets.length; i++) {
      order.push(serverSets[i]._id);
    }
    const orderObj = {
      sets: order,
    };
    const newSetOrder = await API.post("set-order", orderObj);
    if (setSets && setSetOrder) {
      setSetOrder(newSetOrder);
      setSets(serverSets);
    }
  } else {
    if (setSetOrder) setSetOrder(orderData[0].sets);
    const orderedSets = [];
    for (let i = 0; i < orderData[0].sets.length; i++) {
      for (let j = 0; j < serverSets.length; j++) {
        if (orderData[0].sets[i] === serverSets[j]._id) {
          orderedSets.push(serverSets[j]);
          break;
        }
      }
    }
    if (setSets) setSets(orderedSets);
    else {
      return orderedSets;
    }
  }
};

export default getAndSortSets;
