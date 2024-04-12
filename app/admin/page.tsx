import { getIsAdmin } from "@/lib/admin";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

// import App from "./app";

const App = dynamic(() => import("./app"), { ssr: false });

// removed: async and await
const AdminPage = () => {
  const isAdmin = getIsAdmin();

  if (!isAdmin) {
    redirect("/");
  }
  return <App />;
};

export default AdminPage;
