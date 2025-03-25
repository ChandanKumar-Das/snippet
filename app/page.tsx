import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  try {
    const snippets = await prisma.snippet.findMany();
    console.log("Fetched Snippets:", snippets);

    return (
      <>
        <h1 className="text-black font-bold text-2xl">Home</h1>
        <div className="flex justify-between my-10">
          <h1 className="text-xl">Snippets</h1>
          <Link href={"snippets/new"}>
            <Button>Add New</Button>
          </Link>
        </div>
        {snippets.length > 0 ? (snippets.map((snippet) => (
          <div
            key={snippet.id}
            className="flex bg-gray-200 p-4 rounded-b-lg mb-4 justify-between"
          >
            <h1 className="text-xl">{snippet?.title}</h1>
            <Link href={`snippets/${snippet.id}`}>
              <Button variant={"link"}>View</Button>
            </Link>
          </div>
        ))) : <div>No Snippets</div>}
      </>
    );
  } catch (error) {
    console.error("Database error:", error);
    return <h1 className="text-red-500">Error fetching snippets.</h1>;
  }
}

