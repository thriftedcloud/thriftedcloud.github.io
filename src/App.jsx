import StarCursor from './components/StarCursor.jsx'
import Draggable from './components/Draggable.jsx'
import PhotoPlaceholder from './components/PhotoPlaceholder.jsx'

export default function App() {
  return (
    <div className="app">
      <StarCursor />
      <div className="notebook">
        <div className="notebook-binding" aria-hidden="true" />
        <div className="notebook-margin" aria-hidden="true" />
        <div className="notebook-content">
          <Draggable
            className="photo-draggable"
            style={{ position: 'absolute', left: '50%', top: '50%', marginLeft: '-73px', marginTop: '-90px' }}
          >
            <PhotoPlaceholder />
          </Draggable>
        </div>
      </div>
    </div>
  )
}
