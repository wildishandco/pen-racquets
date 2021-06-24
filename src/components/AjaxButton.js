import * as React from "react";
// import axios from "axios";
import { useGameStateContext } from "../reducer/gameReducer";

export default function AjaxButton({ setFormSubmitted, ...rest }) {
  const formRef = React.useRef(null);
  const { id, score, prize } = useGameStateContext();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // setFormSubmitted(true);
  };

  return (
    <>
      <form
        action="https://www.penhaligons.com/uk/en/ajax/truck-game/submit"
        method="post"
        ref={formRef}
        {...rest}
      >
        <input type="hidden" name="userScore" value={score} />
        <input type="hidden" name="userAttempts" value="1" />
        <input type="hidden" name="userPrize" value={prize} />
        <button
          className="button"
          type="submit"
          onClick={(e) => handleFormSubmit(e)}
          style={{ margin: 0, textTransform: "uppercase" }}
        >
          Add to bag
        </button>
      </form>
    </>
  );
}