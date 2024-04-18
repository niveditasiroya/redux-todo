import React from "react";
import { removeUser, selectEdit } from "../store/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";

const List = () => {
  const dataList = useSelector((state) => {
    return state.contacts.todo;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <ul className="flex flex-wrap gap-2 justify-between">
        {dataList?.map((data, index) => (
          <li key={index} className="p-2 border rounded-md  w-full md:w-[32%]">
            <div>
              <div className="text-base">{data.name}</div>
              <div className="text-lg">{data.number}</div>
            </div>
            <button onClick={() => dispatch(removeUser(data.id))} >Del</button>
            <button onClick={() => dispatch(selectEdit(data.id))} >edit</button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
