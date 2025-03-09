import Excel, { BorderStyle } from "exceljs";
import path from "node:path";
import type { Expedient } from "../Entities/expedient";
import { FileOperations } from "./file";

export class GenerateExcel {
  static createExcel(entity: Expedient) {
    const workbook = new Excel.Workbook();
    const bold = { bold: true };
    const center = {
      horizontal: "center" as "center",
      vertical: "middle" as "middle",
    };
    const borderStyle: Partial<Excel.Borders> = {
      top: { style: "thin" as BorderStyle },
      bottom: { style: "thin" as BorderStyle },
      left: { style: "thin" as BorderStyle },
      right: { style: "thin" as BorderStyle },
    };

    const alignmentStyle = { horizontal: "left" as "left" };

    const worksheet = workbook.addWorksheet("Índice del Expediente");

    //Metadata
    workbook.creator = "Camidev";
    workbook.lastModifiedBy = "Camidev";
    workbook.created = new Date();
    workbook.modified = new Date();
    workbook.lastPrinted = new Date();

    const image = "image.jpeg";
    const exactRoute = path.join(process.cwd(), "src", "assets", image);

    if (!FileOperations.verifyExistPath(exactRoute)) {
      throw new Error(`Image not found at path: ${exactRoute}`);
    }

    const imageId = workbook.addImage({
      filename: exactRoute,
      extension: "jpeg",
    });
    worksheet.addImage(imageId, {
      tl: { col: 0, row: 0 }, // A1 (columna 0, fila 0)
      br: { col: 1, row: 5 }, // B3 (columna 1, fila 4)
    });

    //Agregamos espacios
    for (let index = 0; index <= 5; index++) {
      worksheet.addRow([]);
    }

    //Titulo
    worksheet.mergeCells("C2:H2");
    const titleCell = worksheet.getCell("C2");
    titleCell.value = "ÍNDICE DEL EXPEDIENTE JUDICIAL ELECTRÓNICO";
    titleCell.font = { bold: true, size: 14 };
    titleCell.alignment = { horizontal: "center" };

    const expedientInformation = [
      ["Ciudad", entity.getCity()],
      ["Despacho Judicial", entity.getJudicialOffice()],
      ["Serie o Subserie Documental", entity.getDocumentCategory().getName()],
      ["No. Radicación del Proceso", entity.getId()],
      ["Partes Procesales (Parte A)", entity.getDefendant().getName()],
      ["Partes Procesales (Parte B)", entity.getPlaintiff().getName()],
    ];

    worksheet.addRows(expedientInformation);

    expedientInformation.forEach((_, index) => {
      const row = worksheet.getRow(index + 7);

      row.getCell(1).font = bold;
      row.getCell(1).alignment = alignmentStyle;
      row.getCell(1).border = borderStyle;

      row.getCell(2).alignment = alignmentStyle;
      row.getCell(2).border = borderStyle;
    });

    /********Sección expediente físico********/
    // estilos y bordes
    for (let i = 7; i <= 12; i++) {
      worksheet.getCell(`F${i}`).font = bold;
      worksheet.getCell(`F${i}`).alignment = alignmentStyle;
      worksheet.getCell(`F${i}`).border = borderStyle;

      worksheet.getCell(`G${i}`).alignment = alignmentStyle;
      worksheet.getCell(`G${i}`).border = borderStyle;
    }

    worksheet.mergeCells("F7:G7");

    const expedienteFisicoCell = worksheet.getCell("F7");
    expedienteFisicoCell.value = "EXPEDIENTE FÍSICO";
    expedienteFisicoCell.font = bold;
    expedienteFisicoCell.alignment = center;

    worksheet.getCell("F9").value =
      "El expediente judicial posee documentos físicos:";
    worksheet.getCell("G9").value = `Sí ${
      entity.getHasPhysicalFile() ? "X   " : ""
    } No ${!entity.getHasPhysicalFile() ? "X" : ""} `;

    worksheet.getCell("F10").value = "No. de carpetas, legajos o tomos:";

    // Ajustar ancho de columnas
    worksheet.getColumn(1).width = 30;
    worksheet.getColumn(2).width = 35;
    worksheet.getColumn(3).width = 20;
    worksheet.getColumn(4).width = 20;
    worksheet.getColumn(5).width = 20;
    worksheet.getColumn(6).width = 50;
    worksheet.getColumn(7).width = 15;
    worksheet.getColumn(8).width = 15;
    worksheet.getColumn(9).width = 20;
    worksheet.getColumn(10).width = 20;
    worksheet.getColumn(11).width = 20;

    // Espacio antes de la tabla de documentos
    worksheet.addRow([]);
    worksheet.addRow([]);

    // Agregar la tabla de documentos
    const documetTable = worksheet.addRow([
      "Nombre Documento",
      "Fecha Creación",
      "Fecha Incorporación",
      "Orden Documento",
      "Número Páginas",
      "Página Inicio",
      "Página Fin",
      "Formato",
      "Tamaño",
      "Origen",
      "Observaciones",
    ]);
    documetTable.font = bold;
    documetTable.eachCell((cell) => {
      cell.border = borderStyle;
    });

    const documents = entity.getDocuments();
    console.log(documents.length);

    documents.forEach((rowData) => {
      const row = worksheet.addRow([
        rowData.getName(),
        rowData.getCreationDate(),
        rowData.getIncorporationDate(),
        rowData.getOrder(),
        rowData.getNumberOfPages(),
        rowData.getStartPage(),
        rowData.getEndPage(),
        rowData.getFormat(),
        rowData.getSize(),
        rowData.getOrigin(),
        rowData.getNotes(),
      ]);

      row.eachCell((cell) => {
        (cell.border = borderStyle), (cell.alignment = { horizontal: "left" });
      });
    });

    workbook.xlsx
      .writeFile("Expediente_judicial.xlsx")
      .then(() => {
        console.log("✅ Documento generado con exito ✅");
      })
      .catch((err) => console.log(err))
      .finally(() => console.log("Ejecutado"));
  }
}
