import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Dashboard = lazy(() => import("../modules/dashboard/Dashboard/Dashboard"));
const Tasks = lazy(() => import("../modules/tasks/TasksList/TasksList"));
const Users = lazy(() => import("../modules/users/UsersList/UsersList"));

const MainRouter = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <Suspense fallback={<span>/...loading</span>}>
            <Dashboard />
          </Suspense>
        }
      />
      <Route
        path="/usuarios"
        element={
          <Suspense fallback={<span>/...loading</span>}>
            <Users />
          </Suspense>
        }
      />
      <Route
        path="/tarefas"
        element={
          <Suspense fallback={<span>/...loading</span>}>
            <Tasks />
          </Suspense>
        }
      />
      {/* <Route path="/*" element={<Navigate to="/dashboard" />} /> */}
    </Routes>
  );
};

export default MainRouter;
