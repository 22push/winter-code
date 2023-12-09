import ItemList from './ItemList';
import classes from './MedicationData.module.css';
export default function MedicationData() {

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

    let content = <p style={{ textAlign: "center" }}>No Resources found.</p>;

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
        </div>
    );
}