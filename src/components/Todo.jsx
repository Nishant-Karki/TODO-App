import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { AiFillDelete } from "react-icons/ai";

import "./Cards.css";

function Todo({ items, tasks, onDelete, taskNo }) {
  return (
    <div className="row">
      <div className="col-md-5  offset-1 offset-md-3 mt-5">
        <Card>
          <CardContent>
            <Typography color="textSecondary" variant="h5" align="center">
              {items.length} Task to Do
            </Typography>

            <div className="list-group mt-3 d-flex">
              {items.map((task, index) =>
                task === "" ? null : (
                  <div key={index} className="list-group-item">
                    <Typography className={tasks}>
                      {task}
                      <button
                        className="btn btn-danger btn-sm float-right"
                        onClick={() => onDelete(task)}
                      >
                        <AiFillDelete color="white" size={15} />
                      </button>
                    </Typography>
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Todo;
