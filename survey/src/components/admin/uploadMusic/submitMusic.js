import API from "../../../services/api-client";

const submitMusic = async (submission, file) => {
  try {
    const res = await API.post("music", submission);
    if (res) {
      if (res.error) alert(res.error);
      else {
        API.post("uploadMusic", { filename: res._id, file: file });
        alert("Success!");
      }
    } else {
      alert("Failure. You may need to login again.");
    }
  } catch (error) {
    console.log(error);
  }
};
export default submitMusic;
