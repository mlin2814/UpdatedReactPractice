import React from 'react';

const Project1Page = (props) => {
  console.log(props);
  return (
    <div>Select my projects! {props.match.params.id}</div>
  );
};
export default Project1Page;
