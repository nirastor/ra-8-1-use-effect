import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './List.css';

export default function List(props) {
  const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
  const [list, setList] = useState([]);
  
  useEffect(() => {
    axios(url).then(res => setList(res.data));
  }, []);

  const getClassName = (id) => id === props.selected ? 'list-item selected' : 'list-item'

  return (
    <ul className="list-container">
      {list.map((item) => (<li className={getClassName(item.id)} key={item.id} onClick={() => props.changeSelected(item.id)}>{item.name}</li>))}
    </ul>
      
  );
}
