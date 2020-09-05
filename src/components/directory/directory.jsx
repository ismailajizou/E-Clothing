import React from 'react';
import MenuItem from '../menu-item/menu-item';
import SECTIONS from './sections.data';
import './directory.scss';

class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            sections: SECTIONS
         }
    }
    render() { 
        return ( 
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
         );
    }
}
 
export default Directory;