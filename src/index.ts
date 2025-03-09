import { Document } from "./Entities/document";
import { Expedient } from "./Entities/expedient";
import { Notebook } from "./Entities/notebook";
import { DocumentFormat } from "./Enums/document-format";
import { DocumentOrigin } from "./Enums/document-origin";
import { DocumentRepository } from "./Repository/document.repository";
import { DigitalIndexRepository } from "./Repository/digital-index.repository";
import { DocumentService } from "./Services/document.service";
import { SerieDocument } from "./Entities/serie-document";
import { PrintByConsole } from "./Services/print-by-console.service";
import { Person } from "./Entities/person";
import { PrintExcelExpedient } from "./Services/print-excel-expediente.service";

// Crear objetos de prueba
const notebook = new Notebook({ id: "1", description: "Notebook 1" });

const document = new Document(
  "1",
  "Acción de tutela",
  new Date(),
  new Date(),
  1,
  10,
  1,
  10,
  DocumentFormat.PDF,
  100,
  DocumentOrigin.ELECTRONIC,
  notebook,
  "Algunas notas"
);

const document1 = new Document(
  "1",
  "Acción de reparto",
  new Date(),
  new Date(),
  1,
  5,
  1,
  5,
  DocumentFormat.PDF,
  100,
  DocumentOrigin.ELECTRONIC,
  notebook,
  "Algunas notas"
);

const expedient = new Expedient({
  id: "13424324324343223",
  department: "Cundinamarca",
  city: "Bogotá",
  judicialOffice: "Juzgado xx Civil Circuito",
  documentCategory: new SerieDocument("05", "ACCIONES CONSTITUCIONALES"),
  defendant: new Person("Juan Octavio Pérez Borges", "CC", "1232323"),
  plaintiff: new Person("Mercedes Herrera Herrera", "CC", "23232"),
  documents: [document, document1],
  notebooks: [notebook],
  hasPhysicalFile: true,
});

const documentRepository = new DocumentRepository();
const digitalIndexRepository = new DigitalIndexRepository();
const documentService = new DocumentService(
  documentRepository,
  digitalIndexRepository
);

// Guardar el expediente en el índice digital
digitalIndexRepository.indexExpedient(expedient);

// Buscar el documento por ID
const foundDocument = documentService.findById(
  document.getId(),
  expedient.getId()
);

console.log(digitalIndexRepository.findById("0"), "expedientes");

console.log("Found Document:", foundDocument);

// Actualizar el documento
documentService.update(document.getId(), expedient.getId(), {
  name: "Updated Document 1",
});

// Buscar el documento actualizado por ID
const updatedDocument = documentService.findById(
  document.getId(),
  expedient.getId()
);
console.log("Updated Document:", updatedDocument);

//Imprimir por consola
const printByConsoleService = new PrintByConsole();
printByConsoleService.print(expedient.getDefendant().toString());
printByConsoleService.print(notebook);

//Imprimir excel

const printExcelExpedient = new PrintExcelExpedient();
printExcelExpedient.print(expedient);

// Eliminar el documento
documentService.delete(document.getId(), expedient.getId());

// Intentar buscar el documento eliminado por ID
documentService.findById(document.getId(), expedient.getId());

console.log("Deleted Document");
