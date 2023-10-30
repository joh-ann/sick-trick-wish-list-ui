import Trick from "../Trick/Trick"
import './TricksList.css'

function TricksList({ tricks }) {
  const allTricks = tricks.map((trick) => {
    return (
      <Trick
        id={trick.id}
        key={trick.id}
        stance={trick.stance}
        name={trick.name}
        obstacle={trick.obstacle}
        tutorial={trick.tutorial}
      />
    )
  })
  
  return (
    <div className="all-tricks">
      {allTricks}
    </div>
  )
}

export default TricksList