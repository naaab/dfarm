import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import u from './view.css';
import ProgressBar from 'react-progressbar';
//import ShowcaseButton from '../showcase-components/showcase-button';
import DATA from '../datasets/old-faithful.json';


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


import {XYPlot, XAxis, YAxis, HexbinSeries, Borders, Hint } from 'react-vis';

/*function updateData() {
  return DATA.map(row => ({
    waiting: row.waiting + (Math.random() - 0.5) * 10,
    eruptions: row.eruptions + (Math.random() - 0.5) * 2
  }));
}*/

class ViewFile extends React.Component {
  state = {
    data: DATA,
    hoveredNode: null,
    radius: 40,
    offset: 0
  };

  render() {

    const {data, radius, hoveredNode, offset} = this.state;

    return (

      <div>
        <div className="row">
          <div className="col-lg-8">
            <PageHeader>FARM VIEW</PageHeader>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <Panel header={<span>Detection</span>}>

              <div>
                <XYPlot
                  xDomain={[1, 990]}
                  yDomain={[1, 990]}
                  width={999}
                  getX={d => d.waiting}
                  getY={d => d.eruptions}
                  onMouseLeave={() => this.setState({hoveredNode: null})}
                  height={999}
                >
                  <HexbinSeries
                    animation
                    className="hexbin-example"
                    style={{
                      stroke: '#125C77',
                      strokeLinejoin: 'round'
                    }}
                    onValueMouseOver={d => this.setState({hoveredNode: d})}
                    xOffset={offset}
                    yOffset={offset}
                    colorRange={['green', 'red']}
                    radius={radius}
                    data={data}
                  />
                  <Borders style={{all: {fill: '#fff'}}} />
                  <XAxis />
                  <YAxis />
                  {hoveredNode && (
                    <Hint
                      xType="literal"
                      yType="literal"
                      getX={d => d.x}
                      getY={d => d.y}
                      value={{
                        x: hoveredNode.x,
                        y: hoveredNode.y,
                        value: hoveredNode.length
                      }}
                    />
                  )}
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
