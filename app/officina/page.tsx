import SfondoFestivo from '@/components/SfondoFestivo';
import { Officina } from './Officina';

/* L'elenco dei compiti ha lo sfondo delle feste, se il docente ne ha acceso uno; dentro il compito no: lì serve concentrazione. */
export default function PaginaOfficina() {
  return (
    <>
      <SfondoFestivo velo="scuro" />
      <Officina />
    </>
  );
}
