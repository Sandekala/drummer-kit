import { useState, useEffect } from 'react';

const playSound = (e) => {
  document.getElementById('display').textContent = e.target.children[0].getAttribute('data-key').replace(/-/g, ' ');
  e.target.children[0].play();
};
const playWithKey = (e) => {
  e.target.children[0].play();
};

const App = () => {
  const DrumPad = ({ keyCode, keyTrigger, id, url }) => {
    const handleClick = (e) => {
      playSound(e);
    };

    return (
      <div id={keyCode} className="drum-pad" onClick={(e) => handleClick(e)}>
        {keyTrigger}
        <audio id={keyTrigger} className="clip" data-key={id} src={url}></audio>
      </div>
    );
  };

  const bankOne = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    },
  ];

  window.addEventListener('keydown', (e) => {
    if (document.getElementById(e.keyCode)) {
      document.getElementById(e.keyCode).children[0].play();
    }
  });

  return (
    <>
      <div id="drum-machine" tabIndex="0">
        <p id="display"></p>
        <div className="display">
          {bankOne.map((item, index) => {
            return <DrumPad key={index} {...item} />;
          })}
        </div>
      </div>
    </>
  );
};
export default App;
