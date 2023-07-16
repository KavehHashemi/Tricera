import "../../style/style.scss";
import { useState } from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Title from "@mui/material/DialogTitle";
import Actions from "@mui/material/DialogActions";
import Content from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { useMutation } from "@apollo/client";
import { ADD_SET_MUTATION, USER_SETS_QUERY } from "../../graphql";
import { useAuth0 } from "@auth0/auth0-react";

const AddSetDialog = () => {
  const { user } = useAuth0();
  const owner = user?.sub?.split("|")[1];
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [addSetMutation] = useMutation(ADD_SET_MUTATION, {
    refetchQueries: [
      {
        query: USER_SETS_QUERY,
        variables: { userId: owner },
      },
    ],
  });
  const saveNewSet = () => {
    console.log(owner);
    addSetMutation({
      variables: { name: name, owner: owner },
    });
    setName("");
    setOpen(false);
  };
  return (
    <>
      <div className={"new-card"} onClick={() => setOpen(true)}>
        <AddIcon></AddIcon>
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Title>Add New Set</Title>
        <Content>
          <div className="dialog">
            <TextField
              name="set-name"
              label="Set Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></TextField>
          </div>
        </Content>
        <Actions>
          <Button onClick={saveNewSet}>Add</Button>
        </Actions>
      </Dialog>
    </>
  );
};

export default AddSetDialog;
