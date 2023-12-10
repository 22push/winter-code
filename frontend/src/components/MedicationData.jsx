import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import classes from './MedicationData.module.css';
import axios from 'axios';
import { ToLink } from '../App';
import { useNavigate } from 'react-router';


export default function MedicationData() {
    const navigate = useNavigate();
    // const data = [
    //     {
    //         'id': '1',
    //         'MedicationName': 'Paracetamol',
    //         'Dosage': '500mg',
    //         'PrescriptionDetails': 'Take 1 tablet every 4 hours as needed for pain',
    //         'MedicationForm': 'Tablet',
    //         'Instructions': 'Take with food',
    //         'Frequency': '4 times a day',
    //         'Time': '8:00 AM',
    //         'Notification': 'On',
    //         'edit': true,
    //     },
    //     {
    //         'id': '2',
    //         'MedicationName': 'Cetirizine',
    //         'Dosage': '100mg',
    //         'PrescriptionDetails': 'Take 1 tablet every 8 hours as needed for pain',
    //         'MedicationForm': 'Tablet',
    //         'Instructions': 'Take with food',
    //         'Frequency': '4 times a day',
    //         'Time': '8:00 AM',
    //         'Notification': 'On',
    //         'edit': true,
    //     },
    // ];
    const [data, setData] = useState([]);
    useEffect(() => {
        const userID = localStorage.getItem('id') || false;
        if (userID === false || userID === null) {
            navigate('/login');
        }
        const fetchData = async () => {
            try {
                const response = await axios.get(`${ToLink}/medicine/${userID}`);
                // const data = await response.json();
                const data = response.data.data.medicines;

                // console.log(response.data.data.medicines);
                const newData = data.map((item) => {
                    return {
                        id: item._id,
                        MedicationName: item.name,
                        Dosage: item.dosage,
                        PrescriptionDetails: item.summary,
                        MedicationForm: item.startedAt,
                        Instructions: item.instruction,
                        Frequency: item.frequency,
                        Time: item.time,
                        Notification: item.notification === true ? 'On' : 'Off',
                        edit: true,
                    };
                });
                setData(newData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    },);

    let content = <p style={{ textAlign: "center" }}>No Data found.</p>;

    if (data.length > 0) {
        content = (
            <ItemList
                items={data}
            />
        );
    }
    return (
        <div className={classes.container}>
            {/* <h1>Medication Data</h1> */}
            <div className={classes["content-container"]}>{content}</div>
            <button className="btn btn-primary" onClick={() => navigate('/addMedication')}>Add Medication</button>
        </div>
    );
}