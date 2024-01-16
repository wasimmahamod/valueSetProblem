import React, { useEffect, useState } from "react";
import { FaAngellist } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { RiDeleteBinFill } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { IoArrowRedoCircle } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";
import {
  getDatabase,
  push,
  ref,
  set,
  onValue,
  remove,
  update,
} from "firebase/database";
const List = () => {
  const db = getDatabase();
  const [todo, setTodo] = useState("");
  const [todolist, setTodolist] = useState([]);
  const [updateModal, setUpdateModal] = useState(false);
  const [did, setDid] = useState("");

  const [updateTaskValue, setUpdateTaskValue] = useState("");
  let handelSubmit = () => {
    set(push(ref(db, "todo/")), {
      todo: todo,
    }).then(() => {
      setTodo("");
    });
  };
  useEffect(() => {
    const todolistRef = ref(db, "todo/");
    onValue(todolistRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push({ item: item.val(), id: item.key });
      });
      setTodolist(array);
    });
  }, []);

  let handleDelete = (item) => {
    remove(ref(db, "todo/" + item.id));
  };
  let handleUpdateModal = (item) => {
    setUpdateModal(true);
    setDid(item.id);
    setUpdateTaskValue(item.item.todo);
  };
  let handleUpdate = () => {
    update(ref(db, "todo/" + did), {
      todo: updateTaskValue,
    }).then(() => {
      setUpdateModal(false);
    });
  };

  return (
    <div className="flex justify-center h-screen bg-orange-50">
      <div>
        <h1 className="mt-3 font-serif text-3xl font-semibold text-center text-yellow-600">
          TO-DO LIST
          <FaAngellist className="inline-block text-4xl" />
        </h1>
        <div class="relative w-[600px] mt-10">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            id="floating_helper"
            aria-describedby="floating_helper_text"
            class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-lg text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            placeholder=" "
          />
          <label
            for="floating_helper"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Write your tasks
          </label>
          <button onClick={handelSubmit}>
            <IoIosAddCircle className="absolute right-0 text-4xl text-yellow-700 bottom-8" />
          </button>
        </div>
        <div className="bg-white w-[550px] h-[250px] mx-auto mt-[20px] overflow-y-scroll relative pt-5 pl-3">
          <ul>
            {todolist.map((m, i) => (
              <li
                key={i}
                className="flex justify-between mb-3 font-sans text-2xl font-semibold text-yellow-900"
              >
                {m.item.todo}
                <div>
                  <button
                    onClick={() => handleUpdateModal(m)}
                    className="mr-10"
                  >
                    <GrUpdate />
                  </button>
                  <button onClick={() => handleDelete(m)}>
                    <RiDeleteBinFill />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          {updateModal && (
            <div className=" w-full h-[500px] bg-orange-100 absolute top-0 left-0  px-5">
              <h2 className="mt-3 mb-5 font-serif text-3xl font-semibold text-center text-yellow-600">
                Update Your Todo List
              </h2>
              <input
                onChange={(e) => setUpdateTaskValue(e.target.value)}
                className="h-[40px] w-full px-4 outline-orange-500 outline"
                type="text"
                placeholder={""}
                value={updateTaskValue}
              />
              <div className="mt-5">
                <button
                  onClick={handleUpdate}
                  className="text-2xl text-orange-700 "
                >
                  <IoArrowRedoCircle />
                </button>
                <button
                  onClick={() => setUpdateModal(false)}
                  className="ml-5 text-2xl text-red-800 "
                >
                  <ImCancelCircle />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
