async function fetchdata(){
const temp = await fetch('https://api.spacexdata.com/v3/capsules');
let result=await temp.json()
console.log(result)
return result
}
fetchdata()


