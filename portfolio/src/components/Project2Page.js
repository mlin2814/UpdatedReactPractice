import React from 'react';

const Project2Page = (props) => {
  console.log(props);
  return (
    <div>Select my projects! {props.match.params.id}</div>
  );
};

export default Project2Page;
