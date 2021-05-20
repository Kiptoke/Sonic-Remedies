import { saveAs } from "file-saver";

const createCsvStringifier = require("csv-writer").createObjectCsvStringifier;
const csvStringifier = createCsvStringifier({
  header: [
    { id: "userId", title: "User (ID)" },
    { id: "pieceInfo", title: "Piece Info" },
    { id: "questionTitle", title: "Question" },
    { id: "answer", title: "Answer" },
  ],
});

const sendCSV = (resps) => {
  const csvstring =
    csvStringifier.getHeaderString() + csvStringifier.stringifyRecords(resps);
  const csvdata = new Blob([csvstring]);
  saveAs(csvdata, "data.csv");
};

export default sendCSV;
