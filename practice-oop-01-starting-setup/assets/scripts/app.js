class DOMHelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }

  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
  }
}

class Component {
  constructor(hostElementId,insertBefore = false){
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);

    }else{
      this.hostElement= document.body;
    }
    this.insertBefore = insertBefore;
  }

  detach() {
    if (this.element) {
      this.element.remove();
    }
  }

  attach() {
    // document.body.append(this.element);
    this.hostElement.insertAdjacentElement(this.insertBefore?'afterbegin': 'beforeend',this.element)
  }
}

class ToolTips extends Component {
  constructor(closeNotifierFunction,text) {
    super('active-projects',true);
    this.closeNotifier = closeNotifierFunction;
    this.text = text;
    this.create();
  }

  closeToolTip() {
    this.detach();
    this.closeNotifier();
  }

  create() {
    const tooltipElement = document.createElement("div");
    tooltipElement.className = "card";
    tooltipElement.textContent = this.text;
    tooltipElement.addEventListener("click", this.closeToolTip.bind(this));
    this.element = tooltipElement;
  }
}

class ProjectItem {
  hasActiveToolTip = false;

  constructor(id, updateProjectListFunction, type) {
    this.id = id;
    this.updateProjectListHandler = updateProjectListFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
  }

  showMoreInforHendle() {
    if (this.hasActiveToolTip) {
      return;
    }
    const projectItemElement = document.getElementById(this.id);
    console.log(projectItemElement.dataset);
    const toolTipText = projectItemElement.dataset.extraInfo;

    const toolTip = new ToolTips(() => {
      this.hasActiveToolTip = false;
    },toolTipText);
    toolTip.attach();
    this.hasActiveToolTip = true;
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoBtn = projectItemElement.querySelector(
      "button:first-of-type"
    );
    moreInfoBtn.addEventListener("click", this.showMoreInforHendle.bind(this));
  }

  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector("button:last-of-type");
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === "active" ? "Finish" : "Activate";
    switchBtn.addEventListener(
      "click",
      this.updateProjectListHandler.bind(null, this.id)
    );
  }
  update(updateProjectListFn, type) {
    this.updateProjectListHandler = updateProjectListFn;
    this.connectSwitchButton(type);
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;

    const projItems = document.querySelectorAll(`#${type}-projects li`);
    for (const projItem of projItems) {
      // console.log(projItem);
      const storedItem = new ProjectItem(
        projItem.id,
        this.swithchProject.bind(this),
        this.type
      );
      // console.log(storedItem);
      this.projects.push(storedItem);
      // this.projects.push(new ProjectItem(projItem.id)); // short metho
    }
    console.log(this.projects);
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    // console.log(this);
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.swithchProject.bind(this), this.type);
  }

  swithchProject(projectId) {
    // const projectIndex = this.projects.findIndex(p => p.id === projectId);
    // this.projects.splice(projectIndex,1)
    // console.log(projectId);
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectList = new ProjectList("active");
    const finishedProjectList = new ProjectList("finished");
    activeProjectList.setSwitchHandlerFunction(
      finishedProjectList.addProject.bind(finishedProjectList)
    );
    finishedProjectList.setSwitchHandlerFunction(
      activeProjectList.addProject.bind(activeProjectList)
    );
  }
}

App.init();
