

function Medlist(props){
let obj = props.state.meds
console.log(obj)
var arr = [];
obj.map((o)=>{
console.log(o)
for(var name in o)
 arr.push(o[name])
 console.log(arr)
})
return(
<div></div>   

)
}
    

export default Medlist;