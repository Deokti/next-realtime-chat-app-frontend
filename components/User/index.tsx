import { Avatar } from "@mui/material";
import * as React from "react";
import styles from "./User.module.scss";
import cn from "classnames";
import { IUser } from "../../interfaces/auth";
import { UserProps } from "./User.props";
import { StyledBadge } from "./StyledBadge";

export const User = (props: UserProps): React.ReactElement => {
  const { user, isSelected } = props;

  return (
    <div className={cn(styles.wrapper, { [styles.isSelected]: isSelected })}>
      <div className={styles.status}>
        <UserBridge user={user} />
      </div>

      <div className={cn(styles.info, "ml-15")}>
        <div className="d-flex justify-between align-center">
          <h2 className={styles.name}>{user.username}</h2>
          <span className={styles.time}>11:01</span>
        </div>
        <div className="d-flex justify-between align-center">
          <p className={styles.message}>
            Просто последнее сообщение которое будет здесь
          </p>
          <span className={styles.count}>4</span>
        </div>
      </div>
    </div>
  );
};

const UserBridge = ({ user }: { user: IUser }): React.ReactElement => {
  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      color={user.isOnline ? "success" : "error"}
      variant="dot"
    >
      <Avatar alt={user.username} src={user.avatar} />
    </StyledBadge>
  );
};
