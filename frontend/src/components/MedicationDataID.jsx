import { useParams } from "react-router";
import classes from './MedicationData.module.css';
import styles from './medicineFormContainer.module.css';
import ItemList from './ItemList';
import { useState, useEffect } from "react";
import axios from "axios";
import { ToLink } from "../App";
import { useNavigate } from "react-router";


export default function MedicationDataID() {
    const navigate = useNavigate();
    const [edit, setEdit] = useState(false);
    const [Loaddata, setData] = useState([]);

    const { id } = useParams();
    // const Loaddata = [
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
    //         'edit': false,
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
    //         'edit': false,
    //     },
    // ]

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
                        edit: false,
                    };
                });
                setData(newData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    // let selectedMedi = <p style={{ textAlign: "center" }}>No Data found.</p>;
    let selectedMedi = Loaddata.filter((ele) => ele.id === id);

    const editHandler = () => {
        const data = selectedMedi[0];
        setEdit(!edit);
        console.log("edit");
        setMedication({
            name: data.MedicationName,
            dosage: data.Dosage,
            prescriptionDetails: data.PrescriptionDetails,
            form: data.MedicationForm,
            instructions: data.Instructions,
        });
        setReminder({
            frequency: data.Frequency,
            time: data.Time,
            pushNotification: data.Notification,
        });
    }

    const [medication, setMedication] = useState({
        name: '',
        dosage: '',
        prescriptionDetails: '',
        form: '',
        instructions: '',
    });

    const [reminder, setReminder] = useState({
        frequency: 'daily',
        time: '',
        pushNotification: true,
    });

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        console.log(name, value);
        setMedication((prevMedication) => ({
            ...prevMedication,
            [name]: value,
        }));
    };

    const handleReminderChange = (e) => {
        const { name, value, type, checked } = e.target;
        setReminder((prevReminder) => ({
            ...prevReminder,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Medication Data:', medication);
        console.log('Reminder Data:', reminder);


        setMedication({
            name: '',
            dosage: '',
            prescriptionDetails: '',
            form: '',
            instructions: '',
        });
        setReminder({
            frequency: 'daily',
            time: '',
            pushNotification: true,
        });
        setEdit(!edit);
    };
    console.log(selectedMedi);
    return (
        <div className={classes.container}>
            <h1>Medication Data</h1>
            {!edit && <><div className={classes["content-container"]}> {<ItemList items={selectedMedi} />}</div>
                <div className="d-flex justify-content-between align-items-center">
                    <button className={classes["btn"]} onClick={editHandler}>Edit</button>
                    <button className={classes["btn"]}>Delete</button>
                </div>
            </>}
            {edit && <div>
                <div className={styles.container}>
                    <div className={styles['medicine-form-container']}>
                        {/* <h2>Medication Form</h2> */}
                        <form onSubmit={handleSubmit}>


                            <div class="input-group mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-default">Medication Name:</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="name"
                                    value={medication.name}
                                    onChange={handleInputChange} />
                            </div>
                            {/* {console.log(medication.name)} */}

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-default">Dosage:</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="dosage"
                                    value={medication.dosage}
                                    onChange={handleInputChange} />
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-default">Prescription Details:</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="prescriptionDetails"
                                    value={medication.prescriptionDetails}
                                    onChange={handleInputChange} />
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-default">Medication Form</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="form"
                                    value={medication.form}
                                    onChange={handleInputChange} />
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-default">Instructions:</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="instructions"
                                    value={medication.instructions}
                                    onChange={handleInputChange} />
                            </div>


                            <div className={styles['reminder-section']}>
                                <h3>Reminder</h3>
                                <div className={styles['form-group']}>
                                    <label>Frequency:</label>
                                    <select
                                        name="frequency"
                                        value={reminder.frequency}
                                        onChange={handleReminderChange}
                                    >
                                        <option value="">Daily</option>
                                        <option value="weekly">Weekly</option>
                                    </select>
                                </div>

                                <div className={styles['form-group']}>
                                    <label>Time:</label>
                                    <input
                                        type="time"
                                        name="time"
                                        value={reminder.time}
                                        onChange={handleReminderChange}
                                    />
                                </div>

                                <div className={styles['form-group']}>
                                    <label>
                                        Push Notification:
                                        <input
                                            type="checkbox"
                                            name="pushNotification"
                                            checked={reminder.pushNotification}
                                            onChange={handleReminderChange}
                                        />
                                    </label>
                                </div>
                            </div>

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>}
        </div>
    );
}