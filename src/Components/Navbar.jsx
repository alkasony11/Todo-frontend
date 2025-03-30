import { useState } from "react";
import axios from "axios";

function Navbar() {
    // State for task input
    const [task, setTask] = useState({
        name: ""
    });

    // Handle input change
    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/tasks", task);
            alert("Task added successfully");
            // Clear the input after successful addition
            setTask({
                name: ""
            });
        } catch (error) {
            alert("Task not added");
        }
    };

    return (
        <div>
            <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <i className="fa-solid fa-list-check mr-2"></i>
                        <span className="has-text-weight-bold is-size-4 has-text-white">TODO List</span>
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <button className="button is-white is-outlined">
                                <span className="icon">
                                    <i className="fa-solid fa-user"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <section className="section has-background-grey-lighter">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="field has-addons">
                            <div className="control is-expanded">
                                <input 
                                    id="taskInput" 
                                    className="input is-medium has-background-dark has-text-white" 
                                    type="text" 
                                    name="name"
                                    value={task.name}
                                    onChange={handleChange}
                                    placeholder="Enter a new task" 
                                    required
                                />
                            </div>
                            <div className="control">
                                <button 
                                    type="submit" 
                                    className="button is-white is-medium"
                                >
                                    <span className="icon">
                                        <i className="fa-solid fa-plus"></i>
                                    </span>
                                    <span>Add Task</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Navbar;