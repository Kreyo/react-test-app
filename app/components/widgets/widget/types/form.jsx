import React from 'react';
import { renderWidgets } from '../../utils';

export default function Form({ items = [], name = '' }) {
  return (
    <div className="form">
      <div className="form-header">
        <a href="#" className="link link--cancel">Cancel</a>
        <h3>{ name }</h3>
        <a href="#" className="link link--submit">Submit</a>
      </div>
      { renderWidgets(items) }
    </div>);
}
