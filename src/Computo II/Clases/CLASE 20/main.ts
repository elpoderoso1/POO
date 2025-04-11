import { askQuestion } from "./functions/Question";
import { addContent, editContent, platform } from "./functions/PlatformFunctions";

async function mainMenu() {

    while (true) {

        console.log("MENU PRINCIPAL");
        console.log("1. Agregar contenido");
        console.log("2. Ver contenido");
        console.log("3. Editar contenido");
        console.log("4. Limpiar pantalla");

        const option = await askQuestion("Ingrese una opcion del menu: ");

        switch (option) {
            case '1':
                await addContent();
                break;
            case '2':
                platform.getAllContent();
                break;
            case '3':
                await editContent();
                break;
            case '4':
                console.clear();
                break;
            default:
                console.log('Opcion incorrecta');
                break;
        }
    }
}

mainMenu();
