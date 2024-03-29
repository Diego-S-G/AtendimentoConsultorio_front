import { Component, OnInit } from '@angular/core';
import { MedicoService } from 'src/app/services/medico.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EditarMedicoDialogComponent } from './editar-medico-dialog/editar-medico-dialog.component';
import { ExcluirMedicoDialogComponent } from './excluir-medico-dialog/excluir-medico-dialog.component';

@Component({
  selector: 'app-lista-medicos',
  templateUrl: './lista-medicos.component.html',
  styleUrls: ['./lista-medicos.component.scss'],
})
export class ListaMedicosComponent implements OnInit {

  medicos: any = [];
  displayedColumns: string[] = ['nome', 'especialidade', 'buttons'];
  dataSource: any;

  constructor(private service: MedicoService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.obterMedicos();
  }

  obterMedicos() {
    return this.service.get().subscribe((dados) => {
      this.medicos = dados;
      this.dataSource = new MatTableDataSource(this.medicos);
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

  editarDialog(medico: any): void {
    const dialogRef = this.dialog.open(EditarMedicoDialogComponent, {
      width: '500px',
      data: medico
    });
    dialogRef.afterClosed().subscribe({
      next: () => {
        this.obterMedicos();
      }
    })

    dialogRef.componentInstance.salvarClicado.subscribe((mensagem: string) => {
      this.openSnackBar(mensagem);
    })
  }

  excluirDialog(medico: any): void {
    const dialogRef = this.dialog.open(ExcluirMedicoDialogComponent, {
      width: '500px',
      data: medico
    });
    dialogRef.afterClosed().subscribe({
      next: () => {
        this.obterMedicos();
      }
    })

    dialogRef.componentInstance.salvarClicado.subscribe((mensagem: string) => {
      this.openSnackBar(mensagem);
    })
  }
}