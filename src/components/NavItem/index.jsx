import React from 'react';

export default props =>
    <props.tag href={!!props.href ? props.href : ''} to={!!props.to ? props.to : ''} >
        <i className={`${props.className}`}></i> {props.label}
    </props.tag >
