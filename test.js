const prom = new Promise((resolve, reject) => {
  console.log("This is inside promise");
  setTimeout(() => {
    resolve("This is resolved");
  }, 1000);
});

const AsyncFunc = async () => {
  let a = await prom;
  console.log(a);
};

AsyncFunc();
