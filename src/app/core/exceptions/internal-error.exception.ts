export class InternalServerError extends Error {
  constructor() {
    super(
      'Estamos enfrentando um problema no momento. Tente novamente em alguns minutos'
    );
    this.name = 'InternalServerError';
  }
}
