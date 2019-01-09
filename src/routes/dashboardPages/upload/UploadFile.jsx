import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import u from './upload.css';
import ProgressBar from 'react-progressbar';

import {
    Panel,
    Button,
    Col,
    PageHeader,
    ControlLabel,
    FormControl,
    HelpBlock,
    FormGroup,
    Checkbox,
    Form,
    Radio,
    InputGroup,
    Glyphicon } from 'react-bootstrap';

class UploadFile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
      completed: 0,
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(event) {
   // const file = event.target.files[0];
    /* const reader = new FileReader();
      reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    */
   this.state.completed = 0;
    this.setState({
      file: 'somefile',
      imagePreviewUrl: 'true',
    });

    const self = this;
    let counter = 1;
    const id = window.setInterval(() => {
      const diff = counter * 10;
      console.log(`Setting state ${diff}`);
      this.setState({
        completed: self.state.completed + diff,
      });
      console.log(`Setting self.state.completed  ${diff}`);
      // console.log('Setting state self.state.completed');
      if (self.state.completed > 100) {
        window.clearInterval(id);
        console.log('Setting state cleared');
      }

      counter++;
    }, 1000);

    // reader.readAsDataURL(file)
   // console.log('File Uploaded : '+event.target.files[0]);
  }

  render() {
    const { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    console.log(`re render : ${imagePreviewUrl}`);
    console.log(`re render this.state.completed : ${this.state.completed}`);
    if (imagePreviewUrl) {
      if (this.state.completed < 110) {
        $imagePreview = <div><div className="previewText">Uploading....</div><ProgressBar completed={this.state.completed} /></div>;
      } else {
        $imagePreview = (
          <div className="previewText" color="blue">Your Image file is uploaded for analysis...</div>
        );
      }
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }

    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Upload farm images or video</PageHeader>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Panel header={<span>Image Upload</span>}>
              <Form onSubmit={(e) => { this.handleUploadImage(e); }}>
                <FormGroup controlId="formBasicFile">
                  <ControlLabel>File Input</ControlLabel>
                  <FormControl type="file" />
                </FormGroup>
                <FormGroup>
                  <Button type="button" onClick={this.handleUploadImage}>Upload File</Button>
                </FormGroup>
              </Form>
            </Panel>
          </div>
        </div>
        <div className="{u.imgPreview}">
          {$imagePreview}
        </div>
      </div>
    );
  }
}

export default UploadFile;
