function Afternoon(props){
    const nightMeds = []
    return(
        props.state.meds.map((med) =>{
            if(med.afternoon === true){
                return(
                    <div>{med.name}</div>
                )
            }else{
                return<div></div>
            }
        })
    )
}
export default Afternoon;

