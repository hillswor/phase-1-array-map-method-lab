const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  return tutorials.map((title) => {
    return title
      .split(" ")
      .map((word) => {
        return word.replace(word[0], word[0].toUpperCase());
      })
      .join(" ");
  });
};

function map(array, callback) {
  const newArray = [];
  for (const element of array) {
    newArray.push(callback(element));
  }
  return newArray;
}

map([1, 2, 3], (num) => console.log(num * num));

const originalNumbers = [1, 2, 3, 4, 5];

const squaredNumbers = map(originalNumbers, (num) => num * num);

const oldAccounts = [
  { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
];

const newEngineers = map(oldAccounts, function (account) {
  return Object.assign({}, account, { accessLevel: "admin" });
});

const userIDs = map(newEngineers, (engineer) => engineer.userID);

const equippedEngineers = newEngineers.map((eng) => {
  return Object.assign({}, eng, { equipment: "Laptop" });
});

const skiSchool = ["aki", "guadalupe", "lei", "aalam"];

const rollCall = skiSchool.map((student) => `${student} the skier`);

console.log(skiSchool);
console.log(rollCall);

const robots = [
  { name: "Johnny 5", modes: 5, isActivated: false },
  { name: "C3PO", modes: 3, isActivated: false },
  { name: "Sonny", modes: 2.5, isActivated: false },
  { name: "Baymax", modes: 1.5, isActivated: false },
];

const activatedRobots = robots.map((robot) => {
  return Object.assign({}, robot, {
    modes: robot.modes * 2,
    isActivated: true,
  });
});

console.log(activatedRobots);
