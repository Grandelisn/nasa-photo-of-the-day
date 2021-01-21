import React from 'react';
import Box from './Box';

const Boxes = props => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { boxes } = props;
  return (
    <div>
      { boxes.map((obj) => (<Box box = {obj}/>))}
      { /*Check the implementation of Post to see what props it requires!*/ }
    </div>
  );
};

export default Boxes; 