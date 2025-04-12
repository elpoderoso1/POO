interface ExportInterface {
    exportData(data: string): void;
}

class PDFExporter01 implements ExportInterface {
    public exportData(data: string): void {
        console.log(`Exportando los datos del PDF: ${data}`);
    }
}

class CSVExporter01 implements ExportInterface {
    public exportData(data: string): void {
        console.log(`Exportando los datos del CSV: ${data}`);
    }
}

class ExporterFactory {
    public static CreateExporter(type: string) {
        switch (type) {
            case "PDF":
                return new PDFExporter01();
        
            case "CVS":
                return new CSVExporter01();

            default:
                throw new Error("Exportacion no encontrada")
        }
    }
}

const exporterDates = ExporterFactory.CreateExporter("PDF");
exporterDates.exportData("Exportando datos desde PDF");