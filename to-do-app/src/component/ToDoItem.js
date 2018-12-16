import React, { Component } from 'react';
import './ToDoItem.css';
import classNames from 'classnames';

import check from '../img/check.svg';
import checkComplete from '../img/check-complete.svg';

class ToDoItem extends Component{
    render(){
        const { item, onClick } = this.props;
        let url = check;
        if(item.isComplete){
            url = checkComplete;
        }

        return (
            <div className={classNames('ToDoItem', {'ToDoItem-complete': item.isComplete === true})}>
                 <img src={url} alt='checkimg' onClick={onClick}/>
                <p>{item.title}</p>
            </div>
        )
    }
}

export default ToDoItem;