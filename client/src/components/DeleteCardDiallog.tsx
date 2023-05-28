import { useState } from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Title from "@mui/material/DialogTitle";
import Actions from "@mui/material/DialogActions";
import Content from "@mui/material/DialogContent";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMutation } from "@apollo/client";
import { CARDS_QUERY, DELETE_CARD_MUTATION, SETS_QUERY } from "../graphql";
type props = {
  id: string;
  setId: string;
};
const DeleteCardDiallog = ({ id, setId }: props) => {
  const [open, setOpen] = useState(false);
  const [deleteCardMutation] = useMutation(DELETE_CARD_MUTATION, {
    refetchQueries: [
      { query: CARDS_QUERY, variables: { id: setId } },
      { query: SETS_QUERY },
    ],
  });
  const editCard = () => {
    deleteCardMutation({
      variables: {
        id: id,
        set: setId,
      },
    });
    setOpen(false);
  };
  return (
    <>
      <div style={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
        <DeleteIcon></DeleteIcon>
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Title>Delete Card</Title>
        <Content>Are you sure you want to delete this card?</Content>
        <Actions>
          <Button onClick={editCard}>Delete</Button>
        </Actions>
      </Dialog>
    </>
  );
};

export default DeleteCardDiallog;
