import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddEvent = () => {
    const eventCollectionRef = collection(db, "events");
    const { userID } = useGetUserInfo();

    const addEvent = async (title, description, date, time) => {
        if (!title || !description || !date || !time) {
            console.error("❌ Missing required fields");
            return { success: false, error: "Missing required fields" };
        }

        try {
            const docRef = await addDoc(eventCollectionRef, {
                userID,
                title,
                description,
                date,
                time,
                createdAt: serverTimestamp(),
            });

            console.log("✅ Event added:", docRef.id);
            return { success: true, id: docRef.id };
        } catch (error) {
            console.error("❌ Error adding event:", error.message);
            return { success: false, error: error.message };
        }
    };

    return { addEvent };
};
