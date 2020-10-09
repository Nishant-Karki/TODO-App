import React, { useState } from "react";
import { Card, CardContent, TextField, Typography } from "@material-ui/core";
import { MdPlaylistAdd } from "react-icons/md";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { SiMaterialUi } from "react-icons/si";

import "./Cards.css";
import Todo from "./Todo";

function Cards() {
  const [tasks, setTasks] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    let value = e.target.value;

    setTasks(value);
  };

  const clear = () => {
    setTasks("");
  };

  const handleItems = (e) => {
    e.preventDefault();
    clear();
    if (tasks !== "") {
      setItems((old) => {
        return [...old, tasks];
      });
    }
  };

  const handleDelete = (task) => {
    let newItems = items.filter((item) => item !== task);
    setItems(newItems);
  };

  return (
    <>
      <small className="d-flex">
        Developed By: <span className="text-info">Nishant Karki</span>, Using
        React JS <FaReact color="#61DBFB" size={22} />, Material UI &nbsp;
        <SiMaterialUi color="#1769aa" size={22} />
        &nbsp; and Bootstrap &nbsp;
        <FaBootstrap color="#181935" size={22} />
      </small>
      <div className="container">
        <div className="row">
          <div className="col-md-5  offset-1 offset-md-3 mt-5">
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" variant="h5">
                  TODO List
                </Typography>

                <form onSubmit={handleItems} className="mt-3 d-flex">
                  <TextField
                    label="Add Tasks"
                    variant="outlined"
                    className=""
                    style={{ width: "22rem" }}
                    onChange={handleChange}
                    value={tasks}
                    inputProps={{ maxLength: 35 }}
                  />
                  <button type="submit" className="btn btn-success btn-sm m-2">
                    <MdPlaylistAdd size={30} />
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        <Todo items={items} tasks={tasks} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default Cards;
