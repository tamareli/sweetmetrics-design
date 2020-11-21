import React from 'react';
import ControlButton from '../ControlButton/ControlButton';
import './ChartControl.css';

function ChartControl(props) {
  return (
    <div className='box box-primary chart-control'>
      <div className='box-header'>
        <h3 className='box-title'>Chart Control</h3>
      </div>
      <div className='box-body'>
        {props.controls.map((control) => {
          return <ControlButton key={control.id} title={control.title} />;
        })}
      </div>
    </div>
  );
}

export default ChartControl;
