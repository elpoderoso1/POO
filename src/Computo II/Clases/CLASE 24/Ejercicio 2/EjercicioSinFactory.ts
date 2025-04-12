class PDFExporter {
    public exportData(data: string): void {
        console.log(`Exportando los datos del PDF: ${data}`);
    }
}

class CSVExporter {
    public exportData(data: string): void {
        console.log(`Exportando los datos del CSV: ${data}`);
    }
}

function exportDates(type: string, message: string) {
    if (type === "PDF") {
        const exportData = new PDFExporter();
        exportData.exportData(message);
    } else if (type === "CSV") {
        const exportData = new CSVExporter();
        exportData.exportData(message);
    }
}

exportDates("PDF", "Exportado del PDF.")