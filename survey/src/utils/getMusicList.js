import API from "../services/api-client";
import _ from "underscore";
const getMusicList = async (sets) => {
  let musics = await API.getAll("music");
  const num_musics = sets.filter((set) => set.music).length;
  let random_sample = _.sample(musics, num_musics);
  let i = -1;
  let music_filenames = [];
  sets.map((set) =>
    set.music
      ? music_filenames.push(random_sample[(i += 1)]._id)
      : music_filenames.push(null)
  );
  return music_filenames;
};

export default getMusicList;
