import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId = '933451419685-joq9oulsciicc98nc0sk0bsuerbma4hf.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger/>
     </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
