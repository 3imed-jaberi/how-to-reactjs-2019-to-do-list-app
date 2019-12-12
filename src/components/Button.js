import React from 'react';



const Button = ({btnTitle, btnStyle, ...props}) => (<button {...props} className={btnStyle}>{btnTitle}</button>);


export { Button };