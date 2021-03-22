import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Details.css';

export default function Details(props) {
  
  const [details, setDetails] = useState({ details: {} });

  useEffect(() => {
    if (props.selected) {
      const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/'
        + props.selected
        + '.json';
      axios(url)
      .then(res => setDetails(res.data))
      .catch(() => setDetails({ details: {} }));
    }
  }, [props.selected]);

  return (
    props.selected !== 0 && (
      <div className="details">
        <img className="details-img" src={details.avatar} alt="user avatar"/>
        <div className="details-text">
          <div className="details-text-item details-text-title">{details.name}</div>
          <div className="details-text-item">City: {details.details.city}</div>
          <div className="details-text-item">Company: {details.details.company}</div>
          <div className="details-text-item">Position: {details.details.position}</div>
        </div>
      </div>
    )
  );
}
