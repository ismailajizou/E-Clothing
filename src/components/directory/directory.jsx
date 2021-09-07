import React, { useContext } from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';
import DirectoryCtx from '../../utils/contextFiles/directory.context';


const Directory =() => {
    const sections = useContext(DirectoryCtx);
    return (
        <DirectoryCtx.Provider value={sections}>
            <div className='directory-menu'>
                {sections.map(({id, ...otherSectionProps}) => <MenuItem key={id} {...otherSectionProps}/>)}
            </div>
        </DirectoryCtx.Provider>
    );
} 

export default Directory;