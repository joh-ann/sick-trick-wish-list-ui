import './Trick.css'

function Trick({ id, stance, name, obstacle, tutorial}) {
  return (
    <div className="trick">
      <p>{stance} {name}</p>
      <p>Obstacle: {obstacle}</p>
      <p>Link to Tutorial: {tutorial}</p>
    </div>
  )
}

export default Trick