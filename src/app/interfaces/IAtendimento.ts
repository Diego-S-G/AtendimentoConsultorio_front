export interface IAtendimento {
    id?: number;
    dataHora: Date;
    status: number;
    medico: number;
    paciente: number;
    sala: number;
}