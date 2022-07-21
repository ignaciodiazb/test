export type Sismo = {
  Fecha: string,
  Profundidad: string,
  Magnitud: string,
  RefGeografica: string,
  FechaUpdate: string
}

export interface SismosInformation {
    data: Sismo[] | null
}