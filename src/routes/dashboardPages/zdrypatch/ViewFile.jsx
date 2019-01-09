import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import u from './view.css';
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


import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries,
} from 'react-vis';


class ViewFile extends React.Component {

  render() {

    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>FARM VIEW</PageHeader>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Panel header={<span>Detection</span>}>
                  <XYPlot width={300} height={300}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <MarkSeries
                      className="mark-series-example"
                      strokeWidth={2}
                      opacity="0.8"
                      sizeRange={[5, 15]}
                      data={[
                        { x: 1, y: 10, size: 30 },
                        { x: 1.7, y: 12, size: 10 },
                        { x: 2, y: 5, size: 1 },
                        { x: 3, y: 15, size: 12 },
                        { x: 2.5, y: 7, size: 4 },
                      ]}
                    />
                  </XYPlot>

            </Panel>
          </div>
        </div>

      </div>
    );
  }
}

export default ViewFile;
