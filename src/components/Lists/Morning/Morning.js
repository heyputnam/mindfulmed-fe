


function Morning(props){
    console.log(props)
    return(
        props.med.meds.map((med) =>{
            if(med.morning === true){
                return(
                    <div>{med.name}</div>
                )
            }else{
                return<div></div>
            }
        })
    )
}
export default Morning;

