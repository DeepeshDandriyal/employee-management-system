import React from "react";

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        action=""
        className="flex items-start justify-between flex-wrap   w-full"
      >
        <div className="w-1/2 ">
          <div className="">
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="Make a task"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="Make a task"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="Make a task"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="Make a task"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start ">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            name=""
            id=""
            className=" w-full h-44 text-sm bg-transparent border-[1px] border-gray-400 outline-none rounded px-4 py-2"
          ></textarea>

          <button className="bg-green-700 py-3 px-5 text-sm mt-4 w-full  rounded-md hover:bg-white hover:text-green-700">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
