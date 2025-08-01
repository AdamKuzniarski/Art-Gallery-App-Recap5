import styled from "styled-components";
export default function ArtPieceForm({ onSubmit }) {
  //Verarbeitung der Formulardaten
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmit(data);

    event.target.reset();
  }

  //Das Formular
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Comment:</h3>

      <StyledTextArea
        name="comment"
        placeholder="Enter your comment here..."
        rows="4"
        required
      />

      <StyledButton type="submit">Send</StyledButton>
    </form>
  );
}

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
`;
const StyledButton = styled.button`
  background: red;
  width: 100%;
  padding: 12px;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
`;
