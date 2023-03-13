class EnumHelper {
  private _links = [
    { title: "HOME", link: "/portifolio/home" },
    { title: "PROJETOS", link: "/portifolio/projetos" },
    { title: "EXPERIÊNCIA", link: "/portifolio/experiencia" },
    { title: "CONTATO", link: "/portifolio/contato" },
  ];

  private _toastMessages = {
    success: "Mensagem enviada com sucesso!",
    error: "Erro ao enviar mensagem!",
  };

  get links() {
    return this._links;
  }

  get toastMessages() {
    return this._toastMessages;
  }
}

export default EnumHelper;
