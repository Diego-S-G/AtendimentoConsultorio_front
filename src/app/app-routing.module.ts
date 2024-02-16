import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { CadastroMedicoComponent } from './components/pages/cadastro-medico/cadastro-medico.component';
import { CadastroPacienteComponent } from './components/pages/cadastro-paciente/cadastro-paciente.component';
import { CadastroSalaComponent } from './components/pages/cadastro-sala/cadastro-sala.component';
import { ListaMedicosComponent } from './components/pages/lista-medicos/lista-medicos.component';
import { ListaSalasComponent } from './components/pages/lista-salas/lista-salas.component';
import { ListaPacientesComponent } from './components/pages/lista-pacientes/lista-pacientes.component';
import { CadastroAtendimentoComponent } from './components/pages/cadastro-atendimento/cadastro-atendimento.component';
import { ListaAtendimentosComponent } from './components/pages/lista-atendimentos/lista-atendimentos.component';
import { GerenciamentoAtendimentoComponent } from './components/pages/gerenciamento-atendimento/gerenciamento-atendimento.component';
import { ApresentacaoAtendimentoComponent } from './components/pages/apresentacao-atendimento/apresentacao-atendimento.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cadastrar-atendimento', component: CadastroAtendimentoComponent },
  { path: 'lista-atendimentos', component: ListaAtendimentosComponent },
  { path: 'cadastrar-medico', component: CadastroMedicoComponent },
  { path: 'lista-medicos', component: ListaMedicosComponent },
  { path: 'cadastrar-paciente', component: CadastroPacienteComponent },
  { path: 'lista-pacientes', component: ListaPacientesComponent },
  { path: 'cadastrar-sala', component: CadastroSalaComponent },
  { path: 'lista-salas', component: ListaSalasComponent },
  { path: 'gerenciar-atendimento', component: GerenciamentoAtendimentoComponent },
  { path: 'apresentacao-atendimento', component: ApresentacaoAtendimentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
