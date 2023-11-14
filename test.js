const tracks = ['one', 'two', 'tree', 'four', 'five', 'one', 'four'];
const filterArr = ['one', 'four'];
let targetArray = [];
if (filterArr.length > 0) {
  targetArray = tracks.filter((el) => filterArr.includes(el));
} else {
  targetArray = tracks;
}
// const targetArray = tracks.filter((el) => filterArr.includes(el));
const searchValue = '';
const test = tracks.filter((el) => {
  el.includes(searchValue);
});
console.log(targetArray);
console.log(test);
