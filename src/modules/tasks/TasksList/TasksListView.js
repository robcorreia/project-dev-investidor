import { Button } from "@mui/material";
import PageHeader from "_common/components/PageHeader";

const TasksListView = () => {
  const newTaskButton = <Button>Nova</Button>;
  return (
    <>
      <PageHeader title="Tarefas" actionButton={newTaskButton} />
    </>
  );
};

export default TasksListView;
