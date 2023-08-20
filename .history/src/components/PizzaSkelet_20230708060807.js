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
    <circle cx="141" cy="140" r="140" />
    <rect x="0" y="332" rx="24" ry="24" width="280" height="92" />
    <rect x="1" y="441" rx="29" ry="29" width="70" height="38" />
    <rect x="140" y="436" rx="26" ry="26" width="140" height="47" />
    <rect x="0" y="298" rx="0" ry="0" width="280" height="21" />
  </ContentLoader>
);

export default PizzaSkelet;
