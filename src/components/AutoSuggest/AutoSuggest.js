import{ getMeds } from "../../services/autoSuggest-api"
import { useState, useEffect } from "react" 


function AutoSuggest(props) {
  const [meds, setMeds] = useState([]);
  const[display, setDisplay] = useState(false);
  const[options, setOptions] = useState([]);
  const[search, setSearch] = useState(''); 

  async function getData(){
    const data = await getMeds();
    setMeds(data.drugs)
    console.log(meds)
  }

  useEffect(()=>{
    getData();
    setOptions(meds)
  }, [''])

  const setMedBar = (bar) =>{
      setSearch(bar);
      setDisplay(false);
  }
   
     return(
    <>
    <div className="flex-container flex-column pos-rel">
        <input id="auto"
         onClick={() => setDisplay(!display)} 
         playholder="enter your search"
         value={search}>    
         </input>
        {display && (
            <div className="autoContainer">
                {options.map((m, i) => {
                    return (
                    <div 
                    onClick={()=> setMedBar(m)}
                    className="options"
                     key={i}
                     >
                    <span>{m}</span>
                      </div>
                    )}
                )}
                </div>
        )}
    </div>
    </>
     )
}

export default AutoSuggest;