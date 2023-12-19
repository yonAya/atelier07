import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'
import { AiFillPlusCircle } from 'react-icons/ai'
import { VscGraph } from 'react-icons/vsc'
import { HiSwitchHorizontal } from 'react-icons/hi'
import { BiTrashAlt } from 'react-icons/bi'

function ToDoListApp() {
  const [tasks, setTasks] = useState([
    { description: 'Réviser HTML/CSS', completed: true },
    { description: 'Réviser mongodb', completed: false },
    { description: 'Réviser Javascript', completed: false },
  ])

  const [task, setTask] = useState('')

  const handleOnChange = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { description: task, completed: false }])
    }
    setTask('')
  }
  return (
    <div className="todolistapp">
      <div className="traitement">
        <fieldset className="ajouter">
          <legend>Ajout</legend>
          <input
            type="text"
            name="task"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleOnChange}>
            <AiFillPlusCircle />
            Add
          </button>
        </fieldset>

        <fieldset className="supprimer">
          <legend>Suppression</legend>
          <button onClick={() => setTasks([])}>Tous</button>
          <button
            onClick={() =>
              setTasks((tasks) => tasks.filter((t) => t.completed === false))
            }
          >
            Terminé
          </button>
          <button
            onClick={() =>
              setTasks((tasks) => tasks.filter((t) => t.completed === true))
            }
          >
            En cours
          </button>
        </fieldset>
        <fieldset className="modifier">
          <legend>Modification</legend>
          <button
            onClick={() =>
              setTasks(() => tasks.map((t) => ({ ...t, completed: true })))
            }
          >
            Termier tous
          </button>
          <button
            onClick={() =>
              setTasks(() => tasks.map((t) => ({ ...t, completed: false })))
            }
          >
            En cours tous
          </button>
        </fieldset>
      </div>

      <div className="tasks">
        <div className="statics">
          <VscGraph />
          <div>
            <p>{tasks.length} : Taches</p>
            <p>{tasks.filter((t) => t.completed === true).length} : Terminée</p>
            <p>
              {tasks.filter((t) => t.completed === false).length} : En cours
            </p>
          </div>
        </div>
        <div className="taches">
          {tasks.map((task, index) => (
            <p className="task" key={index}>
              {task.completed ? <AiOutlineCheck /> : <ImCancelCircle />}
              {task.description}
              <div className="btns">
                <button
                  className="btn"
                  onClick={(ind) => {
                    setTasks((taches) =>
                      taches.map((t, index) =>
                        index === ind ? { ...t, completed: !t.completed } : t
                      )
                    )
                  }}
                >
                  <HiSwitchHorizontal />
                </button>
                <button
                  className="btn"
                  onClick={(index) =>
                    setTasks((tasks) => tasks.filter((t, ind) => ind !== index))
                  }
                >
                  <BiTrashAlt />
                </button>
              </div>
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ToDoListApp
