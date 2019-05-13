import React from 'react';

// const name = 'purple';
// const hex = '#800080';
// const rgb = '128,0,128';

function compToHex(rgb) {
  let hex = rgb.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(rgb) {
  const regex = /(\d{1,3})/g;
  const divided = rgb.match(regex);
  return '#' + compToHex(divided[0]) + compToHex(divided[1]) + compToHex(divided[2]);
}


export default function Color(name, hex, rgb) {
  const color = {
    name,
    hex: hex || rgbToHex(rgb),
    rgb
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{color.name || color.hex}</dd>

      <dt>Hex</dt>
      <dd>{color.hex}</dd>

      <dt>RGB</dt>
      <dd>{color.rgb}</dd>
    </dl>
  );
}


