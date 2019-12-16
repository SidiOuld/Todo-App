import React, {Component} from "react";
import FlipMove from "react-flip-move";

class TodoList extends Component{

    delete(key){
        this.props.delete(key);
    }


    render(){

        return (
            this.props.entries.map((item)=>{
                return (
                    <ul className="todoApp__lists ">
                        <FlipMove duration={250} easing="ease-out">
                       <li className="todoApp__lists--li" onClick={()=> this.delete(item.key)} key={item.key}>{item.text}</li>
                       </FlipMove>
                    </ul>
                )
            })
        )
    }
};

export default TodoList;

