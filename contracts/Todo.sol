// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @title Todo Dapp Smart Contract
 * @author Aditya Joshi
*/

contract Todo {
    /**
     * @notice This address is immutable and will be the permanent
     * owner of this smart contract
     */
    address private immutable owner;

    /**
     * @dev This is the structure where the contract store all the
     * information about the tasks.
     */
    struct Tasks {
        string title;
        string description;
        bool isCompleted;
        bool isRemoved;
    }

    /**
     * @dev This is the array for our structure of tasks
     *
     * @notice You can access the data residing inside using index
     */
    Tasks[] private tasks;

    /**
     * @dev This is the counter to keep track of how many tasks have
     * been entered inside the array of tasks
     *
     * @notice This counter will only increment dispite if the tasks are removed
     * or not
     */
    uint private tasksCounter;

    /**
     * @notice Constructor to initialize the immutable owner of the contract
     */
    constructor() {
        owner = msg.sender;
    }

    /**
     * @dev This receive function enables anyone to donate ether to the
     * owner of the smart contract.
     *
     * @notice It will not store the ethers in the smart contract, it will
     * directly send the ethers to owner of the contract.
     */

    receive() external payable {
        (bool success, ) = payable(owner).call{value: msg.value}("");
        require(success, "Cannot donate");
    }

    ///////////////////////////////
    /////   View Functions   //////
    ///////////////////////////////

    /**
     * @dev Returns owner address of the contract.
     */
    function getOwner() external view returns(address) {
        return owner;
    }

    /**
     * @dev Returns Task Details of a particular id.
     *
     * Requirements:
     *
     * `id` must be less than tasks counter.
     *
     */
    function getTaskDetails(
        uint _id
    )
        external
        view
        returns(
            string memory title,
            string memory description,
            bool isCompleted,
            bool isRemoved
        )
    {
        require(_id < tasksCounter, "Enter a valid task Id");
        return(
            title = tasks[_id].title,
            description = tasks[_id].description,
            isCompleted = tasks[_id].isCompleted,
            isRemoved = tasks[_id].isRemoved
        );
    }

    /**
     * @dev Returns the number of tasks that have to added to the
     * Tasks array.
     */
    function getTasksCounter() external view returns(uint) {
        return tasksCounter;
    }

    ////////////////////////////////////
    ////   Modification Functions   ////
    ///////////////////////////////////

    /**
     * @dev addTask function takes 3 parameters. _title, _description and _completed.
     *
     * It will push the data in the tasks array.
     */
    function addTask(string memory _title, string memory _description, bool _completed) external {
        Tasks memory task = Tasks({
            title: _title,
            description: _description,
            isCompleted: _completed,
            isRemoved: false
        });

        tasks.push(task);
        tasksCounter += 1;
    }

    /**
     * @dev removeTask function takes 1 paramets. _id. It will
     * assign the task with _id isRemoved to true.
     *
     * Requirements:
     *
     * `_id` must be less than tasksCounter.
     *
     * `tasks[_id]` must not be already removed.
     */
    function removeTask(uint _id) external {
        require(_id < tasksCounter, "Enter a valid task Id");
        require(!tasks[_id].isRemoved, "Tasks already removed");

        tasks[_id].isRemoved = true;
    }

    /**
     * @dev updateTask function takes 3 parameters. _id, _title and _description.
     * and will update the task depending upon the _id with new _title and
     * _description.
     *
     * Requirements:
     *
     * `_id` must be less than tasksCounter.
     *
     * `tasks[_id]` must not be in removed state.
     */
    function updateTask(uint _id, string memory _title, string memory _description) external {
        require(_id < tasksCounter, "Enter a valid task Id");
        require(!tasks[_id].isRemoved, "Task Does not exists");

        tasks[_id].title = _title;
        tasks[_id].description = _description;
    }

    /**
     * @dev completeTask function takes 1 parameter. _id. It will assign the isCompleted
     * state of the task with _id to true.
     *
     * Requirements:
     *
     * `_id` must be less then tasksCounter.
     *
     * `tasks[_id]` must not be already removed.
     *
     * `tasks[_id]` must not be already in completed state.
     */
    function completeTask(uint _id) external {
        require(_id < tasksCounter, "Enter a valid task Id");
        require(!tasks[_id].isRemoved, "Task Does not exists");
        require(!tasks[_id].isCompleted, "Task already marked as complete");

        tasks[_id].isCompleted = true;
    }

    /**
     * @dev unCompleteTask function takes 1 parameter. It will assign the isCompleted
     * state of the task with _id to false.
     *
     * Requirements:
     *
     * `_id` must be less than tasksCounter
     *
     * `tasks[_id]` must not be already removed.
     *
     * `tasks[_id]` must not be already in incomplete state.
     */
    function unCompleteTask(uint _id) external {
        require(_id < tasksCounter, "Enter a valid task Id");
        require(!tasks[_id].isRemoved, "Task Does not exists");
        require(tasks[_id].isCompleted, "Task already marked as incomplete");

        tasks[_id].isCompleted = false;
    }
}