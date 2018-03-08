import React from 'react';
import Widget from './widget/index';

export const renderWidgets = widgets => widgets.map((widget, index) => <Widget key={`${widget.type}-${index}`} data={widget} />);
