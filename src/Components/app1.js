<div className="container mt-2">
    <div className="d-flex pa2 bg-light-blue">
        <div className="">
            <h2>ToDo's List</h2>
        </div>
        <div className="ml-auto pt2 add-icon">
            <i class="fa fa-plus add-todo-icon" aria-hidden="true" data-toggle="modal" data-target="#addTodo"></i>
        </div>
    </div>
    <hr className="line" />
    <TodosList initialTodos={initialTodos} />
    <div className="d-flex pa2 mt-4 bg-light-blue">
        <div className="">
            <h2>Completed ToDo's</h2>
        </div>
        <div className="ml-auto pt2 add-icon">
            <p><strong>Clear</strong></p>
        </div>
    </div>
    <hr className="line" />
    <CompletedTodos initialTodos={initialTodos} />
    <ToDosModal />
</div>