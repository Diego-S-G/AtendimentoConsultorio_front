import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { PacienteService } from 'src/app/services/paciente.service';
import { EditarPacienteDialogComponent } from './editar-paciente-dialog/editar-paciente-dialog.component';
import { ExcluirPacienteDialogComponent } from './excluir-paciente-dialog/excluir-paciente-dialog.component';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.scss']
})
export class ListaPacientesComponent {
  pacientes: any = [];
  displayedColumns: string[] = ['nome', 'sexo', 'buttons'];
  dataSource: any;

  constructor(private service: PacienteService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.obterPacientes();
  }

  obterPacientes() {
    return this.service.get().subscribe((dados) => {
      this.pacientes = dados;
      this.dataSource = new MatTableDataSource(this.pacientes);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openSnackBar(mensagem: string) {
    this._snackBar.open(mensagem, 'Ok', {
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  editarDialog(paciente: any): void {
    const dialogRef = this.dialog.open(EditarPacienteDialogComponent, {
      width: '500px',
      data: paciente
    });
    dialogRef.afterClosed().subscribe({
      next: () => {
        this.obterPacientes();
      }
    })

    dialogRef.componentInstance.salvarClicado.subscribe((mensagem: string) => {
      this.openSnackBar(mensagem);
    })
  }

  excluirDialog(paciente: any): void {
    const dialogRef = this.dialog.open(ExcluirPacienteDialogComponent, {
      width: '500px',
      data: paciente
    });
    dialogRef.afterClosed().subscribe({
      next: () => {
        this.obterPacientes();
      }
    })

    dialogRef.componentInstance.salvarClicado.subscribe((mensagem: string) => {
      this.openSnackBar(mensagem);
    })
  }
}
