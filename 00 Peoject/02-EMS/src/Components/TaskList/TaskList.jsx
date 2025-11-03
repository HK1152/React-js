import React from "react";
import AcceptList from "./AcceptList";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./failedTask";

function TaskList({ data }) {
  // Safe logging: only iterate when data.tasks exists
  // if (data?.tasks?.length) {
  //   data.tasks.forEach((task) => {
  //     //   console.log(task.newTask);
  //   });
  // }

  return (
    <div
      id="tasklist"
      className="h-[55%] w-full  mt-10 py-5 flex items-center flex-nowrap justify-start gap-10 overflow-x-auto"
    >
      {data.tasks.map((elm,index) => {
        if (elm.newTask) {
          return <NewTask key={index} data={elm}/>;
        }
        if (elm.failed) {
          return <FailedTask key={index} data={elm}/>;
        }
        if (elm.completed) {
          return <CompleteTask key={index} data={elm}/>;
        }
        if (elm.active) {
          return <AcceptList key={index} data={elm}/>;
        }
      })}

      {/* <AcceptList />
            <NewTask />
            <CompleteTask />
            <FailedTask /> */}
    </div>
  );
}

export default TaskList;
