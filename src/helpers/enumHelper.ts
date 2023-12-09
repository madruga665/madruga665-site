class EnumHelper {
  private _paths = [
    { title: "HOME", path: "/portifolio/home" },
    { title: "PROJETOS", path: "/portifolio/projetos" },
    { title: "EXPERIÊNCIA", path: "/portifolio/experiencia" },
    { title: "CONTATO", path: "/portifolio/contato" },
  ];

  private _toastMessages = {
    success: "Mensagem enviada com sucesso!",
    error: "Erro ao enviar mensagem!",
  };

  get paths() {
    return this._paths;
  }

  get toastMessages() {
    return this._toastMessages;
  }
}

export default EnumHelper;
