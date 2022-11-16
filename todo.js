const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };
  const formattedDate = (d) => {
    return d.toISOString().split("T")[0];
  };
  
  var dateToday = new Date();
  const today = formattedDate(dateToday);
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  );
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  );
  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    const arr = all.filter((thing) => thing.dueDate == yesterday);
    return arr;
  };

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    const arr = all.filter((thing) => thing.dueDate === today);
    return arr;
  };

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    const arr = all.filter((thing) => thing.dueDate === tomorrow);

    return arr;
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    arr = [];
    const display = list.map((item) => {
      const completionStatus = item.completed ? "[x]" : "[ ]";
      const displayedDate =
        item.dueDate === new Date().toLocaleDateString("en-CA")
          ? ""
          : item.dueDate;
      arr.push(completionStatus + " " + item.title + " " + displayedDate);
    });
    return arr.join("\n").trim();
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
