import React from 'react';
import styles from './Search.module.scss';

export default function Search() {
  return (
    <div>
      <input className="{styles.root}" placeholder="Search " />
    </div>
  );
}
