import { ClientComponent } from "./ClientComponent";

export const metadata = {
  title: "Test",
};

export const runtime = "edge";

export default async function Home() {
  return <ClientComponent />;
}
