import LazyLoading from "_common/components/LazyLoading";
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Dashboard = lazy(() => import("./modules/dashboard/Dashboard"));
const Users = lazy(() => import("./modules/users/Users"));
const Tasks = lazy(() => import("./modules/tasks/Tasks"));

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
      <Route path="/*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default MainRouter;
