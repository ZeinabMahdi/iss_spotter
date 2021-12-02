const randomFunction = function(fn) {
  setTimeout(() => {
    fn("data", 200);
  }, 2000);
};

const functionCallback = (data, num) => {
  console.log("my callback has been called", data, num);
};

randomFunction(functionCallback);
