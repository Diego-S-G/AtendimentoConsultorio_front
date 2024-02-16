import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AtendimentoService } from 'src/app/services/atendimento.service';

@Component({
  selector: 'app-apresentacao-atendimento',
  templateUrl: './apresentacao-atendimento.component.html',
  styleUrls: ['./apresentacao-atendimento.component.scss']
})
export class ApresentacaoAtendimentoComponent {
  atendimentos: any = [];
  displayedColumns: string[] = ['medico', 'paciente', 'sala', 'dataHora', 'status'];
  finalizadosDataSource: any;

  constructor(private service: AtendimentoService) { }

  ngOnInit(): void {
    this.obterAtendimentos();
  }

  obterAtendimentos() {
    return this.service.getFinalizados(3).subscribe((dados) => {
      this.atendimentos = dados;
      this.finalizadosDataSource = new MatTableDataSource(this.atendimentos);
    });
  }
}