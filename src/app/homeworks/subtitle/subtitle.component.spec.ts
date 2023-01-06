import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubtitleComponent } from './subtitle.component';
import { HomeworksService } from '../services/homework.service';

describe('SubtitleComponent', () => {
  let component: SubtitleComponent;
  let fixture: ComponentFixture<SubtitleComponent>;
  let service: HomeworksService; //TODO: Declaramos una variable con el tipo del servicio

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubtitleComponent],
      providers: [HomeworksService], //TODO: Proveemos el servicio a la prueba
    }).compileComponents();

    service = TestBed.inject(HomeworksService); //TODO: Injectamos el servicio
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //TODO: Llevamos acabo la prueba

  it('Deberia renderizar 4 elementos', () => {
    const render: HTMLElement = fixture.nativeElement; //TODO: Detectando lo que ya se creo en el html

    const tasks = render.querySelector('#tasks')?.textContent?.trim(); //TODO: Limpiando y localizando un elemento por su id

    expect(tasks).toEqual('Number of Tasks: 5'); //TODO: Verificamos el contenido que deberia contener un elemento html
  });

  it('Deberia disminuir en 1 si elimino un elemento', () => {
    service.deleteTask('cook', 'cocinar'); //TODO: Borramos una tarea

    fixture.detectChanges(); //TODO: Detectamos los cambios en el html

    const render: HTMLElement = fixture.nativeElement; //TODO: Renderizamos el html

    const tasks = render.querySelector('#tasks')?.textContent?.trim(); //TODO: Verificamos el contenido que deberia contener un elemento html

    expect(tasks).toEqual('Number of Tasks: 4'); //TODO: Verificamos el contenido que deberia contener un elemento html
  });

  it('Deberia renderizar el mensaje There are no tasks in the list', () => {
    service.deleteTask('sweep', 'barrer'); //TODO: Borramos una tarea
    service.deleteTask('mop', 'trapear'); //TODO: Borramos una tarea
    service.deleteTask('cook', 'cocinar'); //TODO: Borramos una tarea
    service.deleteTask('read', 'leer'); //TODO: Borramos una tarea
    service.deleteTask('to wash', 'lavar'); //TODO: Borramos una tarea

    fixture.detectChanges(); //TODO: Detectamos los cambios en el html

    const render: HTMLElement = fixture.nativeElement; //TODO: Renderizamos el html

    const tasks = render.querySelector('#no_Tasks')!.textContent!.trim(); //TODO: Verificamos el contenido que deberia contener un elemento html

    expect(tasks).toEqual('There are no tasks in the list'); //TODO: Verificamos el contenido que deberia contener un elemento html
  });
});
