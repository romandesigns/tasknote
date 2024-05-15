import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./Badge";
import { Tasks } from "@prisma/client";
import moment from "moment";
import { deleteTask } from "@/actions/taskAction";

export function CardComponent({
  id,
  title,
  dueDate,
  description,
  taskPriority,
}: Tasks) {
  const daysRemaining = moment(dueDate).diff(moment(), "days").toString();
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge priority={"high"} />
        </div>
        <CardDescription className="flex flex-col">
          <span>Due Date: {dueDate}</span>
          <span className="text-xs text-yellow-600">
            {daysRemaining} remaining{" "}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex justify-start gap-4">
        <Button variant="outline">Edit</Button>
        <form>
          <input type="text" name="taskId" value={id} className="hidden" />
          <Button formAction={deleteTask}>Delete</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
