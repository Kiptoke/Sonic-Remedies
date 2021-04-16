import "../../../css/components/admin/uploadMusic.scss";
import MusicFileForm from "./musicFileForm";

const UploadMusic = () => {
  return (
    <div className="upload-music">
      <h1>Upload a music file (.mp3)</h1>
      <MusicFileForm />
    </div>
  );
};
export default UploadMusic;
