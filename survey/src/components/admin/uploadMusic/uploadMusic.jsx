import "../../../css/components/admin/uploadMusic.scss";
import MusicFileForm from "./musicFileForm";

const UploadMusic = () => {
  return (
    <div className="admin-container upload-music">
      <h1>Upload a music file (.mp3)</h1>
      <MusicFileForm />
    </div>
  );
};
export default UploadMusic;
