import { PlatformStreaming } from '../classes/PlatformStreaming';
import { Movie } from '../classes/Movie';
import { Documentary } from '../classes/Documentary';
import { Serie } from '../classes/Serie';
import { Content } from '../types/ContentType';
import { askQuestion } from './Question';

export const platform = new PlatformStreaming();

export async function addContent() {
    const type = (await askQuestion("Que tipo de contenido desea agregar (Peliculas, Documentales, Series): ")).toUpperCase();

    const validType: Content[] = ["SERIES", "PELICULAS", "DOCUMENTALES"];

    if (!validType.includes(type as Content)) {
        console.log('Debe ingresar una categoria valida');
        return;
    }

    const id = parseInt(await askQuestion("Ingrese el id del contenido: "));

    if (isNaN(id)) {
        console.log('Debe ingresar el id como valor numerico');
        return;
    }

    const title = await askQuestion("Ingrese el titulo: ");
    const duration = parseInt(await askQuestion("Ingrese la duracion del contenido: "));

    if (type === "PELICULAS") {
        platform.addContent(new Movie(id, title, duration));
    }

    if (type === "DOCUMENTALES") {
        platform.addContent(new Documentary(id, title, duration));
    }

    if (type === "SERIES") {
        const season = parseInt(await askQuestion("Ingrese la cantidad de temporadas: "));
        const episodes = parseInt(await askQuestion("Ingrese la cantidad de episodios: "));

        platform.addContent(new Serie(id, title, duration, season, episodes));
    }
}

export async function editContent() {

    const id = parseInt(await askQuestion("Ingrese el id del contenido a editar: "));
    const newTitle = await askQuestion("Ingrese el nuevo titulo del contenido: ");
    const newDuration = parseInt(await askQuestion("Ingrese la nueva duracion: "));

    platform.editContent(id, newTitle, newDuration);
}

