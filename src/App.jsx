import StarCursor from './components/StarCursor.jsx'
import PhotoPlaceholder from './components/PhotoPlaceholder.jsx'

export default function App() {
  return (
    <div className="app">
      <StarCursor />
      <div className="notebook">
        <div className="notebook-binding" aria-hidden="true" />
        <div className="notebook-margin" aria-hidden="true" />
        <div className="notebook-content">
          <PhotoPlaceholder />
        </div>
      </div>
    </div>
  )
}
