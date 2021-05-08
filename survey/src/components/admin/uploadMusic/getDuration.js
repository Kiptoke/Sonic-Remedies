import { Howl } from "howler";

const getDuration = (
  e,
  setDuration,
  setFileValidationError,
  setFileReadyToUpload,
  setFile
) => {
  if (e.target.files[0] && e.target.files[0].type === "audio/mpeg") {
    const fileObj = e.target.files[0];
    const objectURL = window.URL.createObjectURL(fileObj);
    const sound = new Howl({ src: [objectURL], format: "mp3" });
    sound.on("loaderror", () => {
      setDuration(null);
      setFileValidationError(
        "File could not be loaded. May be corrupted mp3 file."
      );
      setFileReadyToUpload(false);
    });
    sound.on("load", () => {
      setDuration(Math.trunc(sound.duration()));
      setFileValidationError("");
      setFile(fileObj);
      setFileReadyToUpload(true);
    });
  } else {
    setFileValidationError("Invalid File or No File Selected");
    setFileReadyToUpload(false);
  }
};

export default getDuration;
