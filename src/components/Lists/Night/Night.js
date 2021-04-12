function Night(props){
    const nightMeds = []
    return(
        props.state.meds.map((med) =>{
            if(med.night === true){
                return(
                    <div>{med.name}</div>
                )
            }else{
                return<div></div>
            }
        })
    )
}
export default Night;


