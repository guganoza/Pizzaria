import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaSkelet = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={485}
    viewBox="0 0 280 485"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="135" cy="135" r="135" />
    <rect x="0" y="328" rx="24" ry="24" width="280" height="92" />
    <rect x="0" y="282" rx="10" ry="10" width="280" height="30" />
    <rect x="6" y="435" rx="29" ry="29" width="127" height="38" />
    <rect x="167" y="430" rx="26" ry="26" width="111" height="47" />
  </ContentLoader>
);

export default PizzaSkelet;
