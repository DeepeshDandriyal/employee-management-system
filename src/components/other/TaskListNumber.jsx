import React from "react";

const TaskListNumber = () => {
  return (
    <div className="flex flex-wrap mt-10 justify-start gap-5">
      <div className=" py-6 px-9 rounded-lg bg-red-400 w-[30%]">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className=" py-6 px-9 rounded-lg w-[30%]  bg-blue-400">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className=" py-6 px-9 rounded-lg  bg-yellow-400 w-[30%]">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className=" py-6 px-9 rounded-lg bg-green-400 w-[30%]">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
