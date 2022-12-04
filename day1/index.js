const fs = require("fs/promises");
const path = require("path");

(async function () {
  const data = await fs.readFile(path.resolve(__dirname, "./input.txt"), {
    encoding: "utf8",
  });
  const max = Math.max(
    ...data.split("\n").reduce((acc, item, index, items) => {
      if (!item) return acc;
      if (index === 0 || (acc.length && !items[index - 1])) {
        acc.push(parseInt(item, 10));
        return acc;
      }
      if (acc.length && items[index - 1]) {
        acc[acc.length ? acc.length - 1 : 0] += parseInt(item, 10);
        return acc;
      }
      return acc;
    }, [])
  );
  console.log(max);
})();
