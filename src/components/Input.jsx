import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/slice/userSlice";

const Input = () => {
  const selectedEdit = useSelector((state) => state.contacts.editDo)
  const [name, setName] = useState('');
  const [number, setNumber] = useState("");
  const [isEdit, setIsEdit] = useState(false)

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedEdit.name && selectedEdit.number ) {
      setName(selectedEdit.name)
      setNumber(selectedEdit.number)
      setIsEdit(true)
    }
  }, [selectedEdit])

  console.log(
    selectedEdit
  );

  const addUserData = () => {
    const newData = {
      name: name,
      number: number,
    };
    dispatch(addUser(newData));
    setName('')
    setNumber('')
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const numberHandler = (e) => {
    setNumber(e.target.value);
  };


  return (
    <>
      <div>
        <input
          onChange={nameHandler}
          type="text"
          placeholder="username"
          className="px-3 py-2 border-2 rounded-md text-black"
          value={name}
        />
      </div>
      <div>
        <input
          onChange={numberHandler}
          type="phone"
          placeholder="number"
          className="px-3 py-2 border-2 rounded-md text-black"
          value={number}
        />
      </div>
      <div>
        <button
          onClick={ isEdit ? editHandler : addUserData}
          className="border rounded-md px-10 py-2 bg-green-400"
        >
          { isEdit ? 'edit' : 'Add'}
        </button>
      </div>
    </>
  );
};

export default Input;
