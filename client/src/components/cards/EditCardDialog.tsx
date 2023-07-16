import { useState } from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Title from "@mui/material/DialogTitle";
import Actions from "@mui/material/DialogActions";
import Content from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import { useMutation } from "@apollo/client";
import { CARDS_QUERY, EDIT_CARD_MUTATION } from "../../graphql";
type props = {
  id: string;
  question: string;
  answer: string;
  setId: string;
};

const EditCardDialog = ({ id, question, answer, setId }: props) => {
  const [open, setOpen] = useState(false);
  const [editedCard, setEditedCard] = useState<props>({
    question: question,
    answer: answer,
    id: id,
    setId: setId,
  });
  const [editCardMutation] = useMutation(EDIT_CARD_MUTATION, {
    refetchQueries: [{ query: CARDS_QUERY, variables: { id: setId } }],
  });
  const editCard = () => {
    editCardMutation({
      variables: {
        id: id,
        question: editedCard.question,
        answer: editedCard.answer,
        set: setId,
      },
    });
    setOpen(false);
  };
  return (
    <>
      <div style={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
        <EditIcon></EditIcon>
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Title>Edit Card</Title>
        <Content>
          <div className="dialog">
            <TextField
              name="card-question"
              label="Question"
              variant="outlined"
              value={editedCard.question}
              onChange={(e) =>
                setEditedCard({ ...editedCard, question: e.target.value })
              }
            ></TextField>
            <TextField
              name="card-answer"
              label="Answer"
              variant="outlined"
              value={editedCard.answer}
              onChange={(e) =>
                setEditedCard({ ...editedCard, answer: e.target.value })
              }
            ></TextField>
          </div>
        </Content>
        <Actions>
          <Button onClick={editCard}>Edit</Button>
        </Actions>
      </Dialog>
    </>
  );
};

export default EditCardDialog;
