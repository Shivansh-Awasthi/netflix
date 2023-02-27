import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card';
import './index.css';
import Sdata from './Sdata';

/* const ncard = (value)=>{
  return(
    <Card
    title = {value.title}
    imgsrc = {value.imgsrc}
    reflink = {value.reflink}
    /> 
  )
} */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<h2 className='heading_style'>Top 5 Netflix Series</h2>


{Sdata.map( (value, index) =>{return (
  <Card
  key = {index}
  title = {value.title}
  imgsrc = {value.imgsrc}
  reflink = {value.reflink}
  /> 
)} )}

 </>


);

