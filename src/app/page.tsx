import { ClientComponent } from "./ClientComponent";

export const metadata = {
  title: "Test",
};

export const runtime = "nodejs";

export default async function Home() {
  return <ClientComponent />;
}
