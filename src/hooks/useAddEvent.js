import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config"
import { useGetUserInfo } from "./useGetUserInfo"

export const useAddEvent = () => {
    const eventCollectionRef = collection(db, "events")
    const { userID } = useGetUserInfo();

    const addEvent = async (title, description, date, time) => {
        await addDoc(eventCollectionRef, {
            userID,
            title,
            description,
            date,
            time,
            createdAt: serverTimestamp()
        })
    };

    return {addEvent}
}