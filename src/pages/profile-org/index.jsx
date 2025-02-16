import { useAddEvent } from "../../hooks/useAddEvent"

export const ProfileOrg = () => {
    const { addEvent } = useAddEvent

    const onSubmit = (e) => {
        e.preventDefault()
        addEvent({
            title: "Beach Cleenup",
            description: "Beach cleaning event for everyone.",
            date: 23 ,
            time: 1200})
    };

    return (
        <>
            <div className="org-details">
                <div className="container">
                    <h1>Organization Profile</h1>
                    <div className="details">
                        <h3>Name: </h3>

                    </div>
                </div>
                <div className="form">
                    <form className="create-event">
                        <input type="text" placeholder="title" required onSubmit={onSubmit} />
                        <input type="text" placeholder="description" required />
                        <input type="number" placeholder="date" required />
                        <input type="number" placeholder="time" required />
                        <button type="submit">Add Event</button>
                    </form>
                </div>
                <div className="events">
                    <h2>Events</h2>
                </div>
            </div>
        </>
    )
};