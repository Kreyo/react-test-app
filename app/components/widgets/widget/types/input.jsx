import React from 'react';

export default function Input({
  type = 'input',
  label = '',
  value = '',
  symbol = '',
  required = false,
}) {
  const renderCurrency = value => `${symbol} ${value}`;

  const renderInputType = () => {
    switch (type) {
      case 'input':
        return <input type="text" required={required} value={value} />;
      case 'currency':
        return <input type="text" required={required} value={renderCurrency(value)} />;
      default:
        return 'Invalid form field type!';
    }
  };
  return (
    <div className="input">
      <label>{label}</label>
      {renderInputType()}
    </div>);
}
