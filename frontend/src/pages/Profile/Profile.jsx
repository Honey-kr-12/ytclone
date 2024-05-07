import './profile.css'
import { useSelector } from 'react-redux';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'

const Profile = ({getWeatherClassName, CurrentUser}) => {

  const extractOperatingSystem = (userAgent) => {
        const startIndex = userAgent.indexOf('(') + 1;
        const endIndex = userAgent.indexOf(';');
        return userAgent.substring(startIndex, endIndex).trim();
    };
    
    const extractBrowser = (userAgent) => {
        const startIndex = userAgent.indexOf('Chrome') !== -1 ? userAgent.indexOf('Chrome') : userAgent.indexOf('Safari');
        const endIndex = userAgent.indexOf('/', startIndex);
        return userAgent.substring(startIndex, endIndex).trim();
    };
 
    const formattedTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        };
        return date.toLocaleString("en-US", options);
    };

    const userProfile  = useSelector(state => state.currentUserReducer)
    const email = userProfile?.result.email;
    const history = userProfile?.result.loginHistory;
  return (
    <div className={CurrentUser ? `weather ${getWeatherClassName ()}` : 'container_Pages_App'}>
    <LeftSidebar />
    <div className="container2_Pages_App">
        <h1>Your Login History and email is {email}</h1>
       {history?.map((login) => 
        <div>
            <h4>{formattedTimestamp(login.timestamp)} on device {extractOperatingSystem(login.userAgent)} on {extractBrowser(login.userAgent)} browser of ip address {login.ipAddress} </h4>
        </div>
        )}
    </div>
</div>
  )
}

export default Profile
