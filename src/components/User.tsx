import React from "react";

interface IUser {
  nome: string;
  email: string;
}

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <strong>Nome: </strong> {user.nome} <br />
      <strong>Email: </strong> {user.email} <br />
    </div>
  )
}

export default User;