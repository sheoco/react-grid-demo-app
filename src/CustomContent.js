import React from 'react'



const CenteredP = (props)=> {

   var str= 
        <div class="div_center">
            <p class="card-text div_center_content">{props.text}</p>
        </div>

    return str
}

const CenteredH = (props)=> {

    var str= 
        <div class="div_centerh">
        <h1 class="card-text div_center_contenth">{props.text}</h1>
        </div>

    return str
}

export {CenteredP,CenteredH}