import React from "react";

import styles from '../assets/styles/PendingItems.module.css';

const PendingItems = (props) => {
    return (
        <div>
            <h3 className={styles.text}>Pending Items</h3>
            <ul className={styles.text}>
                {props.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default PendingItems;