import { db } from "../firebase";
import { collection, addDoc, serverTimestamp, setDoc, doc } from 'firebase/firestore';

export const generateCaseNumber = async (userId) => {
  try {
    const caseNumber = `CASE-${Date.now()}`;
    const caseDocRef = doc(db, 'cases', caseNumber);
    const userDocRef = doc(db, 'users', userId);

    await setDoc(caseDocRef, {
      userId,
      createdAt: serverTimestamp()
    });
    await setDoc(userDocRef, {
      caseNumber: caseNumber
    }, { merge: true });

    console.log('Case number generated:', caseNumber);
  } catch (error) {
    console.error('Error generating case number:', error);
  }
};
