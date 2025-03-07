/document_management_system
📂 src
 ├── 📂 Entities                # Clases y entidades del dominio
 │    ├── 📄 document.entity.ts
 │    ├── 📄 expedient.entity.ts
 │    ├── 📄 notebook.entity.ts
 │    ├── 📄 procedural-party.entity.ts
 │    ├── 📄 series-document.entity.ts
 │    ├── 📄 subseries-document.entity.ts
 │    ├── 📄 digital-index.entity.ts
 │
 ├── 📂 Enums                   # Enumeraciones para atributos específicos
 │    ├── 📄 document-format.enum.ts
 │    ├── 📄 document-origin.enum.ts
 │
 ├── 📂 Repositories            # Acceso a datos
 │    ├── 📄 base.repository.ts  # Clase genérica para reutilizar en repositorios
 │    ├── 📄 expedient.repository.ts
 │    ├── 📄 document.repository.ts
 │    ├── 📄 digital-index.repository.ts
 │
 ├── 📂 Services                # Lógica de negocio
 │    ├── 📄 expedient.service.ts
 │    ├── 📄 document.service.ts
 │    ├── 📄 digital-index.service.ts
 │    ├── 📄 printer.service.ts
 |    📁interfaces
            └── base-operations.ts   #Define el reglamento base para los servicios y repositorios.
            └── document-props.ts    #Define las propiedades de un documento.
