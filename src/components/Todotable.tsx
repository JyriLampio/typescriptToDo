import React, { useState } from "react";
import Todolist from "./Todolist";
import { toDoProps } from "./interfaces";

function Todotable(props: todossss ) {

    return (
      <div>
        <table>
          <tbody>
            {
            props.map(entry =>
              <tr>
                <li key={entry.description}></li>
                <td>{entry.date} - </td>
                <td>{entry.description}</td>
            </tr>
            )
          }
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Todotable;

/*
function todotable(props: HelloProps) {
    
    const [msg, setMsg] = useState('g');

    
    return(
        <div>
        <p>Hello {props.name} {props.age}</p>
        <p>{msg}</p>
        </div>
    )
}

export default todotable;

function Todotable({description, date, priority}: toDoObject ) {

    return (
      <div>
        <table>
          <tbody>
            {
            props.map(entry =>
              <tr>
                <li key={entry.description}></li>
                <td>{entry.date} - </td>
                <td>{entry.description}</td>
                <button onClick={() => this.props.deleteEntry(entry)}>Delete</button>
            </tr>
            )
          }
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Todotable;*/