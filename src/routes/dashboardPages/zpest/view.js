import React, { PropTypes } from 'react';
//import ViewFile from './ViewFileRadar';
import ViewFile from './ViewFileHexHeat';
//import ViewFile from './ViewFile'; - simple
//import ViewFile from './ViewFileColor'; - complex
//import ViewFile from './ViewFileColor'; - complex
//import ViewFile from './ViewFileColor'; - complex
//import ViewFile from './ViewFileColor'; - complex

const title = 'Farm View';

function displayView(props, context) {
  context.setTitle(title);
  return (
     <ViewFile />
   );
}


displayView.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayView;
