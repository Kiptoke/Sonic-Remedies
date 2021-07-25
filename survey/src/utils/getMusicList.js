import API from "../services/api-client";
import _ from "underscore";

const MINUTE = 60;
const DURATION_LOWER = 1.5 * MINUTE;
const DURATION_UPPER = 3 * MINUTE;
const FREQUENCY = { short: 3, mid: 2, long: 1 };
const TOTAL = FREQUENCY.short + FREQUENCY.mid + FREQUENCY.long;
const PROPORTION = {
  short: FREQUENCY.short / TOTAL,
  mid: FREQUENCY.mid / TOTAL,
  long: FREQUENCY.long / TOTAL,
};

const getMusicList = async (sets) => {
  const num_musics = sets.filter((set) => set.music).length;
  let musics = await API.getAll("music");
  // const short = musics.filter((m) => m.duration < DURATION_LOWER);
  // const mid = musics.filter(
  //   (m) => m.duration >= DURATION_LOWER && m.duration <= DURATION_UPPER
  // );
  // const long = musics.filter((m) => m.duration > DURATION_UPPER);
  // let sample = [];
  // sample = [
  //   ...sample,
  //   ..._.sample(short, Math.ceil(PROPORTION.short * num_musics)),
  // ];
  // sample = [
  //   ...sample,
  //   ..._.sample(mid, Math.ceil(PROPORTION.mid * num_musics)),
  // ];
  // sample = [
  //   ...sample,
  //   ..._.sample(long, Math.ceil(PROPORTION.long * num_musics)),
  // ];
  // while (sample.length > num_musics) {
  //   const randI = Math.floor(Math.random(sample.length) * sample.length);
  //   sample.splice(randI, 1);
  // }

  let random_sample = _.sample(musics, num_musics);
  // let random_sample = sample;
  console.log(random_sample);
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
