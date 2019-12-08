import React, {Component} from "react";

import TodoList from "./TodoList";
import { file } from "@babel/types";


class TodoForm extends Component{
    constructor(){
        super();
        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }


    addItem(e){
        if(this._inputElement.value !== ""){
            let newItem = {
                text: this._inputElement.value,
                key: Date.now()
            }
            this.setState((prevState) =>{
                return {
                    items: prevState.items.concat(newItem)
                }
            })
            
            this._inputElement.value = "";
            console.log(this.state.items);
        }
        e.preventDefault();
    }

    deleteItem(key){
        let filteredItems = this.state.items.filter(function(item){
            return (item.key !== key)
        })
        this.setState({
            items: filteredItems
        })
    }





    render(){
        return (
            <div className="todoApp">
                <h2 className="todoApp__header">Your Todo App!</h2>
                <div className="todoApp__form">
                    <form onSubmit={this.addItem}>
                        <input 
                        className="todoApp__form--input"
                        ref={(a) => this._inputElement = a} 
                        placeholder="add your task"/>
                        <button className="todoApp__form--btn" type="submit">add</button>
                    </form>
                </div>
                <TodoList entries={this.state.items}
                delete={this.deleteItem}
                />
            </div>
        )
    }
};

export default TodoForm;