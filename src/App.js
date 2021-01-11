import Soundfont from 'soundfont-player'
import React from 'react'
import keyboardImg from './keyb.png'
import { useTransition, animated } from 'react-spring'

function App() {
  const audioContext = new AudioContext();
  const defaultInstruments = ['acoustic_grand_piano', 'electric_guitar_clean', 'trumpet', 'violin']
  const defaultInstrumentsEmoji = ['🎹', '🎸', '🎺', '🎻']
  const [currentInstrument, setCurrentInstrument] = React.useState(defaultInstruments[0])
  const [currentInstrumentEmoji, setCurrentInstrumentEmoji] = React.useState(defaultInstrumentsEmoji[0])
  const [player, setPlayer] = React.useState(null)

  const transition = useTransition(currentInstrumentEmoji, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 150 },
  })

  const handleInstrumentChange = (event) => {
    const id = event.currentTarget.dataset.id
    setCurrentInstrument(defaultInstruments[id])
    setCurrentInstrumentEmoji(defaultInstrumentsEmoji[id])
  }

  const isCurrent = (id) => (defaultInstruments[id] === currentInstrument)

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
      player.stop()
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
      <h1 className='p-4 font-light font-serif text-4xl'>Browser Instrument</h1>
      <span className='relative h-48 w-24'>
        {transition.map(({ item, props, key }) =>
          <animated.div key={key} style={props} className='absolute mx-auto pt-8 text-8xl'>{item}</animated.div>
        )}
      </span>
      {/* {currentInstrumentEmoji} */}
      {/* <h1 className='p-4 text-8xl'>{currentInstrumentEmoji}</h1> */}
      <ul className='w-96 flex text-4xl flex-row justify-between'>
        <ListItem id={0} emoji={defaultInstrumentsEmoji[0]} isCurrent={isCurrent(0)} handleChange={handleInstrumentChange} />
        <ListItem id={1} emoji={defaultInstrumentsEmoji[1]} isCurrent={isCurrent(1)} handleChange={handleInstrumentChange} />
        <ListItem id={2} emoji={defaultInstrumentsEmoji[2]} isCurrent={isCurrent(2)} handleChange={handleInstrumentChange} />
        <ListItem id={3} emoji={defaultInstrumentsEmoji[3]} isCurrent={isCurrent(3)} handleChange={handleInstrumentChange} />

      </ul>
      <p className='py-8 text-gray-500 font-semibold'>Use your keyboard to play ['C' for C3] throuh ['/' for C4]</p>
      <img className='md:max-w-2xl max-w-full' src={keyboardImg} alt="keyboard" />
    </div>
  );
}

const ListItem = ({ id, emoji, isCurrent, handleChange }) => (<li onClick={handleChange} data-id={id} className={`cursor-pointer p-4 rounded-lg hover:shadow transition duration-100 ease-in-out bg-white ${isCurrent && 'bg-gray-100'}`}>{emoji}</li>)

export default App;
