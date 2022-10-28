import React from 'react';
import './Task.css';

interface TaskProps extends React.PropsWithChildren {
  task: string,
  onDelete: React.MouseEventHandler;
}

const Task: React.FC<TaskProps> = props => {
  return (
    <div className="task">
      <p className="taskTD">{props.task}</p>
      <button className="delete" onClick={props.onDelete}>delete</button>
    </div>
  );
};

export default Task;