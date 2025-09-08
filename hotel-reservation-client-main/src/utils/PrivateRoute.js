import {Route} from "react-router-dom";
import Landing from "../components/landing_page/landing";

const PrivateRoute = ({children, ...rest}) => {
    console.log("Private Route Is Working!");

    const authenticated = false;

    return(
        <Route {...rest}>{!authenticated ? <Landing /> : <Landing />}</Route>
    )
}

export default PrivateRoute;