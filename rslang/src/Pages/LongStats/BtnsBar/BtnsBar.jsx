import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import MiniBtn from '../MiniBtn/MiniBtn';

const BtnsBar = ({ items, showStats }) => {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fix
=======
>>>>>>> 0b2e2a4223537f3d2ba5e5e982403634d3331e1f
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
<<<<<<< HEAD
<<<<<<< HEAD
  return (<ButtonGroup size="lg">{elements}</ButtonGroup>)
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
=======
  return (<ButtonGroup vertical size="lg">{elements}</ButtonGroup>)
>>>>>>> fix
=======
  return (<ButtonGroup size="lg">{elements}</ButtonGroup>)
>>>>>>> 0b2e2a4223537f3d2ba5e5e982403634d3331e1f
}

export default BtnsBar;

