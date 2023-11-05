import React from "react";
interface Props extends React.PropsWithChildren {
  info: string;
  onDelete: React.MouseEventHandler;
}
const Task: React.FC<Props> = ({
                                 info,
                                 onDelete,
                               }) => {
  return (
    <div className='card m-2'>
      <div className='row'>
        <div className='col'>
          <p className='fs-5'>{info}</p>
        </div>
        <div className='col'>
          <button className='btn btn-secondary'
                  onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export  default Task;