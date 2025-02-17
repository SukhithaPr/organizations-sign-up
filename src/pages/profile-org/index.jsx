import { useState } from "react";
import { useAddEvent } from "../../hooks/useAddEvent";
import "./index.css";

export const ProfileOrg = () => {
    const { addEvent } = useAddEvent();

    // State for form inputs
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        time: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const onSubmit = async (e) => {
        e.preventDefault();

        const { title, description, date, time } = formData;
        console.log("📤 Submitting event with:", formData);
        if (!title || !description || !date || !time) {
            console.error("❌ Missing fields:", { title, description, date, time });
            return;
        }
        const response = await addEvent(title, description, date, time);
        if (!response || !response.success) {
            console.error("❌ Error adding event:", response?.error || "Unknown error");
            return;
        }
        console.log("✅ Event added successfully:", response.id);
        setFormData({ title: "", description: "", date: "", time: "" }); // Reset form
    };

    return (
        <div className="org-details">
            <div className="container">
                <h1>Organization Profile</h1>
                <div className="details">
                    <h3>Name: </h3>
                </div>
            </div>
            <div className="form">
                <form className="create-event" onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="date"
                        name="date"
                        placeholder="Date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="time"
                        name="time"
                        placeholder="Time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Add Event</button>
                </form>
            </div>
            <div className="events">
                <h2>Events</h2>
            </div>
        </div>
    );
};
