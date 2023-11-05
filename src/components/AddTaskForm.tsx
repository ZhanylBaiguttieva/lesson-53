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
    <div className='row m-1 g-3'>
      <div className='col-auto'>
        <input type='text'
               placeholder="Add new task"
               className="form-control"
               onChange={onTaskChange}
        />
      </div>
      <div className='col-auto'>
        <button className="btn btn-primary"
                onClick={onAdd}>Add task</button>
      </div>
    </div>
  );
};

export  default AddTaskForm;