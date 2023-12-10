import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { ToLink } from '../App';
import styles from './medicineFormContainer.module.css';

const MedicineInputForm = () => {
    const navigate = useNavigate();
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

    const handleSubmit = async (e) => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') || false;
        let userID = localStorage.getItem('id') || false;
        if (isLoggedIn) {
            userID = localStorage.getItem('id');
        }
        if (userID === false || userID === null) {
            navigate('/login');
        }
        e.preventDefault();
        console.log('Medication Data:', medication);
        console.log('Reminder Data:', reminder);

        const data = {
            "name": medication.name,
            "dosage": medication.dosage,
            "summary": medication.prescriptionDetails,
            "startedAt": medication.form,
            "instruction": medication.instructions,
            "frequency": reminder.frequency,
            "userId": userID,
            "time": reminder.time,
            "notification": reminder.pushNotification,
        };
        if (data.dosage === '' || data.name === '') {
            alert("Please fill all the fields");
            return;
        }

        try {
            const res = await axios.post(`${ToLink}/medicine/${userID}`, data, {
                timeout: 30000,
            });
            console.log(res);

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
            alert("Medicine Added Successfully");
            navigate('/medicationData');
        } catch (err) {
            console.log(err);
        }
    };

    return (
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
    );
};

export default MedicineInputForm;
