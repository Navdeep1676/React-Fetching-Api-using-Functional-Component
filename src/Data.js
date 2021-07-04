import React from 'react';

function Data(props) {
    return (
        <div className={props.class} id={props.id} >
                  <h4>{props.title}</h4>
                  <p><b>{props.data}</b></p>
        </div>
    );
}

export default Data;