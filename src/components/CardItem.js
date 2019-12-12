import React, { Fragment } from 'react';



const CardItem = ({ index, title, desc, onDelete }) => {

  const onChildDelete = () => onDelete(index);

  return (
    <Fragment>
      { index === 0 ? <hr className="bg-white mt-4 mb-4" /> : null }
      <div className="shadow-lg p-1 mb-2 bg-white rounded mb-4"> 
        <div onClick={onChildDelete} className="container-sm bg-primary p-5 ">
          <h5 className="text-center text-white"> #{index} - {title}</h5>
          <hr width="85%" className="bg-white mb-4" />
          <p className="text-white">{desc}</p>
        </div>
      </div>  
    </Fragment>
  );
}


export { CardItem };
