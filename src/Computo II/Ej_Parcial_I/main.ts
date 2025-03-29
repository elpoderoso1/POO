import * as readline from 'node:readline';
import { stdin as input, stdout as output, stdin } from 'node:process';

const rl = readline.createInterface({ input, output });

function askQuestion(query: string): Promise<string> {
    return new Promise(resolve => rl.question(query, resolve));
}

async function addContent() {
    const types_list = ["PELICULAS", "PELICULA", "DOCUMENTALES", "DOCUMENTAL", "SERIES", "SERIE"];

    // Validar el tipo de contenido
    let type: string;
    while (true) {
        type = (await askQuestion("¿Qué tipo de contenido desea añadir (Peliculas, Documentales, Series)?\n")).toUpperCase();
        if (types_list.includes(type)) break;
        console.log("Ingrese solo los contenidos disponibles. Intente de nuevo.\n");
    }

    // Función para validar números enteros
    const validateNumber = async (message: string): Promise<number> => {
        while (true) {
            const input = await askQuestion(message);
            if (/^\d+$/.test(input)) return parseInt(input); // Verifica que sean solo números
            console.log("Ingrese un número válido (solo dígitos sin letras ni símbolos).");
        }
    };

    // Obtener ID y duración
    const id = await validateNumber(`Ingrese el ID de su contenido sobre ${type}\n`);
    const duration = await validateNumber(`Ingrese la duración de su contenido sobre ${type}\n`);
    
    // Verificar el tipo y pedir más datos si es necesario
    if (["PELICULAS", "PELICULA"].includes(type)) {
        // Código para películas
    } else if (["DOCUMENTALES", "DOCUMENTAL"].includes(type)) {
        // Código para documentales
    } else if (["SERIES", "SERIE"].includes(type)) {
        const season = await validateNumber("Ingrese la cantidad de temporadas\n");
        const episodes = await validateNumber("Ingrese la cantidad de episodios\n");
    }

    console.log("Contenido agregado correctamente.");
}

async function editContent() {
}

async function mainMenu() {
    let option: string;
    do {
        console.log("MENU PRINCIPAL");
        console.log("1. Agregar contenido");
        console.log("2. Ver contenido");
        console.log("3. Editar contenido");
        
        option = await askQuestion("Ingrese una opción del menu: ")
        switch (option) {
            case '0':
                console.log("Saliendo del sistema");
                break;

            case '1':
                await addContent();
                console.log("Agregando contenido");
                break;

            case '2':
                console.log("Viendo contenido");
                break;

            case '3':
                await editContent();
                console.log("Editando codigo");
                break;
        
            default:
                console.log("Opción incorrecta");
                break;
        }
    } while (option !== '0');
    rl.close();
}
mainMenu().catch(console.error);