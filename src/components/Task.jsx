import React from 'react';
import '../stylesheet/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Task({ id, text, complete, completeTask, deleteTask }) {
    return (
        <div className={complete ? 'container-task complete' : 'container-task'}>
            <div 
                className='text-task'
                onClick={() => completeTask(id)}>
                {text}
            </div>
            <div
                className='container-icons-task'
                onClick={() => deleteTask(id)}>
                <AiOutlineCloseCircle className='icon-task' />
            </div>
        </div>
    )
}

export default Task;