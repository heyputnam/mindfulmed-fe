

function GoogleCal(){   


    const gapi = window.gapi
    const CLIENT_ID = '203158532668-patpr244rob0a0ne5i8pic2mjfd3hhjt.apps.googleusercontent.com'
    const API_KEY = 'AIzaSyDTuJ6kgrqQEs6a4mUg6XCWdyuUukmch8E';
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    var SCOPES = "https://www.googleapis.com/auth/calendar"

    const handleClick= () =>{
        gapi.load('client:auth2', () => {
            console.log('loaded client')


        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
        })
        gapi.client.load('calendar', 'v3', () => console.log('tadaa'))


        gapi.auth2.getAuthInstance().signIn()
        })
    }
    return(
    <div>
        <button onClick={handleClick}>pressme</button>

    </div>
    )
}

export default GoogleCal;


