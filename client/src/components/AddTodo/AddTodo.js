import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../../store/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddTodo = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const submit = (e) => {
        // console.log(e.key);

        if (text.length > 0) {
            // dispatch(addTodo({ id: nanoid(), todo: text, completed: false }));
            const items = text.split(",");

            // first method
            /* items.forEach((item) => {
                dispatch(
                    addTodo({ id: nanoid(), todo: item, completed: false })
                );
            }); */

            dispatch(
                addTodos(
                    items.map((item) => ({
                        id: nanoid(),
                        text: item,
                        completed: false,
                    }))
                )
            );
            setText("");
        }
    };
    return (
        <div className="add-todo">
            <p>To add multiple items write them comma seperated</p>
            <p>
                <i>eg: Eggs, Bread, Ham, Cheese</i>
            </p>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        if (text.length > 0) {
                            const items = text.split(",");
                            dispatch(
                                addTodos(
                                    items.map((item) => ({
                                        id: nanoid(),
                                        text: item,
                                        completed: false,
                                    }))
                                )
                            );
                            setText("");
                        }
                    }
                }}
            />
            <button onClick={submit}>Add Todo</button>
        </div>
    );
};

export default AddTodo;
