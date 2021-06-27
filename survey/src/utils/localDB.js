const localDB = {
  sets: [
    {
      questions: [
        "60d88f7590d16c3cc8c9b088",
        "60d88f8190d16c3cc8c9b089",
        "60d88f8e90d16c3cc8c9b08a",
        "60d88f9f90d16c3cc8c9b08b",
        "60d88fa790d16c3cc8c9b08c",
        "60d88fae90d16c3cc8c9b08d",
      ],
      _id: "60d88f4990d16c3cc8c9b087",
      title: "Test Set",
      music: false,
      __v: 1,
    },
    {
      questions: ["60d88ffa90d16c3cc8c9b08f", "60d8901d90d16c3cc8c9b090"],
      _id: "60d88fc590d16c3cc8c9b08e",
      title: "Test Set 2",
      music: false,
      __v: 2,
    },
  ],
  questions: {
    "60d88f7590d16c3cc8c9b088": {
      options: ["A", "B", "C", "D"],
      _id: "60d88f7590d16c3cc8c9b088",
      title: "Test Multiple Choice",
      input_type: "multiple-choice",
      config: { condQuestion: "" },
      __v: 0,
    },
    "60d88f8190d16c3cc8c9b089": {
      options: ["A", "B", "C", "D"],
      _id: "60d88f8190d16c3cc8c9b089",
      title: "Test Checkbox",
      input_type: "check-box",
      __v: 0,
    },
    "60d88f8e90d16c3cc8c9b08a": {
      options: [],
      _id: "60d88f8e90d16c3cc8c9b08a",
      title: "Test Short Answer (25)",
      input_type: "short-answer",
      __v: 0,
    },
    "60d88f9f90d16c3cc8c9b08b": {
      options: [],
      _id: "60d88f9f90d16c3cc8c9b08b",
      title: "Test Short Answer (200)",
      input_type: "short-answer",
      config: { maxLength: 200 },
      __v: 0,
    },
    "60d88fa790d16c3cc8c9b08c": {
      options: [],
      _id: "60d88fa790d16c3cc8c9b08c",
      title: "Test Color",
      input_type: "color",
      __v: 0,
    },
    "60d88fae90d16c3cc8c9b08d": {
      options: [],
      _id: "60d88fae90d16c3cc8c9b08d",
      title: "Test Likert",
      input_type: "slider",
      __v: 0,
    },
    "60d88ffa90d16c3cc8c9b08f": {
      options: ["A", "B", "C", "D"],
      _id: "60d88ffa90d16c3cc8c9b08f",
      title: "Test Conditional MC",
      input_type: "multiple-choice",
      config: { condQuestion: "Test Conditional" },
      __v: 0,
    },
    "60d8901d90d16c3cc8c9b090": {
      options: [],
      _id: "60d8901d90d16c3cc8c9b090",
      title: "Test Conditional SA (300)",
      input_type: "short-answer",
      config: { condQuestion: "Test Conditional", maxLength: 300 },
      __v: 0,
    },
  },
  "set-order": [
    {
      sets: ["60d88f4990d16c3cc8c9b087", "60d88fc590d16c3cc8c9b08e"],
      _id: "6077c3d622e3640e74f7b234",
      __v: 379,
    },
  ],
};

export default localDB;
