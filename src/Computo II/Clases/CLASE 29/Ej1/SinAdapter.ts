interface JSONDataInterface {
    getJSONData(): string;
}

class XMLData {
    public getXMLData(): string {
        return '<data><value>Datos</data></value>';
    }
}

function processData(data: JSONDataInterface) {
    console.log(`Procesando datos: ${data.getJSONData()}`);
}

const xml = new XMLData();
processData(xml);
