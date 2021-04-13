
export function getMeds(){
    return fetch('https://raw.githubusercontent.com/heyputnam/corpora/master/data/medicine/drugs.json')
    .then( res => res.json() )
}

export default getMeds;




