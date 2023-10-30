import { useState, setState } from 'react';

function Form() {
  const [stance, setStance] = useState("")
  const [trickName, setTrickName] = useState("")
  const [obstacle, setObstacle] = useState("")
  const [link, setLink] = useState("")

  return (
    <form>
      <select id="stance-select" name="stance" onChange={event => setStance(event.target.value)}>
        <option hidden>Choose your Stance</option>
        <option value="regular">Regular</option>
        <option value="switch">Switch</option>
      </select>
      <input
      id="trick-input"
      type="text"
      placeholder="Name of Trick"
      value={trickName}
      onChange={event => setTrickName(event.target.value)}
      />
      <select id="obstacle-select" name="obstacle" onChange={event => setObstacle(event.target.value)}>
        <option hidden>Choose your Obstacle</option>
        <option value="flatground">Flatground</option>
        <option value="ledge">Ledge</option>
        <option value="rail">Rail</option>
        <option value="stairs">Stairs</option>
        <option value="pool">Pool</option>
      </select>
      <input
      id="link-input"
      type="text"
      placeholder="Link to Tutorial"
      onChange={event => setLink(event.target.value)}
      />
      <button className="send-it-btn">
        Send It!
      </button>
    </form>
  )
}

export default Form