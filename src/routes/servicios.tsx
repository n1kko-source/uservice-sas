import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/servicios")({
  component: ServiciosLayout,
});

function ServiciosLayout() {
  return <Outlet />;
}
