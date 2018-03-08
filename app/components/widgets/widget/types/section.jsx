import React from 'react';
import { renderWidgets } from '../../utils';

export default function Section({ items = [], header = '', columns = 2 }) {
  const sectionItemsClassName = `section--items columns-${columns}`;
  return (
    <div className="section">
      <div className="section--header">
        <h4>{header}</h4>
      </div>
      <div className={sectionItemsClassName}>
        { renderWidgets(items) }
      </div>
    </div>);
}
