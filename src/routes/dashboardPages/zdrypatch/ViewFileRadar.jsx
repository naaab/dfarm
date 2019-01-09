import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import u from './view.css';
import ProgressBar from 'react-progressbar';

import {format} from 'd3-format';

import RadarChart from '../src-vis/radar-chart';
import {Hint} from 'react-vis';

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


//import {XYPlot, XAxis, YAxis, HexbinSeries, Borders, Hint } from 'react-vis';

const DATA = [
  {
    name: 'PestA',
    SideA: 7,
    SideB: 10,
    SideC: 8,
    SideD: 9,
    SideE: 7,
    SideF: 7
  },
  {
    name: 'PestB',
    SideA: 8,
    SideB: 6,
    SideC: 9,
    SideD: 6,
    SideE: 3,
    SideF: 9
  },
  {
    name: 'PestC',
    SideA: 5,
    SideB: 4,
    SideC: 6,
    SideD: 4,
    SideE: 5,
    SideF: 6
  }
];

const basicFormat = format('.2r');
const wideFormat = format('.3r');

const tipStyle = {
  display: 'flex',
  color: '#fff',
  background: '#000',
  alignItems: 'center',
  padding: '5px'
};

class ViewFile extends React.Component {
  state = {
    data: DATA,
    hoveredNode: null,
    radius: 10,
    offset: 0
  };

  render() {

    const {hoveredCell} = this.state;

    return (

      <RadarChart
        data={DATA}
        tickFormat={t => wideFormat(t)}
        startingAngle={0}
        domains={[
          {name: 'SideA', domain: [0, 10]},
          {
            name: 'SideB',
            domain: [2, 16],
            tickFormat: t => `$${basicFormat(t)}`,
            getValue: d => d.SideB
          },
          {name: 'SideC', domain: [5, 10], getValue: d => d.SideC},
          {name: 'SideD', domain: [0, 10], getValue: d => d.SideD},
          {name: 'SideE', domain: [0, 7], getValue: d => d.SideE},
          {name: 'SideF', domain: [10, 2], getValue: d => d.SideF}
        ]}
        width={900}
        height={900}
        onSeriesMouseOver={(data) => {
          this.setState({hoveredCell: data.event[0]});
        }}
        onSeriesMouseOut={() => this.setState({hoveredCell: false})}
      >
        {hoveredCell && (
          <Hint value={{x: 0, y: 0}}>
            <div style={tipStyle}>{hoveredCell.name}</div>
          </Hint>
        )}
      </RadarChart>

    );
  }
}

export default ViewFile;
