import getMeds  from '../../services/autoSuggest-api'
import { useState, useEffect, useRef } from "react" 
//^^ useRef is for the click outside to close dropdown
// setting up state  needed for parts of search bar
function AutoSuggest(props) {
  const [meds, setMeds] = useState([]);
  const[display, setDisplay] = useState(false);
  const[options, setOptions] = useState([]);
  const[search, setSearch] = useState(''); 
  //close dropdown
  const wrapperRef = useRef(null); 


  // connects to the json data 
  //set state of meds
  async function getData(){
    const data = await getMeds();
    setMeds(data.drugs)
    console.log(meds)
  }
//set state of options 
  useEffect(()=>{
    getData();
    setOptions(meds)
  }, [''])
//set state of search 
  const setMedBar = (bar) =>{
      setSearch(bar);
      setDisplay(false);
  }


  //useEffect for event listeners 
  useEffect(() => {
      //need a return statement so it knows what to do 
      // adding and taking away list from screen based on even listener 
      document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
      }, [])
      //makes it so if there is a value in the search bar corosponding to a name in drop down, drop down will be closed 
      const handleClickOutside = (event) => {
        const {current: wrap} = wrapperRef;
        if(wrap && !wrap.contains(event.target))(
            setDisplay(false)
            )

       }

     return(
    <>
    <div ref={wrapperRef} className="flex-container flex-column pos-rel">
        <input id="auto"
        // when you click it brings the drop down up 
         onClick={() => setDisplay(!display)} 
         playholder="enter your search"
         value={search}
         //makes it possible to change the values in the search bar 
         onChange={(event)=> setSearch(event.target.value)}  
         />
        {display && (
            <div className="autoContainer">
                {/* map through options array to get individual */}
                {options
                .filter((meds) => meds.indexOf(search) > - 1 )
                .map((m, i) => {
                    return (
                    <div 
                    // enables tabs to use on dropdown 
                    tabIndex="0"
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