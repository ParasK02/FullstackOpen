/* eslint-disable react/prop-types */
import { useState } from "react"
import Part from "./Part"
const Content = (props) =>{
    const {content} = props

    return(
        <div>
            {content.map(part => {
                return <Part key={part.id} content={part}/>
            
            })}
        </div>
    )
}
export default Content