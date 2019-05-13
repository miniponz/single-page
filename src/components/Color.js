import React from 'react';

export default function Color() {
  const color = {
    name: 'purple',
    hex: '#800080',
    rgb: '128,0,128'
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{color.name}</dd>

      <dt>Hex</dt>
      <dd>{color.hex}</dd>

      <dt>RGB</dt>
      <dd>{color.rgb}</dd>
    </dl>
  );
}
