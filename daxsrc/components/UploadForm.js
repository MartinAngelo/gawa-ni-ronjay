import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
// import MenuIcon from '@material-ui/icons/Menu';
import { 
    makeStyles, 
    Grid, 
    TextField, 
    Card, 
    CardContent, 
    Button,
    CircularProgress,
    Typography,
    IconButton,
} from "@material-ui/core";
import {Delete as DeleteIcon} from "@material-ui/icons"

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
    <form>
      {/* <Grid container direction="column"> */}
      <label className = "up">
        <input type="file" class = "upload" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
        {/* <IconButton>
            <DeleteIcon />
        </IconButton> */}
      {/* </Grid> */}
    </form>
  );
}

export default UploadForm;