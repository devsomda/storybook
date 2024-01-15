import React from 'react';
import PropTypes from 'prop-types';

export default function DeployTest({ status, isChecked = false }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '80px',
      }}
    >
      <input type="checkbox" checked={isChecked} />
      <h3>{status === 'success' ? '성공' : '실패'}</h3>
    </div>
  );
}

DeployTest.propTypes = {
  status: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
};
