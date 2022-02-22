import DOM from "./dom";

export default class UI {
  loadPage() {
    this.createHeader();
    this.createBody();
    this.createFooter();
  }

  createHeader() {
    const header = document.createElement("div");
    header.className = "header";

    const logo = document.createElement("div");
    logo.className = "logo";
    logo.id = "logo";

    header.appendChild(logo);
    document.body.appendChild(header);
  }

  createBody() {
    const body = document.createElement("div");
    body.className = "body";

    const sidebar = document.createElement("div");
    sidebar.className = "sidebar";
    sidebar.id = "sidebar";

    const container = document.createElement("div");
    container.className = "container";
    container.id = "container";

    document.body.appendChild(body);
  }

  createFooter() {
    const footer = document.createElement("div");
    footer.className = "footer";

    document.body.appendChild(footer);
  }
}
