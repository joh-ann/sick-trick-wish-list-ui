import './Trick.css'

function Trick({ id, stance, name, obstacle, tutorial}) {
  return (
    <div className="trick">
      <p>{stance.charAt(0).toUpperCase() + stance.slice(1)} {name.charAt(0).toUpperCase() + name.slice(1)}</p>
      <p>Obstacle: {obstacle.charAt(0).toUpperCase() + obstacle.slice(1)}</p>
      <p>Link to Tutorial:</p>
      <a href={tutorial}>{tutorial}</a>
    </div>
  )
}

export default Trick