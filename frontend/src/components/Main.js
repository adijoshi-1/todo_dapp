/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from 'axios'
const url = process.env.REACT_APP_BACKEND

export const Main = ({ account }) => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    completed: false
  })
  const [taskList, setTaskList] = useState([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    getAllTasks()
  }, [])

  const getAllTasks = async () => {
    try {
      let counter = await axios.get(url + '/task/counter')
      counter = parseInt(counter.data.counter)

      for (let i = 0; i < counter; i++) {
        const { data } = await axios.get(url + '/task?id=' + i)
        setTaskList((oldArray) => [...oldArray, data])
      }
    } catch (err) {
      console.log(err)
    }
  }

  const addTask = async () => {
    try {
      const { ethereum } = window
      const { data } = await axios.post(url + '/task', {
        ...taskData
      })
      const params = [
        {
          from: account,
          to: data.contract_to_interact,
          data: data.encoded_abi
        }
      ]
      await ethereum.request({
        method: 'eth_sendTransaction',
        params
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className="buttons">
        <button
          className="button is-info"
          onClick={(e) => {
            e.preventDefault()
            setShowModal(true)
          }}
        >
          Add Task
        </button>
      </div>
      <div className={showModal ? 'modal is-active' : 'modal'}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Add Task</p>
            <button
              className="delete"
              onClick={() => setShowModal(false)}
            ></button>
          </header>
          <section className="modal-card-body">
            <div className="control">
              <div className="field">
                <label className="label">Title</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Enter title for the task"
                  onChange={(e) => {
                    e.preventDefault()
                    setTaskData({
                      ...taskData,
                      title: e.target.value
                    })
                  }}
                />
              </div>

              <div className="field">
                <label className="label">Description</label>
                <textarea
                  className="textarea"
                  placeholder="Enter task description"
                  onChange={(e) => {
                    e.preventDefault()
                    setTaskData({
                      ...taskData,
                      description: e.target.value
                    })
                  }}
                ></textarea>
              </div>

              <div className="field">
                <label className="label">Completed</label>
                <div className="control">
                  <div className="select">
                    <select
                      onClick={(e) => {
                        setTaskData({
                          ...taskData,
                          completed: e.target.value
                        })
                      }}
                    >
                      <option value={false}>False</option>
                      <option value={true}>True</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={addTask}>
              Add Task
            </button>
            <button className="button" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </>
  )
}
