import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import u from './view.css';
import ProgressBar from 'react-progressbar';
//import ShowcaseButton from '../showcase-components/showcase-button';


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
  MarkSeriesCanvas,
  Hint
} from 'react-vis';

function getRandomData() {
  return new Array(100).fill(0).map(row => ({
    x: Math.random() * 10,
    y: Math.random() * 20,
    size: Math.random() * 10,
    color: Math.random() * 10,
    opacity: Math.random() * 0.5 + 0.5
  }));
}
const colorRanges = {
  typeA: ['#59E4EC', '#0D676C'],
  typeB: ['#EFC1E3', '#B52F93']
};

const randomData = getRandomData();
const nextType = {
  typeA: 'typeB',
  typeB: 'typeA'
};

const nextModeContent = {
  canvas: 'SWITCH TO SVG',
  svg: 'SWITCH TO CANVAS'
};

const drawModes = ['canvas', 'svg'];

class ViewFile extends React.Component {
  state = {
    drawMode: 0,
    data: randomData,
    colorType: 'typeA',
    value: false
  };

  render() {

    const {drawMode, data, colorType} = this.state;
    const markSeriesProps = {
      animation: true,
      className: 'mark-series-example',
      sizeRange: [5, 15],
      seriesId: 'my-example-scatterplot',
      colorRange: colorRanges[colorType],
      opacityType: 'literal',
      data,
      onNearestXY: value => this.setState({value})
    };

    const mode = drawModes[drawMode];

    return (

      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>VIEW</PageHeader>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Panel header={<span>Anomaly Detection</span>}>

              <div className="canvas-wrapper">
                <div className="canvas-example-controls">

                  {/*                  <ShowcaseButton
                    onClick={() => this.setState({drawMode: (drawMode + 1) % 2})}
                    buttonContent={nextModeContent[mode]}
                  />
                  <ShowcaseButton
                    onClick={() => this.setState({data: getRandomData()})}
                    buttonContent={'UPDATE DATA'}
                  />
                  <ShowcaseButton
                    onClick={() => this.setState({colorType: nextType[colorType]})}
                    buttonContent={'UPDATE COLOR'}
                  />*/}
                </div>
                <XYPlot
                  onMouseLeave={() => this.setState({value: false})}
                  width={600}
                  height={300}
                >
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis />
                  <YAxis />
                  <MarkSeries {...markSeriesProps} />
                  {this.state.value ? <Hint value={this.state.value} /> : null}
                </XYPlot>
              </div>

            </Panel>
          </div>
        </div>

      </div>

    );
  }
}

export default ViewFile;
