import React, { useState } from 'react';
import styles from './medicineFormContainer.module.css';

const MedicineInputForm = (props) => {
    const [medication, setMedication] = useState({
        name: props.name,
        dosage: props.dosage,
        prescriptionDetails: props.prescriptionDetails,
        form: props.form,
        instructions: props.instructions,
    });

    const [reminder, setReminder] = useState({
        frequency: 'daily',
        time: props.time,
        pushNotification: props.notification,
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
