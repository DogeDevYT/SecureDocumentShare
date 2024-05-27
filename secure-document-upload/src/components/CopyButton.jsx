import React from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CopyButton = (props) => {
    const handleCopy = () => {
      alert(props.source + ' copied to clipboard!');
    };
  
    return (
      <CopyToClipboard text={props.number} onCopy={handleCopy}>
        <button>Copy {props.source} to clipboard</button>
      </CopyToClipboard>
    );
  };
  
  export default CopyButton;