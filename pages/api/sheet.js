import { NextResponse } from 'next/server';
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from 'google-auth-library';


const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets'
];

const jwtFromEnv = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY.replaceAll("\\n", "\n"),
    scopes: SCOPES,
});

const doc = new GoogleSpreadsheet('1LMsJhn3yeSNB5QJLxuCDyW26V2vUp67UVzkEsktM8k4', jwtFromEnv);

const writeToSheet = async (req, res) => {

    const data = req.body;

    await doc.loadInfo(); // loads document properties and worksheets

    const sheet = await doc.sheetsByIndex[0]

    await sheet.loadHeaderRow();

    try {
        await sheet.addRow({
            firstname: data.firstname,
            surname: data.surname,
            email: data.email,
            mobile: data.mobile,
            additionalPeople: data.additionalPeople,
            allergy: data.allergy,
            nonAlcohol: data.nonAlcohol,
            checkedAttendAndHotel: data.checkedAttendAndHotel,
            checkedAttendNoHotel: data.checkedAttendNoHotel,
            checkedCannotAttend: data.checkedCannotAttend,
            checkedSingleRoom: data.checkedSingleRoom,
            checkedDoubleRoom: data.checkedDoubleRoom,
            controlText: data.controlText
        })
    } catch (error) {
        console.log("An error occurred, ", error);
        
        return res.status(500).json({ 'message': 'Ett fel inträffade' });
    }


    return res.status(200).json({ 'message': 'Hello, world!' });

}

export default async function handler(req, res) {

    if (req.method === 'POST') {
        return writeToSheet(req, res);
    }

    // return res.status(200).json({ 'message': 'Hello, world!' });
}



// export const config = {
//     runtime: 'edge',
// };