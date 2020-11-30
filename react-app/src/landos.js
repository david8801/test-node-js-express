import React, { useEffect, useState } from 'react'
import API from "./API";

const Landos = () => {
    const [test, setTest] = useState('')

    useEffect(() => {
        API.post('http://localhost:3000/test?kek=lol', {x : 5, y: 9})
            .then(res => {
                console.log(res)
            })
    })

    return(
        <div>
            <p>{test ?? ''}</p>
        </div>
    )
}

export default Landos
