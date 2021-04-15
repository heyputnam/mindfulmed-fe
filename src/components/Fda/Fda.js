
import {useState, useEffect} from 'react'
function Fda(){
const [quary, setQuary] = useState({
    word: '',
  })
  const [resp, setResp] = useState({
    description: ''
  })

  let data;

  function submitHandle(e){
    e.preventDefault()
  }

  function handleClick(){
  }

  let timeout = null

  function handleChange(e){
      timeout = setTimeout(function(){
      console.log(e.target.value)
      setQuary({word: e.target.value})
      console.log(quary)
    },2000)
    
  }


  function goget(){
    const url =`https://api.fda.gov/drug/label.json?search=description:${quary.word}`
    fetch(url)
    .then(res=>res.json())
    .then(res=>console.log(res))
  }

  async function getData(){
    data = await goget()
    setResp(data)
    console.log(resp)
  }

  useEffect(()=>{
    getData()
  }, [])



  return (
    <div className="Fda">
      <form onSubmit={submitHandle}>
        <input className="word" onKeyUp={handleChange}></input>
        <button type="submit" onClick={goget}>Submit</button>
        </form>
    </div>
  );
}

export default Fda;