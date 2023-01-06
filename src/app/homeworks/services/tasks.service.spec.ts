import { HomeworksService } from './homework.service';
describe('HomeworksService', () => {
  let service: HomeworksService;

  beforeEach(() => {
    service = new HomeworksService();
  });

  it('ToBe: Verificar que el servicio inicie en 5 tareas', () => {
    expect(service.props.tasks.length).toBe(5); // TODO: Se verifican coincidencias entre numeros en toBe
  });

  it('ToBe: Verificar que el servicio inicie con 5 traducciones', () => {
    expect(service.props.translation.length).toBe(5);
  });

  it('Delete: Deberia borrar una tarea', () => {
    service.deleteTask('sweep', 'barrer');

    expect(service.props.tasks.length).toBe(4);
  });

  it('No Delete: No Deberia borrar una tarea', () => {
    service.deleteTask('cooked', 'cocina');

    expect(service.props.translation.length).toBe(5);
  });

  it('Spy: Deberia llamar a la funcion completeTask 1 solo vez', () => {
    const espia = jasmine.createSpyObj('HomeworksService', ['completeTask']);

    espia.completeTask();

    expect(espia.completeTask.calls.count()).toBe(1);
  });
});
