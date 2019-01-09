

import React, { PropTypes } from 'react';
import {Link} from 'react';



import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  MenuItem,
  DropdownButton,
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';


import s from './Home.css';
import StatWidget from '../../components/Widget';
import Donut from '../../components/Donut';

import {
  Tooltip,
  XAxis, YAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer } from '../../vendor/recharts';

import displayView from '../dashboardPages/view/view';

const title = 'DigiFarm - an intelligent farming!';


const dataHistory = [
  { name: 'September', Diseases: 100, Pests: 100, DryPatches: 100, GrowthIssues: 100, AllGood: 600 },
  { name: 'October', Diseases: 50, Pests: 100, DryPatches: 100, GrowthIssues: 100, AllGood: 650 },
  { name: 'Novermber', Diseases: 50, Pests: 50, DryPatches: 100, GrowthIssues: 100, AllGood: 700 },
  { name: 'December', Diseases: 50, Pests: 50, DryPatches: 50, GrowthIssues: 50, AllGood: 800 }
];

const data = [
  { name: 'Diseases', uv: 4000, pv: 2400, amt: 2400, value: 50 },
  { name: 'Pests', uv: 3000, pv: 1398, amt: 2210, value: 50 },
  { name: 'Dry Patches', uv: 2000, pv: 9800, amt: 2290, value: 50 },
  { name: 'Growth Issues', uv: 2780, pv: 3908, amt: 2000, value: 50 },
  { name: 'All Good', uv: 1890, pv: 4800, amt: 2181, value: 840 }
];


class Home extends React.Component {

  goPest() {
    window.location.href = "http://localhost:3001/zpest";

  }

  goDryPatch() {
    window.location.href = "http://localhost:3001/zdrypatch";

  }

  goWeed() {
    window.location.href = "http://localhost:3001/zweed";

  }

  goDisease() {
    window.location.href = "http://localhost:3001/zdisease";

  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Dashboard</PageHeader>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">

            <Panel
              header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> Area Chart - History
              <div className="pull-right">
                <DropdownButton title="Dropdown" bsSize="xs" pullRight id="dropdownButton1" >
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem eventKey="2">Another action</MenuItem>
                  <MenuItem eventKey="3">Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
              </div>
            </span>}
            >
              <div>
                <ResponsiveContainer width="100%" aspect={2}>
                  <AreaChart data={dataHistory} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid stroke="#ccc" />
                    <Tooltip />
                    <Area type="monotone" dataKey="Diseases" stackId="1" stroke="#8884d8" fill="#FF334F" />
                    <Area type="monotone" dataKey="Pests" stackId="1" stroke="#82ca9d" fill="#9033FF" />
                    <Area type="monotone" dataKey="DryPatches" stackId="1" stroke="#ffc658" fill="#873600" />
                    <Area type="monotone" dataKey="GrowthIssues" stackId="1" stroke="#ffc658" fill="#F9FF33" />
                    <Area type="monotone" dataKey="AllGood" stackId="1" stroke="#ffc658" fill="#027007" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

            </Panel>

            <Panel
              header={<span>
              <i className="fa fa-clock-o fa-fw" /> Plant Timeline
            </span>}
            >
              <div>
                <ul className="timeline">
                  <li>
                    <div className="timeline-badge"><i className="fa fa-check" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Boll Opens Phase- Crop Health Analysis available</h4>
                        <p>
                          <small className="text-muted">
                            <i className="fa fa-clock-o" /> 8 hours ago*
                          </small>
                        </p>
                      </div>
                      <div className="timeline-body">
                        <p>5% of plats are detected with 'Alternaria macrospora' - initial stage.
                          Click here to know about this disease and how to take care of them.</p>
                        <p>Few plats are detected with 'Alternaria macrospora'</p>
                        <p>Overall health growth: Good</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-badge warning"><i className="fa fa-check-circle" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Boll Phase Phase- Crop Health Analysis available</h4>
                        <p>
                          <small className="text-muted">
                            <i className="fa fa-clock-o" /> 8 weeks ago*
                          </small>
                        </p>
                      </div>
                      <div className="timeline-body">
                        <p>Images taken by SuperDrone Services*
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge"><i className="fa fa-check" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Blossom Phase- Crop Health Analysis available</h4>
                        <p>
                          <small className="text-muted">
                            <i className="fa fa-clock-o" /> 10 weeks ago*
                          </small>
                        </p>
                      </div>
                      <div className="timeline-body">
                        <p>5% of plats are detected with 'Alternaria macrospora' - initial stage.
                          Click here to know about this disease and how to take care of them.</p>
                        <p>Few plats are detected with 'Alternaria macrospora'</p>
                        <p>Overall health growth: Good</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-badge warning"><i className="fa fa-check-circle" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Square-Bud Phase- Crop Health Analysis available</h4>
                        <p>
                          <small className="text-muted">
                            <i className="fa fa-clock-o" /> 13 weeks ago*
                          </small>
                        </p>
                      </div>
                      <div className="timeline-body">
                        <p>Images taken by SuperDrone Services*
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge danger"><i className="fa fa-check-circle" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">True Leaves Phase - Crop Health Analysis available</h4>
                        <p>
                          <small className="text-muted">
                            <i className="fa fa-clock-o" /> 15 weeks ago*
                          </small>
                        </p>
                      </div>
                      <div className="timeline-body">
                        <p>Few plats are detected with 'Alternaria macrospora'.
                          Click here to know about this disease and how to take care of them.</p>
                        <p>Overall health growth: Good</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-badge warning"><i className="fa fa-check-circle" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Seeds Planted</h4>
                        <p>
                          <small className="text-muted">
                            <i className="fa fa-clock-o" /> 17 weeks ago*
                          </small>
                        </p>
                      </div>
                      <div className="timeline-body">
                        <p>Images taken by SuperDrone Services*
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge danger"><i className="fa fa-check-circle" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Cotton plants Seeded</h4>
                        <p>
                          <small className="text-muted">
                            <i className="fa fa-clock-o" /> 18 weeks ago*
                          </small>
                        </p>
                      </div>
                      <div className="timeline-body">
                        <p>Images taken by SuperDrone Services*
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Panel>

          </div>

          <div className="col-lg-4">

            <Panel
              header={<span>
              <i className="fa fa-bell fa-fw" /> Notifications Panel
            </span>}
            >
              <ListGroup>

                <ListGroupItem href="" >
                  <div onClick = {this.goPest}>
                    <i className="fa fa-exclamation-circle fa-fw" /> Pest Detected!
                    <span className="pull-right text-muted small"><em>8 hours ago</em></span>
                  </div>
                </ListGroupItem>

                <ListGroupItem href="" >
                  <div onClick = {this.goDisease}>
                    <i className="fa fa-exclamation-circle fa-fw" /> Diseases Detected!
                    <span className="pull-right text-muted small"><em>8 hours ago</em></span>
                  </div>
                </ListGroupItem>

                <ListGroupItem href="" >
                  <div onClick = {this.goWeed}>
                    <i className="fa fa-exclamation-circle fa-fw" /> Weed Detected!
                    <span className="pull-right text-muted small"><em>8 hours ago</em></span>
                  </div>
                </ListGroupItem>

                <ListGroupItem href="" >
                  <div onClick = {this.goDryPatch}>
                    <i className="fa fa-exclamation-circle fa-fw" /> Dry Pathces Detected!
                    <span className="pull-right text-muted small"><em>8 hours ago</em></span>
                  </div>
                </ListGroupItem>

              </ListGroup>
              <Button block>View All Alerts</Button>
            </Panel>

          </div>

        </div>
      </div>
    );
  }

}
export default Home;
