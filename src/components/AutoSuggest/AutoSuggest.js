import languages from '../../services/autoSuggest-api'
import {Form, FormControl, Button } from "react-bootstrap";
import PropTypes from "prop-types";


function AutoSuggest(props){
    const propTypes = {
        options: PropTypes.instanceOf(Array).isRequired
    }
const onChange = e => {
    console.log('onchange')
}

    return(
        <>
        {onChange()}
        </>
    )
    
}

export default AutoSuggest;