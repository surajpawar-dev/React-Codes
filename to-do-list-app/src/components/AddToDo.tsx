function AddToDo() {
  return <div>
    <div className="container text-center">
      <div className="row">
        <div className="col-sm">
          <input type="text" placeholder="Enter to do here" />
        </div>
        <div className="col-sm">
          <input type="date" />
        </div>
        <div className="col-sm">
          <button type="button" className="btn btn-success">Add</button>
        </div>
      </div>
    </div>
  </div>
}

export default AddToDo;