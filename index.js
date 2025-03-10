// code your solution here
let obj = { year, results };
function superbowlWin(record) {
  let win = record.find((record) => record.result === "W");
  if (win) {
    return win.year;
  }
}
