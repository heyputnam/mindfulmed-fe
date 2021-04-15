
export function getDescription(props){
    return fetch(`https://api.fda.gov/drug/label.json?search=description:${props}`)
    .then( res => res.json() )
}

export default getDescription;
