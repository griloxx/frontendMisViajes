import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import decodeJwt from '../../utils/decodeJwt';

function App() {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <div>
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
    )
}
export default App;