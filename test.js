const tracks = ["2005-06-11", "2003-06-11", "2006-06-11", "2005-06-11"];
const result = tracks.sort(function(a,b){
  return  new Date(b)- new Date(a);
});
console.log(result)
