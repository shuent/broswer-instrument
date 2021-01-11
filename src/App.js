import Soundfont from 'soundfont-player'
import React from 'react'

function App() {
  const audioContext = new AudioContext();
  const defaultInstruments = ['acoustic_grand_piano', 'electric_guitar_clean', 'trumpet', 'violin']
  const defaultInstrumentsEmoji = ['🎹', '🎸', '🎺', '🎻']
  const [currentInstrument, setCurrentInstrument] = React.useState(defaultInstruments[0])
  const [currentInstrumentEmoji, setCurrentInstrumentEmoji] = React.useState(defaultInstrumentsEmoji[0])
  const [player, setPlayer] = React.useState(null)

  const handleInstrumentChange = (event) => {
    const id = event.currentTarget.dataset.id
    setCurrentInstrument(defaultInstruments[id])
    setCurrentInstrumentEmoji(defaultInstrumentsEmoji[id])

  }

  const keydownCallBack = (event) => {
    if (player && !event.repeat) {
      if (event.keyCode === 67) {
        player.play('C3')
      }
      else if (event.keyCode === 70) {
        player.play('C#3')
      }
      else if (event.keyCode === 86) {
        player.play('D3')
      } else if (event.keyCode === 71) {
        player.play('D#3')
      } else if (event.keyCode === 66) {
        player.play('E3')
      } else if (event.keyCode === 78) {
        player.play('F3')
      } else if (event.keyCode === 74) {
        player.play('F#3')
      } else if (event.keyCode === 77) {
        player.play('G3')
      } else if (event.keyCode === 75) {
        player.play('G#3')
      } else if (event.keyCode === 188) {
        player.play('A3')
      } else if (event.keyCode === 76) {
        player.play('A#3')
      } else if (event.keyCode === 190) {
        player.play('B3')
      } else if (event.keyCode === 191) {
        player.play('C4')
      }
    }
  }

  const keyupCallBack = (event) => {
    if (player) {
      if (event) {

        player.stop()
      }
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', keydownCallBack, false)
    document.addEventListener('keyup', keyupCallBack, false)

    return () => {
      document.removeEventListener('keydown', keydownCallBack)
      document.removeEventListener('keyup', keyupCallBack)
    }
  }, [player])

  React.useEffect(() => {
    Soundfont.instrument(audioContext, currentInstrument).then(player => setPlayer(player))

  }, [currentInstrument])

  return (
    <div className="pt-10 flex flex-col items-center justify-items-center">
      <h1 className='p-4 text-4xl'>Browser Instrument</h1>
      <h1 className='p-4 text-8xl'>{currentInstrumentEmoji}</h1>
      <ul className='w-96 flex text-4xl flex-row justify-between'>
        <li onClick={handleInstrumentChange} data-id='0' className={`p-4 rounded-lg border border-transparent hover:border hover:border-gray-200 ${defaultInstruments[0] === currentInstrument && '  bg-gray-100'} `}>🎹</li>
        <li onClick={handleInstrumentChange} data-id='1' className={`p-4 rounded-lg border border-transparent hover:border hover:border-gray-200 ${defaultInstruments[1] === currentInstrument && '  bg-gray-100'} `}>🎸</li>
        <li onClick={handleInstrumentChange} data-id='2' className={`p-4 rounded-lg border border-transparent hover:border hover:border-gray-200 ${defaultInstruments[2] === currentInstrument && '  bg-gray-100'} `}>🎺</li>
        <li onClick={handleInstrumentChange} data-id='3' className={`p-4 rounded-lg border border-transparent hover:border hover:border-gray-200 ${defaultInstruments[3] === currentInstrument && '  bg-gray-100'} `}>🎻</li>
      </ul>
      <p className='py-8'>Use your keyboard to play ['C' for C3] throuh ['/' for C4]</p>
      <img className='max-w-2xl' src="keyb.png" alt="keyboard" />
    </div>
  );
}

export default App;
