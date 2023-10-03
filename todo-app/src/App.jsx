import React, { useState } from "react";
import deleteIcon from "/delete.svg";
import editIcon from "/edit.svg";
import EditBox from "./EditBox";
import WarningMessage from "./WarningMessage";
import InputBox from "./InputBox";

function App() {
    const [task, setTask] = useState("");
    const [edit, setEdit] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [editPrompt, setEditPrompt] = useState(false);
    const [warningPrompt, setWarningPrompt] = useState(false);
    const [editID, setEditID] = useState(null);
    const submitHandler = () => {
        if (task === "") {
            setWarningPrompt(true);
            return;
        }
        setTaskList((currentTasks) => [
            ...currentTasks,
            {
                id: Date.now(),
                title: task.trim(),
                isCompleted: false,
            },
        ]);
        setTask("");
        setWarningPrompt(false);
    };
    const deleteHandler = (id) => {
        setTaskList((currentTasks) =>
            currentTasks.filter((taskToDelete) => taskToDelete.id !== id)
        );
    };

    const checkBoxHandler = (taskID) => {
        setTaskList((currentTask) =>
            currentTask.map((task) =>
                task.id === taskID
                    ? { ...task, isCompleted: !task.isCompleted }
                    : task
            )
        );
    };

    const editHandler = (taskID) => {
        setEditPrompt(true);
        setEditID(taskID);
    };

    const handleEnterKey = (e) => {
        if (e.key === "Enter") submitHandler();
    };

    return (
        <>
            <h1 className="text-5xl font-black text-white bg-black text-center p-4 select-none">
                TODO LIST
            </h1>
            <div className="outerListWrapper flex flex-grow justify-between items-center m-5 p-5">
                <div className="taskRenderList m-4">
                    <ul>
                        {taskList.map((taskItem) => (
                            <li
                                key={taskItem.id}
                                className={
                                    taskItem.isCompleted
                                        ? "line-through text-gray-600 taskcontainer flex "
                                        : "taskcontainer flex "
                                }
                            >
                                <label className="text-2xl font-medium m-1 p-3">
                                    <input
                                        type="checkbox"
                                        checked={taskItem.isCompleted}
                                        onChange={() =>
                                            checkBoxHandler(taskItem.id)
                                        }
                                    />
                                    <span className="mx-3">
                                        {taskItem.title}
                                    </span>
                                </label>
                                <div className="iconContainer flex">
                                    <img
                                        src={deleteIcon}
                                        alt="delete"
                                        className="m-3 p-1 cursor-pointer active:scale-95"
                                        onClick={() =>
                                            deleteHandler(taskItem.id)
                                        }
                                    />
                                    <img
                                        src={editIcon}
                                        alt="edit"
                                        className="m-3 p-1 cursor-pointer active:scale-95"
                                        onClick={() => editHandler(taskItem.id)}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="inputWrapper mt-2 mx-1 fixed bottom-0 overflow-x-auto w-full bg-white">
                <div className="warning flex mb-1 justify-center text-rose-600 select-none">
                    {warningPrompt && <WarningMessage t={task} />}
                </div>
                <div className="hint flex justify-center">
                    <p className="text-center text-gray-400 select-none overflow-y-hidden  inline">
                        Press Enter to add a task
                    </p>
                </div>
                {editPrompt ? (
                    <EditBox
                        allTask={taskList}
                        id={editID}
                        onInputChange={(editInput) => setEdit(editInput)}
                        updatedTaskList={(data) => setTaskList(data)}
                        close={() => setEditPrompt(false) && setEditID(null)}
                    />
                ) : (
                    <InputBox
                        placeholder="add a task"
                        value={task}
                        onInputChange={(input) => setTask(input)}
                        TabIndex="1"
                        enterkey={handleEnterKey}
                        ButtonValue="ADD TASK"
                        submitFunction={submitHandler}
                        buttonColor="bg-black"
                    />
                )}
            </div>
        </>
    );
}

export default App;
