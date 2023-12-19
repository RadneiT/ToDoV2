import React, { useState } from 'react';
import '../stylesheet/SurveyTask.css';
import { AiOutlinePlus  } from 'react-icons/ai';
import {v4 as uuidv4 } from 'uuid';

function surveyTask(props) {

    const [input, setInput] = useState('');

    const manageTask = e => {
        setInput(e.target.value);
    };

    const manageDelivery = e => {
        e.preventDefault();

        const newTask = {
            id: uuidv4(),
            text: input,
            complete: false
        };  

        props.onSubmit(newTask);  
        
    };
    return (
        <form 
            className='survey-task'
            onSubmit={manageDelivery}>

            <input
                className='task-input'
                type='text'
                placeholder='Escribe una tarea'
                name='text'
                onChange={manageTask}
            />

            <button className='button-task'>
                <AiOutlinePlus />
            </button>

        </form>
    );
}

export default surveyTask;