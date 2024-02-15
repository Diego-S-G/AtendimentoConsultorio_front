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
import { EditarDialogComponent } from './components/pages/lista-medicos/editar-dialog/editar-dialog.component';
import { ExcluirDialogComponent } from './components/pages/lista-medicos/excluir-dialog/excluir-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroMedicoComponent,
    HomePageComponent,
    HeaderComponent,
    CadastroPacienteComponent,
    CadastroSalaComponent,
    ListaMedicosComponent,
    EditarDialogComponent,
    ExcluirDialogComponent
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
