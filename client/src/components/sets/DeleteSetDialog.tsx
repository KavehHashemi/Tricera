import { useState } from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Title from "@mui/material/DialogTitle";
import Actions from "@mui/material/DialogActions";
import Content from "@mui/material/DialogContent";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMutation } from "@apollo/client";
import { DELETE_SET_MUTATION, USER_SETS_QUERY } from "../../graphql";
import { useAppSelector } from "../../store/hooks";
import { useAuth0 } from "@auth0/auth0-react";

type props = {
  id: string;
  name: string;
};

const DeleteSetDialog = ({ id, name }: props) => {
  const { user } = useAuth0();
  const owner = user?.sub?.split("|")[1];
  const { isLightMode } = useAppSelector((state) => state.mode);
  const [open, setOpen] = useState(false);
  const [deleteSetMutation] = useMutation(DELETE_SET_MUTATION, {
    refetchQueries: [{ query: USER_SETS_QUERY, variables: { userId: owner } }],
  });
  const deleteSet = () => {
    deleteSetMutation({ variables: { id: id } });
    setOpen(false);
  };
  return (
    <>
      <div style={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
        <DeleteIcon></DeleteIcon>
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Title sx={{ color: isLightMode ? "#242424" : "whitesmoke" }}>
          Delete Set {name}
        </Title>
        <Content>
          <div>Are you sure you want to delete set {name}?</div>
        </Content>
        <Actions>
          <Button onClick={deleteSet}>Delete</Button>
        </Actions>
      </Dialog>
    </>
  );
};

export default DeleteSetDialog;
