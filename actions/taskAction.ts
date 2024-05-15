"use server";

import prisma from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createTask = async (formData: FormData) => {
  console.log(formData);

  const data = {
    title: formData.get("taskName") as string,
    dueDate: formData.get("dueDate") as string,
    taskPriority: formData.get("taskPriority") as string,
    description: formData.get("taskDescription") as string,
  };

  const newTask = await prisma.tasks.create({
    data: {
      title: data.title,
      dueDate: data.dueDate,
      taskPriority: data.taskPriority,
      description: data.description,
    },
  });

  if (newTask) {
    revalidatePath("/");
    redirect("/");
  }
};

export const deleteTask = async (formData: FormData) => {
  console.log(formData);

  const data = {
    id: formData.get("taskId") as string,
  };

  try {
    const deletedTask = await prisma.tasks.delete({
      where: {
        id: data.id,
      },
    });

    if (deletedTask) {
      revalidatePath("/");
      redirect("/");
    }
  } catch (error) {
    console.error(error);
  }
};
