import React, { useState } from "react";

import styles from './../assets/styles/HomePage.module.css';

import CopyButton from "./CopyButton";
import PendingItems from "./PendingItems";
import ProgressBar from "./ProgressBar";
import DocumentUpload from "./DocumentUpload";

const HomePage = (props) => {
    const documents = ["W2", "SSN", "Driver's License", "Deed to Property"];

    const submittedDocuments = ["SSN"];

    const [progress, setProgress] = useState(0);

    const updateProgress = () => {
        setProgress((submittedDocuments.length/documents.length)*100);
    };

    return (
        <div>
            <h1 className={styles.text}>Client Dashboard</h1>
            <h2 className={styles.text}>{props.clientName} - Case Number: {props.caseNumber}</h2>

            <CopyButton number={props.caseNumber} source={"Case Number"} className={styles.button}/>
            <h2 className={styles.text}>Current Progress</h2>
            <ProgressBar progress={progress} height="30px" color="green" backgroundColor="#e0e0df" />
            <PendingItems items={documents} />
            <button onClick={updateProgress}>Update Progress</button>
            {props.user && <DocumentUpload caseNumber={props.caseNumber} />}
        </div>
    );
};

export default HomePage;
