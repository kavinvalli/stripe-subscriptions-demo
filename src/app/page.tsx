import Image from "next/image";

export default function Home() {
  return (
    <main className="h-[calc(100vh-57px)] flex gap-4 justify-center items-center">
      <Image width={100} height={100} src="/logo.png" alt="" />
      <h1 className="text-6xl font-bold">Subscriptions Demo</h1>
    </main>
  );
}
