export interface ProjectDataInterface {
    _id: string;
    nombreProyecto: string;
    fechaInicial: Date;
    fechaFinal: Date;
    items: {
        item: string;
        valorUnitarioActual: number;
        valorUnitarioPropuesto?: number;
    }[];
};

export interface UserDataInterface {
    email: string;
    password: Date;
}

export interface ApplicationDataInterface {
    idUsuario: string;
    nombreUsuario: string;
    emailUsuario: string;
    tipoUsuario: string;
    idProyecto: string;
};