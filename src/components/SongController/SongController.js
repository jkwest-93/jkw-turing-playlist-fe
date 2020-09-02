import React from 'react';

const SongController = ( { changeSong } ) => {

  return (
    <div>
      <button onClick={changeSong}>Next Song</button>
    </div>
  );
};

export default SongController;
