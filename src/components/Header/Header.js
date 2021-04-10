import{ login, logout } from '../../services/firebase'

const Header = (props) => (
    <header>
        <h1>MindfulMed</h1>
        <ul>
            {
                props.user ? 
                <>
                <li>Welcome, {props.user.displayName}</li>
                <li><img src={props.user.photoURL} ></img></li>
                <li onClick={logout}Logout></li>
                </>
                :
                <li onClick={login}></li>
            }
            <li></li>
            <li onClick={logout}>Logout</li>
            <li onClick={login}>Login</li>
        </ul>
    </header>
)

export default Header;