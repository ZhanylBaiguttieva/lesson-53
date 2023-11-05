import React from "react";

interface Props extends React.PropsWithChildren {
  onAdd: React.MouseEventHandler;
  onTaskChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const AddTaskForm: React.FC<Props> = ({
                                        onAdd,
                                        onTaskChange
                                      }) => {
  return (
    <div className="taskForm">
      <input onChange={onTaskChange} id='inputId' />
      <button onClick={onAdd}>Add task</button>
    </div>
  );
};

export  default AddTaskForm;