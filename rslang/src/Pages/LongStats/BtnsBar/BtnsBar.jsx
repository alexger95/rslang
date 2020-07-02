import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import MiniBtn from '../MiniBtn/MiniBtn';

const BtnsBar = ({ items, showStats }) => {

<<<<<<< HEAD
  const elements = items.map((item) => {
    const { id, label } = item;
    return (
      <div key={id}>
        <MiniBtn
          label={label}
          showStats={() => showStats(id)}
        />
      </div>
    )
  });
  return (<ButtonGroup size="lg">{elements}</ButtonGroup>);
=======
    const elements = items.map((item) => {
        const { id, label } = item;
        return (
            <div key={id}>
                <MiniBtn  {...label}
                    showStats={() => showStats(id)} />
                <span>{label}</span>
            </div>
        )
    });
    return (<ButtonGroup vertical size="lg">{elements}</ButtonGroup>)
>>>>>>> mini games BTNs
}

export default BtnsBar;

