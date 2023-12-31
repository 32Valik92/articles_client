import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, {FC} from "react";

import styles from "./AddComment.module.scss";

const AddComment: FC = () => {
   return (
      <>
         <div className={styles.root}>
            <Avatar
               classes={{root: styles.avatar}}
               src="https://mui.com/static/images/avatar/5.jpg"
            />
            <div className={styles.form}>
               <TextField
                  label="Add comment"
                  variant="outlined"
                  maxRows={10}
                  multiline
                  fullWidth
               />
               <Button variant="contained">Submit</Button>
            </div>
         </div>
      </>
   );
};

export {AddComment};