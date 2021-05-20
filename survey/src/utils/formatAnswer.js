const formatAnswer = (res, ans) => {
  let formatted_ans = "";
  if (ans.length === 1) {
    //Multiple choice case
    formatted_ans = res[ans];
  } else {
    //Multiple select case
    let responses = [...res, "None of the Above"];
    for (let i = 0; i < ans.length; i++) {
      if (ans[i] === "1") formatted_ans += `${responses[i]};`;
    }
  }
  return formatted_ans;
};

export default formatAnswer;
