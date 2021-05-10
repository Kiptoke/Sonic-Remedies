import API from "../../../services/api-client";

const submitMusic = async (submission, file) => {
  try {
    const res = await API.post("music", submission);
    if (res) {
      if (res.error) alert(res.error);
      else {
        let formData = new FormData();
        formData.append("filename", res._id);
        formData.append("file", file);
        API.postForm("music/files", formData);
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
