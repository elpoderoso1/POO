interface JSONDataInterface {
    getJSONData(): string;
}

class XMLData2 {
    public getXMLData(): string {
        return '<data><value>Datos</data></value>';
    }
}

function processData2(data: JSONDataInterface) {
    console.log(`Procesando datos: ${data.getJSONData()}`);
}

class XMLAdapter implements JSONDataInterface {
    constructor(private xml: XMLData2) {
    }

    public getJSONData(): string {
        const xmlData = this.xml.getXMLData();
        return JSON.stringify({ xmlData });
    }
}

const xml2 = new XMLData();
processData2(new XMLAdapter(xml2));

