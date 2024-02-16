import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CadastroMedicoComponent } from './components/pages/cadastro-medico/cadastro-medico.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';


import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { CadastroPacienteComponent } from './components/pages/cadastro-paciente/cadastro-paciente.component';
import { CadastroSalaComponent } from './components/pages/cadastro-sala/cadastro-sala.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaMedicosComponent } from './components/pages/lista-medicos/lista-medicos.component';
import { EditarMedicoDialogComponent } from './components/pages/lista-medicos/editar-medico-dialog/editar-medico-dialog.component';
import { ExcluirMedicoDialogComponent } from './components/pages/lista-medicos/excluir-medico-dialog/excluir-medico-dialog.component';
import { ListaSalasComponent } from './components/pages/lista-salas/lista-salas.component';
import { EditarSalaDialogComponent } from './components/pages/lista-salas/editar-sala-dialog/editar-sala-dialog.component';
import { ExcluirSalaDialogComponent } from './components/pages/lista-salas/excluir-sala-dialog/excluir-sala-dialog.component';
import { ListaPacientesComponent } from './components/pages/lista-pacientes/lista-pacientes.component';
import { EditarPacienteDialogComponent } from './components/pages/lista-pacientes/editar-paciente-dialog/editar-paciente-dialog.component';
import { ExcluirPacienteDialogComponent } from './components/pages/lista-pacientes/excluir-paciente-dialog/excluir-paciente-dialog.component';
import { CadastroAtendimentoComponent } from './components/pages/cadastro-atendimento/cadastro-atendimento.component';
import { ListaAtendimentosComponent } from './components/pages/lista-atendimentos/lista-atendimentos.component';
import { ExcluirAtendimentoDialogComponent } from './components/pages/lista-atendimentos/excluir-atendimento-dialog/excluir-atendimento-dialog.component';
import { GerenciamentoAtendimentoComponent } from './components/pages/gerenciamento-atendimento/gerenciamento-atendimento.component';
import { TelaPacienteComponent } from './components/pages/tela-paciente/tela-paciente.component';
import { IniciarAtendimentoDialogComponent } from './components/pages/gerenciamento-atendimento/iniciar-atendimento-dialog/iniciar-atendimento-dialog.component';
import { FinalizarAtendimentoDialogComponent } from './components/pages/gerenciamento-atendimento/finalizar-atendimento-dialog/finalizar-atendimento-dialog.component';
import { CancelarAtendimentoDialogComponent } from './components/pages/gerenciamento-atendimento/cancelar-atendimento-dialog/cancelar-atendimento-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroMedicoComponent,
    HomePageComponent,
    HeaderComponent,
    CadastroPacienteComponent,
    CadastroSalaComponent,
    ListaMedicosComponent,
    EditarMedicoDialogComponent,
    ExcluirMedicoDialogComponent,
    ListaSalasComponent,
    EditarSalaDialogComponent,
    ExcluirSalaDialogComponent,
    ListaPacientesComponent,
    EditarPacienteDialogComponent,
    ExcluirPacienteDialogComponent,
    CadastroAtendimentoComponent,
    ListaAtendimentosComponent,
    ExcluirAtendimentoDialogComponent,
    GerenciamentoAtendimentoComponent,
    TelaPacienteComponent,
    IniciarAtendimentoDialogComponent,
    FinalizarAtendimentoDialogComponent,
    CancelarAtendimentoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
