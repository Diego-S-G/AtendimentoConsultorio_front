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
  atendimentoPrimeiroEmAndamento: any;
  atendimentosRestoEmAndamento: any = [];
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
    this.obterPrimeiroEmAndamento();
    this.obterRestoEmAndamento();
    this.obterAtendimentos();
  }

  obterRestoEmAndamento() {
    return this.service.getRestoEmAndamento().subscribe((dados) => {
      this.atendimentosRestoEmAndamento = dados;
      this.emAndamentoDataSource = new MatTableDataSource(this.atendimentosRestoEmAndamento);
    })
  }

  obterAtendimentos() {
    return this.service.getFinalizados(3).subscribe((dados) => {
      this.atendimentosFinalizados = dados;
      this.finalizadosDataSource = new MatTableDataSource(this.atendimentosFinalizados);
    });
  }

  obterPrimeiroEmAndamento() {
    return this.service.getPrimeiroEmAndamento().subscribe((dados) => {
      this.atendimentoPrimeiroEmAndamento = dados;
    })
  }
}