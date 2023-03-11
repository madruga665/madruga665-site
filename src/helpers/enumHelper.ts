class EnumHelper {
  private _links = [
    { title: "HOME", link: "/portifolio/home" },
    { title: "PROJETOS", link: "/portifolio/projetos" },
    { title: "EXPERIÊNCIA", link: "/portifolio/experiencia" },
    { title: "CONTATO", link: "/portifolio/contato" },
  ];

  get links() {
    return this._links;
  }
}

export default EnumHelper;
