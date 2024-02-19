import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AtendimentoService } from 'src/app/services/atendimento.service';

@Component({
  selector: 'app-apresentacao-atendimento',
  templateUrl: './apresentacao-atendimento.component.html',
  styleUrls: ['./apresentacao-atendimento.component.scss']
})
export class ApresentacaoAtendimentoComponent implements OnInit, AfterViewInit {
  atendimentosFinalizados: any = [];
  atendimentosEmAndamento: any = [];
  displayedColumns: string[] = ['medico', 'paciente', 'sala', 'dataHora', 'status'];
  displayedAndamentoColumns: string[] = ['paciente-andamento', 'sala-andamento'];
  finalizadosDataSource: any;
  emAndamentoDataSource: any;

  constructor(private service: AtendimentoService) { }

  ngAfterViewInit() {
    setInterval(() => {
      this.atualizarPagina();
    }, 5000);
  }

  atualizarPagina() {
    location.reload();
  }

  ngOnInit(): void {
    this.obterEmAndamento();
    this.obterAtendimentos();
  }

  obterAtendimentos() {
    return this.service.getFinalizados(3).subscribe((dados) => {
      this.atendimentosFinalizados = dados;
      this.finalizadosDataSource = new MatTableDataSource(this.atendimentosFinalizados);
    });
  }

  obterEmAndamento() {
    return this.service.getEmAndamento().subscribe((dados) => {
      this.atendimentosEmAndamento = dados;
      this.emAndamentoDataSource = new MatTableDataSource(this.atendimentosEmAndamento);
    })
  }
}