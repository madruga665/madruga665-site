class EnumHelper {
  private _links = [
    { title: "HOME", link: "/portifolio/home" },
    { title: "PROJETOS", link: "/portifolio/projetos" },
    { title: "CONTATO", link: "/portifolio/contato" },
    { title: "EXPERIÊNCIA", link: "/portifolio/experiencia" },
  ];

  get links() {
    return this._links;
  }
}

export default EnumHelper;
