import React from 'react';

import './menu-item.scss';
import { useHistory } from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, linkUrl,match}) => {
    const history = useHistory();
    return ( 
        <div className={`${size ? size : ''} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
     );
}
 
export default MenuItem;