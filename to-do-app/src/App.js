import React, { Component } from 'react';
import './App.css';
import ToDoItem from './component/ToDoItem';

import checkAll from './img/checkAll.svg';

class App extends Component {
  constructor(){
    super();
    this.state = {
      newItem: '',
      toDoList: [
      // {title: "learning", isComplete: true},
      // {title: "playing", isComplete: false},
      // {title: "watching", isComplete: true}
      ],
      completedItem: [],
      activeItem: []
    };

    this.onItemClick = this.onItemClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);


  }

  onItemClick(item){
    return (event) => {
      // var { toDoList } = this.state;
      const index = this.state.toDoList.indexOf(item);
      const isComplete = item.isComplete;
      // console.log(this.state.toDoList);
      this.setState((prevState, props)=>({
        toDoList: [
            ...prevState.toDoList.slice(0, index),
            {
              ...item, // title: toDoList[index].title,
              isComplete: !isComplete
            },
            ...prevState.toDoList.slice(index+1)
        ]
      }));
      this.setState((prevState, props)=>({
        completedItem: prevState.toDoList.filter( (item)=> item.isComplete === true ),
        activeItem: prevState.toDoList.filter( (item)=> !item.isComplete === true )
      }))

      // console.log(this.state.toDoList);
      // console.log(this.state.completedItem);
      // console.log(this.state.activeItem);
    }
  }

  onChange(event){
    this.setState({
      newItem: event.target.value
    });
  }

  onKeyUp(event){
    let enterKey = 13;
    let text = event.target.value;
    text = text.trim();

    if(!text || text === '') return;

    if(event.keyCode === enterKey){
      this.setState({
        newItem: '',
        toDoList: [
          {title: text, isComplete: false},
          ...this.state.toDoList
        ]
      });
      this.setState((prevState, props)=>({
        completedItem: prevState.toDoList.filter( (item)=> item.isComplete === true ),
        activeItem: prevState.toDoList.filter( (item)=> !item.isComplete === true )
      }))
   }
  }

  onClickCheckAllBtn(){

  }

  onClickActiveItemBtn(){

  }

  onClickCompletedItemBtn(){

  }

  onClickClearCompletedBtn(){

  }

  render() {
    return (
      <div className="App"> 

        <div className="Header">
          <img src={checkAll} alt="checkAll"/>
          <input 
            type="text" 
            placeholder="Add to do item"
            value={this.state.newItem}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}/>
        </div>

        {
          this.state.toDoList.length>0 && this.state.toDoList.map((item, index)=>
          <ToDoItem 
            item={item} 
            key={index}
            onClick={this.onItemClick(item)}/>)   
        }

        <div classNames='StatusDock'>
                <p>{this.state.activeItem.length} item is left</p>

                <div className="ButtonGroup">
                    <button className="CheckAll" onclick={()=>this.onClickCheckAllBtn}>All</button>
                    <button className="ActiveItem" onclick={()=>this.onClickActiveItemBtn}>Active</button>
                    <button className="CompletedItem" onclick={()=>this.onClickCompletedItemBtn}>Completed</button>
                </div>

                {this.state.completedItem.length!==0 && <button className="ClearCompletedItem" onclick={()=>this.onClickClearCompletedBtn}>Clear completed</button>}
        </div>

      </div>
    );
  }
}


export default App;
