import React, { useState } from 'react';

const Total = (props)=>{
    const {number} = props
    const total = number.reduce((acc, currentValue) => acc + currentValue.exercises, 0);

    return(
        <strong>Total of {total} exercises</strong>
    )
}
export default Total