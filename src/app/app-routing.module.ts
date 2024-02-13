import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { CadastroMedicoComponent } from './components/pages/cadastro-medico/cadastro-medico.component';
import { CadastroPacienteComponent } from './components/pages/cadastro-paciente/cadastro-paciente.component';
import { CadastroSalaComponent } from './components/pages/cadastro-sala/cadastro-sala.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cadastrar-medico', component: CadastroMedicoComponent },
  { path: 'cadastrar-paciente', component: CadastroPacienteComponent },
  { path: 'cadastrar-sala', component: CadastroSalaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
