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
    <div className="task">
      <p>{info}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export  default Task;