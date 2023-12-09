import React from 'react';
import classes from './ItemList.module.css'
import { motion } from 'framer-motion';
import Items from './Items';

const ItemList = (props) => {


  // 'Medication Name': 'Cetirizine',
  // 'Dosage': '100mg',
  // 'Prescription Details': 'Take 1 tablet every 8 hours as needed for pain',
  // 'Medication Form': 'Tablet',
  // 'Instructions': 'Take with food',
  // 'Frequency': '4 times a day',
  // 'Time': '8:00 AM',
  // 'Notification': 'On',
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={classes["goal-list"]}>
      {props.items.map(goal => (
        <Items
          key={goal.id}
          id={goal.id}
          edit={goal.edit}
        >
          <h2>Name: {goal.MedicationName}</h2>
          <p>Dosage: {goal.Dosage}</p>
          <p>Details: {goal.PrescriptionDetails}</p>
          <p>Form: {goal.MedicationForm}</p>
          <p>Instructions: {goal.Instructions}</p>
          <p>Frequency: {goal.Frequency}</p>
          <p>Time: {goal.Time}</p>
          <p>Notification: {goal.Notification}</p>


          <a href={goal.contentLink} target='_blank' rel=" noopener noreferrer" >{goal.content}</a>
        </Items>
      ))}
    </motion.ul>

  );
};

export default ItemList;
