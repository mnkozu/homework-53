import React from 'react';
import './AddTaskForm.css';

interface AddTaskFormProps extends React.PropsWithChildren {
  currentTaskD: React.ChangeEventHandler<HTMLInputElement>
  onTaskAdd: React.MouseEventHandler;
}

const AddTaskForm:React.FC<AddTaskFormProps> = props => {
  return (
    <div className="form">
      <input type="text" placeholder="Add new task" className="input" onChange={props.currentTaskD}/>
      <button type="submit" className="button" onClick={props.onTaskAdd}>Add</button>
    </div>

  );
};

export default AddTaskForm;