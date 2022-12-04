const fs = require("fs/promises");
const path = require("path");

(async function () {
  const data = await fs.readFile(path.resolve(__dirname, "./input.txt"), {
    encoding: "utf8",
  });
  const result = data
    .split("\n")
    .reduce((acc, item, index, items) => {
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
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((total, item) => (total += item), 0);
  console.log(result);
})();
