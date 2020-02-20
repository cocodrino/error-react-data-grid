import React from 'react';
import Switch from 'react-switch';
import { connect } from 'react-redux';
import { toggleSwitch } from '../state/actions/metrics-actions';

const mapStateToProps = state => ({
  metrics: state.metrics.list,
});

const mapDispatchToProps = dispatch => ({
  // metricObj type { name: 'Price', active: true }
  toggleSwitch: metricObj => dispatch(toggleSwitch(metricObj)),
});

const ConfigPanel = props => {
  // pair type  { name: 'Price', active: true }
  const switchesForMetrics = props.metrics.map(({ name, active }) => {
    return (
      <div>
        <Switch onChange={() => props.toggleSwitch({ name, active: !active })} checked={active} />
        <span>{name}</span>
      </div>
    );
  });

  return (
    <div>
      <div>Prueba</div>
      {switchesForMetrics}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfigPanel);
