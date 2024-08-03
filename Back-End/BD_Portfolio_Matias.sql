create database BD_Portfolio_Matias;
use BD_Portfolio_Matias;

-- Usuario

-- Tabla Usuarios
CREATE TABLE Usuarios (
    id_Usuario INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(50) NOT NULL,
    Email VARCHAR(250) NOT NULL UNIQUE,
    Contraseña VARCHAR(255) NOT NULL,
    Activo BOOLEAN DEFAULT false
);

-- Insertando datos en la tabla Usuarios
INSERT INTO Usuarios (Nombre, Apellido, Email, Contraseña, Activo) 
VALUES
("Matias", "Chocobar", "chocobar_matias@yahoo.com.ar", "Programadormia9292", true),
("Natalia", "Rodriguez", "deborahnatalia84@hotmail.com", "DiseñadoraLic9505", true),
("admin", "prueba", "pruebaadmin@prueba.com", "admin", false);

-- Tabla Administradores
CREATE TABLE Administradores (
    id_Administrador INT PRIMARY KEY AUTO_INCREMENT,
    id_Usuario INT,
    FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario),
    Admin_trador BOOLEAN DEFAULT false
);

-- Insertando datos en la tabla Administradores
INSERT INTO Administradores (id_Usuario, Admin_trador)
VALUES
(1, true),
(2, true),
(3, true);

-- Tabla Formaciones
CREATE TABLE Formaciones (
    id_Formacion INT PRIMARY KEY AUTO_INCREMENT,
    Titulo VARCHAR(50) NOT NULL,
    InstitucionEducativa VARCHAR(50) NOT NULL,
    AñoInicio varchar(50),
    AñoFinEstimado varchar(50),
    Estado VARCHAR(50),
    Logo VARCHAR(250)
);


select*from Contactame
-- Tabla Experiencias
CREATE TABLE Experiencias (
    id_Experiencia INT PRIMARY KEY AUTO_INCREMENT,
    Cargo VARCHAR(250) NOT NULL,
    Empresa VARCHAR(250) NOT NULL,
    AñoInicio varchar(50),
    AñoFinal varchar(50),
    EstadoActual VARCHAR(250),
    Desempeño VARCHAR(250)
);

-- Tabla Idiomas
CREATE TABLE Idiomas (
    id_Idioma INT PRIMARY KEY AUTO_INCREMENT,
    IdiomaNuevo VARCHAR(100) NOT NULL,
    Nivel VARCHAR(50)
);



-- Tabla Certificaciones
CREATE TABLE Certificaciones (
    id_Certificacion INT PRIMARY KEY AUTO_INCREMENT,
    Titulo VARCHAR(250) NOT NULL,
    InstitucionEducativa VARCHAR(250) NOT NULL,
    AñoInicio varchar(50),
    HorasAcademica VARCHAR(50),
    Codigo VARCHAR(250),
    Url VARCHAR(250),
    FotoCertificado VARCHAR(250)
);

select*from Certificaciones where id_Certificacion=1
-- Tabla Skills
CREATE TABLE Skills (
    id_Skill INT PRIMARY KEY AUTO_INCREMENT,
    NombreSkill VARCHAR(250) NOT NULL,
    LogoSkill varchar(250) not null
);


-- Tabla Proyectos
CREATE TABLE Proyectos (
    id_Proyecto INT PRIMARY KEY AUTO_INCREMENT,
    NombreProyecto VARCHAR(250) NOT NULL,
    Descripcion VARCHAR(300),
    Repositorio VARCHAR(250)
);

-- Tabla Contactame
CREATE TABLE Contactame (
    id_Contactame INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Empresa VARCHAR(250),
    Motivo VARCHAR(50),
    Comentario VARCHAR(500)
);
select*from Contactame

SELECT*FROM Formaciones
-- Formaciones
INSERT INTO Formaciones (Titulo, InstitucionEducativa, AñoInicio, AñoFinEstimado, Estado, Logo)
VALUES ("TECNICO UNIVERSITARIO EN PROGRAMACION","Universidad Tecnologica Nacional - FRT","2023", "2024", "Cursando 2° Año","../../assets/UTN_logo.jpg");
INSERT INTO Formaciones (Titulo, InstitucionEducativa, AñoInicio, AñoFinEstimado, Estado, Logo)
VALUES ("Ingenieria Industrial", "Universidad Nacional de Tucuman UNT", "", "2012", "Incompleto", "https://drive.google.com/file/d/1bMj9Xq2i8BrmAovTVnwSDLx4j_H35YyQ/view?usp=sharing");

-- Experiencias
INSERT INTO Experiencias (Cargo, Empresa, AñoInicio, AñoFinal, EstadoActual, Desempeño)
VALUES ("Operador de Servicio de Acuda a Sucursales (S.A.S.)", "Benja Seguridad Privada SRL", "2015", "", "Trabajo Actual", "Control y manejos de servicos de Seguridad fisica Banco Macro");

-- Idiomas
INSERT INTO Idiomas (IdiomaNuevo, Nivel)
VALUES ("INGLES", "B2");

-- Certificaciones
INSERT INTO Certificaciones (Titulo, InstitucionEducativa, AñoInicio, HorasAcademica, Codigo, Url, FotoCertificado)
VALUES ("Introduccion a Git y GitHub","Todo Code Academy", "2024", "2 Hs", "First slide", "", 1);
INSERT INTO Certificaciones (Titulo, InstitucionEducativa, AñoInicio, HorasAcademica, Codigo, Url, FotoCertificado)
VALUES ("Introduccion a la base de datos Relacionales (con MySQL)", "Todo Code Academy", "2024", "3 Hs",  "Second slide", "", 2);
INSERT INTO Certificaciones (Titulo, InstitucionEducativa, AñoInicio, HorasAcademica, Codigo, Url, FotoCertificado)
VALUES ("Programacion desde Cero","Egg Company","2022","81 Hs", "", "", 3);
INSERT INTO Certificaciones (Titulo, InstitucionEducativa, AñoInicio, HorasAcademica, Codigo, Url, FotoCertificado)
VALUES ("Foundational C# With Microsoft","Todo Code Academy","2023","300 Hs","","", 4);
INSERT INTO Certificaciones (Titulo, InstitucionEducativa, AñoInicio, HorasAcademica, Codigo, Url, FotoCertificado)
VALUES ("Ingles General Para Desarrollador de Software","Centro Universitario de Idiomas","2023","50 Hs","","", 5);
INSERT INTO Certificaciones (Titulo, InstitucionEducativa, AñoInicio, HorasAcademica, Codigo, Url, FotoCertificado)
VALUES ("Aprende Scrum","Linkedin Learning","2022","1:32 Hs","","",6);
INSERT INTO Certificaciones (Titulo, InstitucionEducativa, AñoInicio, HorasAcademica, Codigo, Url, FotoCertificado)
VALUES ("SeProgramar","Argentina Programa","2021"," ","","", 7);
INSERT INTO Certificaciones (Titulo, InstitucionEducativa, AñoInicio, HorasAcademica, Codigo, Url, FotoCertificado)
VALUES ("Yo Programo - Web Full Stack Jr","Argetina Programa 4.0","2024","400 Hs","","", 8);
INSERT INTO Certificaciones (Titulo, InstitucionEducativa, AñoInicio, HorasAcademica, Codigo, Url, FotoCertificado)
VALUES ( "Bases de la Informatica en la nube para administradores","Microsoft","2022","2:05 Hs","", "", 9);
INSERT INTO Certificaciones (Titulo, InstitucionEducativa, AñoInicio, HorasAcademica, Codigo, Url, FotoCertificado)
VALUES ("Desarrollo Web I","Google Activate","2022","40 Hs","", "",10);
INSERT INTO Certificaciones (Titulo, InstitucionEducativa, AñoInicio, HorasAcademica, Codigo, Url, FotoCertificado)
VALUES ("Desarrollo Web II","Google Activate","2024","40 Hs","","", 11);

-- Skills
select *from Skills;
INSERT INTO Skills (NombreSkill,LogoSkill)
VALUES ("ADO.Net","");
INSERT INTO Skills (NombreSkill,LogoSkill)
VALUES ("CSharp","");
INSERT INTO Skills (NombreSkill,LogoSkill)
VALUES ("CSS","");
INSERT INTO Skills (NombreSkill,LogoSkill)
VALUES ( "HTML","");
INSERT INTO Skills (NombreSkill,LogoSkill)
VALUES ("MySQL","");
INSERT INTO Skills (NombreSkill,LogoSkill)
VALUES ("NodeJs","");
INSERT INTO Skills (NombreSkill,LogoSkill)
VALUES ("React","");
INSERT INTO Skills (NombreSkill,LogoSkill)
VALUES ("SQL","");
INSERT INTO Skills (NombreSkill,LogoSkill)
VALUES ("JS","");


-- Proyectos
INSERT INTO Proyectos (NombreProyecto, Descripcion, Repositorio)
VALUES ("Porfolio-UTN","Proyecto creado en React-Vite en el cual use, Nodejs,React-Bootstrap,CSS,MySQL,Express,CRUD,Routing,Hook","https://github.com/ChocobarMatias/Portfolio-UTN");
INSERT INTO Proyectos (NombreProyecto, Descripcion, Repositorio)
VALUES ("Calculadora-Windows-Form","Calculadora creada con .Net es una App de escritorio","https://github.com/ChocobarMatias/Calculadora-Simple---Windows-Forms");
INSERT INTO Proyectos (NombreProyecto, Descripcion, Repositorio)
VALUES ("Temporizador Windows Form","Temporizador creado con .Net es una App de esccritorio","https://github.com/ChocobarMatias/Temporizador-Hotel-Alojamiento");

-- Contactame
INSERT INTO Contactame (Nombre, Email, Empresa, Motivo, Comentario)
VALUES (?, ?, ?, ?, ?, ?);
