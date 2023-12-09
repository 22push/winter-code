import { useParams } from "react-router";
import classes from './MedicationData.module.css';
import ItemList from './ItemList';

export default function MedicationDataID() {
    const { id } = useParams();
    const data = [
        {
            'id': '1',
            'MedicationName': 'Paracetamol',
            'Dosage': '500mg',
            'PrescriptionDetails': 'Take 1 tablet every 4 hours as needed for pain',
            'MedicationForm': 'Tablet',
            'Instructions': 'Take with food',
            'Frequency': '4 times a day',
            'Time': '8:00 AM',
            'Notification': 'On',
        },
        {
            'id': '2',
            'MedicationName': 'Cetirizine',
            'Dosage': '100mg',
            'PrescriptionDetails': 'Take 1 tablet every 8 hours as needed for pain',
            'MedicationForm': 'Tablet',
            'Instructions': 'Take with food',
            'Frequency': '4 times a day',
            'Time': '8:00 AM',
            'Notification': 'On',
        },
    ]
    const selectedMedi = data.filter((ele) => ele.id === id);
    // console.log(selectedMedi);
    return (
        <div className={classes.container}>
            <h1>Medication Data</h1>
            <div className={classes["content-container"]}>{<ItemList items={selectedMedi} />}</div>
            <div className="d-flex justify-content-between align-items-center">
                <button className={classes["btn"]}>Edit</button>
                <button className={classes["btn"]}>Delete</button>
            </div>
        </div>
    );
}