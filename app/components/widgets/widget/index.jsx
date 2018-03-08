import React from 'react';
import Form from './types/form';
import Section from './types/section';
import Input from './types/input';

export default function Widget({ data = { items: [], type: 'form' } }) {
  switch (data.type) {
    case 'form':
      return <Form items={data.items} name={data.name} />;
    case 'section':
      return <Section items={data.items} header={data.header} columns={data.columns} />;
    case 'input':
    case 'currency':
      return <Input {...data} />;
    default:
      return 'Invalid data type!';
  }
}
