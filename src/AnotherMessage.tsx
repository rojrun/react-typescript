import React from 'react';
import messageHoc from './Hoc';

const example2 = (props: any):any => <p>{props.name}, yes, {props.message}</p>;

const AnotherMessage = messageHoc(example2);

export default AnotherMessage;