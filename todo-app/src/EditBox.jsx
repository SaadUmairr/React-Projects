import { useState } from "react";
import InputBox from "./InputBox";

function editBox({ allTask, id, updatedTaskList, close }) {
    const [editData, setEditData] = useState("");
    const taskToEdit = allTask.filter((task) => task.id === id);
    const editHandler = () => {
        if (editData === "") {
            close();
        }

        taskToEdit[0].title = editData;
        taskToEdit[0].isCompleted = false;
        allTask.map((task) =>
            task.id === id ? (task.title = editData) : task
        );
        updatedTaskList(allTask);
        const localStorageData = allTask;
        localStorage.setItem("data", JSON.stringify(localStorageData));
        close();
    };
    const handleEnterKey = (e) => {
        if (e.key === "Enter") editHandler();
    };

    return (
        <>
            <InputBox
                placeholder={"edit your task: " + taskToEdit[0].title}
                value={editData}
                TabIndex="2"
                ButtonValue="UPDATE TASK"
                enterkey={handleEnterKey}
                onInputChange={(input) => setEditData(input)}
                submitFunction={editHandler}
                buttonColor="bg-blue-700"
            />
        </>
    );
}

export default editBox;
