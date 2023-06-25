import React, { memo, useState } from 'react'

function Todo(props) {
    console.log("child çalışıyor")
    return (
        <>
            <h2>Todo Component</h2>
            {props.todos.map((val, index) => 
            {
                return 
                    <p 
                    key={index}>
                        {val}
                    </p>
            })}
        </>
    )
}

export default memo(Todo);
