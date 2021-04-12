function Morning(props){
    const nightMeds = []
    return(
        props.state.meds.map((med) =>{
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

