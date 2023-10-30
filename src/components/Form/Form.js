import { useState } from 'react';

function Form({ addTrick }) {
  const [stance, setStance] = useState("")
  const [trickName, setTrickName] = useState("")
  const [obstacle, setObstacle] = useState("")
  const [link, setLink] = useState("")

  function sendTrick(event) {
    event.preventDefault()
    const newTrick = {
      stance: stance,
      name: trickName,
      obstacle: obstacle,
      tutorial: link
    }
    addTrick(newTrick)
    clearForm()
  }

  function clearForm() {
    setStance("")
    setTrickName("")
    setObstacle("")
    setLink("")
  }

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
      name="trickName"
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
      name="link"
      placeholder="Link to Tutorial"
      value={link}
      onChange={event => setLink(event.target.value)}
      />
      <button className="send-it-btn" onClick={(event) => sendTrick(event)}>
        Send It!
      </button>
    </form>
  )
}

export default Form