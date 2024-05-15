import { CardComponent } from "@/components/Card";
import prisma from "@/lib/prismaClient";
import { Tasks } from "@prisma/client";

async function getAllTasks() {
  const tasks = await prisma.tasks.findMany();
  return tasks;
}

export default async function Home() {
  const tasks = await getAllTasks();

  return (
    <main className="container grid grid-cols-4 gap-40 min-h-screen grid-flow-row items-stretch">
      {tasks.map((task: Tasks) => (
        <div key={task.id} className="block w-full h-full">
          <CardComponent {...task} />
        </div>
      ))}
    </main>
  );
}
