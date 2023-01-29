class EnumHelper {
  private _links = [
    { title: "HOME", link: "/portifolio" },
    { title: "PROJETOS", link: "/portifolio/projetos" },
    { title: "CONTATO", link: "/portifolio/contato" },
    { title: "SOBRE", link: "/portifolio/sobre" },
  ];

  get links() {
    return this._links;
  }
}

export default EnumHelper;
