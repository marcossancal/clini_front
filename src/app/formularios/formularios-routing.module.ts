import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulariosComponent } from './formularios.component';
import { NewFormulariosComponent } from './new/new-formularios.component';
const routes: Routes = [
    {
        path: '',
        component: FormulariosComponent,
        data: {
            title: 'Formulários ',
            headerDisplay: "none"
        }
    },
    {
        path:'new',
        component:NewFormulariosComponent,
        data:{
            title:'Novo formulário',
            headerDispay:'none'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FormulariosRoutingModule { }
