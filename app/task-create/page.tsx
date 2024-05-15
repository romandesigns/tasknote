import { createTask } from "@/actions/taskAction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
  return (
    <main className="container py-14 grid grid-cols-1 gap-4 place-content-center">
      {/* Page Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-black">Create a New Task</h1>
        <small>
          Stay current and productive by creating and keeping track of your
          tasks
        </small>
      </div>
      {/* Page Heading */}
      <form action={createTask} className="w-2/5 mx-auto flex flex-col gap-6">
        {/* Task Title */}
        <Label htmlFor="title">
          <span className="inline-block mb-2">Title</span>
          <Input
            required
            type="text"
            name="taskName"
            placeholder="Enter your task title"
          />
        </Label>
        {/* Task Due Date */}
        <Label htmlFor="dueDate">
          <span className="inline-block mb-2">Due Date</span>
          <Input
            type="text"
            pattern="[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}"
            placeholder="MM/DD/YYYY"
            name="dueDate"
            required
            autoFocus
            autoComplete="nope"
          />
        </Label>
        {/* Task Priority */}
        <Label htmlFor="priority">
          <Select name="taskPriority">
            <SelectTrigger>
              <SelectValue placeholder="Select task priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="height">Height</SelectItem>
            </SelectContent>
          </Select>
        </Label>
        {/* Task Description */}
        <Label htmlFor="description">
          <span className="inline-block mb-2">Description</span>
          <Textarea
            className="h-32"
            name="taskDescription"
            placeholder="Enter you task description"
          />
        </Label>
        <Button type="submit" size="lg">
          Send message
        </Button>
      </form>
    </main>
  );
}
