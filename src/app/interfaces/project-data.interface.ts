export interface ProjectDataInterface {
    nombreProyecto: string;
    fechaInicial: Date;
    fechaFinal: Date;
    items: {
        item: string;
        valorUnitarioActual: number;
        valorUnitarioPropuesto?: number;
    }[];
}
