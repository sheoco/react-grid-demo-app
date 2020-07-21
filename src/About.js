import React from 'react'

import Navbar from './Navbar.js';
import { CenteredH} from './CustomContent.js';

 const About = ()=> {  
 
    return <>
            <Navbar/>
            <div class="container-fluid">
                <div class="row">
                   <CenteredH text='About View'/>
                </div>
            </div>
            </> 
    
}  
export default About  