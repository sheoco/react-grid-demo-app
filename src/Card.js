import React from 'react'
import {CenteredP} from './CustomContent.js';

const Card = (props)=> {

            var str= <>
                 <span class="dropdown card_remove">
                            <div type="button" data-toggle="dropdown">  <div class="trippledot float-right"></div></div>
                            <div class="dropdown-menu ropdown-menu-md-right">
                                <p class="p_remove" onClick={props.card_remove} >Remove</p>
                                
                            </div>
                </span>
                        
                <div class="card card_cs text-white bg-info" >
                    <div class="card-header">
                        Card {props.card_key}

                       
                    </div>
                    <div class="card-body">
                        <CenteredP text={props.card_content} />
                        
                    </div>
                </div>
                </>

        return(str)
    
}

export default Card;