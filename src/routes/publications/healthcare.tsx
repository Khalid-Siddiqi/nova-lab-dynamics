import { createFileRoute, redirect } from "@tanstack/react-router";

// Old URL from the previous site; kept so existing links still work.
export const Route = createFileRoute("/publications/healthcare")({
  beforeLoad: () => {
    throw redirect({ to: "/publications", statusCode: 301 });
  },
});
