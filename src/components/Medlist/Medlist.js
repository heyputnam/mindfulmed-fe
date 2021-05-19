import React from 'react'
import ReactDOM from 'react-dom/index'
const Medlist = (props)=>{
let arr =[]
let obj = props.state.meds

let finalArr = obj.map(function(o){
    return [o.name, o.dose]
})
console.log(finalArr)
return(
<div>
  <h1>Medication List</h1>
 { finalArr.map((arr)=>{
   return(
   <li>{arr}</li>
   )
 })}
</div>   

)
}
    

export default Medlist;
