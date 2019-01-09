import React, { PropTypes } from 'react';
import UploadFile from './UploadFile';


const title = 'Image Upload';

function displayUpload(props, context) {
  context.setTitle(title);
  return (
     <UploadFile />
   );
}


displayUpload.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayUpload;
