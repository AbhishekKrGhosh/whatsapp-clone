import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const clientId = '933451419685-joq9oulsciicc98nc0sk0bsuerbma4hf.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
     <Messenger/>
    </GoogleOAuthProvider>
  );
}

export default App;
