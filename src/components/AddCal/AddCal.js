function addCal(props){
  let x = 'yellow'
    var event = {
        'summary': 'Awesome Event!',
        'location': '800 Howard St., San Francisco, CA 94103',
        'description': 'Really great refreshments',
        'start': {
          'dateTime': '2020-06-28T09:00:00-07:00',
          'timeZone': 'America/Los_Angeles'
        },
        'end': {
          'dateTime': '2020-06-28T17:00:00-07:00',
          'timeZone': 'America/Los_Angeles'
        },
        'recurrence': [
          'RRULE:FREQ=DAILY;COUNT=2'
        ],
        'attendees': [
          {'email': 'lpage@example.com'},
          {'email': 'sbrin@example.com'}
        ],
        'reminders': {
          'useDefault': false,
          'overrides': [
            {'method': 'email', 'minutes': 24 * 60},
            {'method': 'popup', 'minutes': 10}
          ]
        }
      }
    return(
        <div>
            <div className="form-container">
                <form>
                    <label>Enter a title for your reminder: 
                        <input input={props.event} value={x} ></input>
                </label>
                <label>
                        <input>
                        
                        </input>
                </label>
                <label>
                        <input>
                        
                        </input>
                </label>
                <label>
                        <input>
                        
                        </input>
                </label>
                <label>
                        <input>
                        
                        </input>
                </label>
                <label>
                        <input>
                        
                        </input>
                </label>
                <label>
                        <input>
                        
                        </input>
                </label>

                </form>
            </div>
        </div>
    )
}

export default addCal;

