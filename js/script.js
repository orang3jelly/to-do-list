{
  const tasks = [
    {
      content: "zadanie 1",
      done: false,
    },
    {
      content: "zadanie 2",
      done: true,
    },
  ];

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
            <li ${task.done ? 'class="taskList__item"' : ""}">
                ${task.content}
            </li>
        `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;
  };

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });

    render();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask").value.trim();

    if (newTaskContent === "") {
      return;
    }

    addNewTask(newTaskContent);
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };
  init();
}
