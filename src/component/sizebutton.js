import React from 'react';

 import "rbx/index.css";
 import { Button } from 'rbx';

 const SizeButton = ({ setSize, chosenSize, size }) => {
     return (
         size === chosenSize ?
             <Button color="primary" onClick={() => setSize(size)}>
                 {size}
             </Button>
             :
             <Button onClick={() => setSize(size)}>
                 {size}
             </Button>

     );
 }

export default SizeButton;
