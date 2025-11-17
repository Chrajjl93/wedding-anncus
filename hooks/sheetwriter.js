import { useState } from 'react';

export const useSheetWriter = () => {
    // const [firstName, setFirstName] = useState('');
    // const [blabla, setBlaBla] = useState('');

    const [success, setSuccess] = useState(null);

    const onSubmit = async (data) => {
        setSuccess(null);

        const body = JSON.stringify(data);

        // method POST + send body
        const resp = await fetch('/api/sheet', {
            body: body,
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            credentials: 'include'
        })

        console.log("resp", resp);


        // if ok
        if (resp.status === 200) {
            setSuccess(true);
        } else {
            setSuccess(false);
        }        
    }


    return {
        success,
        // firstName,
        // setFirstName,
        // blabla,
        // setBlabla,
        onSubmit
    }
}