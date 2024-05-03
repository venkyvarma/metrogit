


import { userInfo } from 'phone-email-auth';
import { useEffect, useState } from 'react';

function Loginsuccess() {
    const [state,setState] = useState({});
	useEffect(() => {
		const httpRequest = async () => {
		const response = await userInfo("12558854165779098259");
		console.log(response)
		// From response you can get verified phone number here using keys country_code and phone_no in response
		// Register User: If user corrosponding to this verified phone number does not exist in your user table then add the user in your user table here and continue to the next step. If user already exists then skip the next step.
	}
	httpRequest()
	}, [])

    return (<></>);

}

export default Loginsuccess;

