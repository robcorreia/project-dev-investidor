import { Button } from "@mui/material";
import PageHeader from "_common/components/PageHeader";

const UsersListView = () => {
  const newUserButton = <Button>Novo</Button>;
  return (
    <>
      <PageHeader title="Usuários" actionButton={newUserButton} />
    </>
  );
};

export default UsersListView;
