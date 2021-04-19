

    // const allMeds = []
    // const names = props.meds.map((med)=> {
    //     return(
    //     med.name
    //     )
    // }).join(' , ')
    // const dose = props.meds.map((med)=> {
    //     return(
    //     Array.from(med.dose).join('')
    //     )
    // })
    // console.log(dose)

    function MedList(props){

        const allm = []
        allm.push(props.meds)
        // const meddlist = map(item => {
        //     const allmed = {}
        //     allmed[item.name] = item.dose;
        //     return allmed;
        // }
        console.log(allm[0])
      
        const medicine = allm[0].flatMap((key, index) => {
            return Object.keys(key).map(el => ({
                name: el,
                value: key[el].value
            }))
        })
        return (
               medicine.flatmap((x)=>{
                   console.log(x.night)
                   return(
                       <>
                       </>
                   )
                //    for(let x in allm[0].meds){
                //    console.log(x)
                //    console.log(props[0])
    
               
                //    <ul>
                //        <li>{x.name}'medicne'</li>
                //        <li>{x.dose}</li>
                //    </ul>
                   
     })) }
               
    
    
  
    
    
        
    
    export default MedList;