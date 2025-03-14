create database BD_Portfolio_Matias;
use BD_Portfolio_Matias;

-- Usuario
select*from Contactame
-- Tabla Usuarios
CREATE TABLE Usuarios (
    id_Usuario INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(50) NOT NULL,
    userName VARCHAR(50) NOT NULL,
    Email VARCHAR(250) NOT NULL UNIQUE,
    Contraseña VARCHAR(255) NOT NULL,
    Activo BOOLEAN DEFAULT false,
    Rol ENUM('admin', 'usuario') DEFAULT 'usuario' 
);
SELECT * FROM Usuarios WHERE userName = "mat_choco"
DROP TABLE IF EXISTS Usuarios;
select*from Formaciones
-- Insertando datos en la tabla Usuarios
INSERT INTO Usuarios (Nombre, Apellido,userName, Email, Contraseña, Activo, Rol) 
VALUES
("Matias", "Chocobar","mat_choco", "chocobar_matias@yahoo.com.ar", "Programadormia9292", true, 'admin'),
("Natalia", "Rodriguez","naty_rod", "deborahnatalia84@hotmail.com", "DiseñadoraLic9505", true, 'admin'),
("Admin", "Prueba","prueba", "pruebaadmin@prueba.com", "admin", true, 'usuario');
select * from Skills


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
select*from Experiencias
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
select *from Certificaciones
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
    ImagenProyecto varchar(250) not null,
    Descripcion VARCHAR(300),
    Repositorio VARCHAR(250)
);
-- Tabla Contactame
select*from Contactame
CREATE TABLE Contactame (
    id_Contactame INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Motivo VARCHAR(50),
    Comentario VARCHAR(500)
);
select * from Contactame


delete from Formaciones where id_Formacion = 2
-- Formaciones
INSERT INTO Formaciones (Titulo, InstitucionEducativa, AñoInicio, AñoFinEstimado, Estado, Logo)
VALUES ("TECNICO UNIVERSITARIO EN PROGRAMACION","Universidad Tecnologica Nacional - FRT","2023", "2024", "Cursando 2° Año","https://imgur.com/Kuk9GHV.jpeg");
INSERT INTO Formaciones (Titulo, InstitucionEducativa, AñoInicio, AñoFinEstimado, Estado, Logo)
VALUES ("Ingenieria Industrial", "Universidad Nacional de Tucuman UNT", "", "2012", "Incompleto", "https://imgur.com/VAHZlRi.jpeg");

-- Experiencias
INSERT INTO Experiencias (Cargo, Empresa, AñoInicio, AñoFinal, EstadoActual, Desempeño)
VALUES ("Operador de Servicio de Acuda a Sucursales (S.A.S.)", "Benja Seguridad Privada SRL", "2015", "", "Trabajo Actual", "Control y manejos de servicos de Seguridad fisica Banco Macro");

-- Idiomas
select *from Experiencias
INSERT INTO Idiomas (IdiomaNuevo, Nivel)
VALUES ("INGLES", "B2");
select*from Certificaciones
delete from Certificaciones where id_Certificacion = 4
-- Certificaciones
INSERT INTO Certificaciones (Titulo, InstitucionEducativa, AñoInicio, HorasAcademica, Codigo, Url, FotoCertificado)
VALUES ("Introduccion a Git y GitHub","Todo Code Academy", "2024", "2 Hs", "First slide", "", "https://imgur.com/XNo4z1T.jpeg");
INSERT INTO Certificaciones (Titulo, InstitucionEducativa, AñoInicio, HorasAcademica, Codigo, Url, FotoCertificado)
VALUES ("Introduccion a la base de datos Relacionales (con MySQL)", "Todo Code Academy", "2024", "3 Hs",  "Second slide", "", "https://i.imgur.com/UTL55cx.jpeg");
INSERT INTO Certificaciones (Titulo, InstitucionEducativa, AñoInicio, HorasAcademica, Codigo, Url, FotoCertificado)
VALUES ("Programacion desde Cero","Egg Company","2022","81 Hs", "", "", "https://i.imgur.com/dCqikdz.jpeg");
INSERT INTO Certificaciones (Titulo, InstitucionEducativa, AñoInicio, HorasAcademica, Codigo, Url, FotoCertificado)
VALUES ("Foundational C# With Microsoft","FreeCodeCamp","2023","300 Hs","","", "https://imgur.com/sCoXEsy.jpeg");
INSERT INTO Certificaciones (Titulo, InstitucionEducativa, AñoInicio, HorasAcademica, Codigo, Url, FotoCertificado)
VALUES ("Ingles General Para Desarrollador de Software","Centro Universitario de Idiomas","2023","50 Hs","","", "https://imgur.com/AJdUrRk.jpeg");
INSERT INTO Certificaciones (Titulo, InstitucionEducativa, AñoInicio, HorasAcademica, Codigo, Url, FotoCertificado)
VALUES ("Aprende Scrum","Linkedin Learning","2022","1:32 Hs","","","https://imgur.com/jk9P9az.jpeg");
INSERT INTO Certificaciones (Titulo, InstitucionEducativa, AñoInicio, HorasAcademica, Codigo, Url, FotoCertificado)
VALUES ("SeProgramar","Argentina Programa","2021"," ","","", "https://imgur.com/McPGVKj.jpeg");
INSERT INTO Certificaciones (Titulo, InstitucionEducativa, AñoInicio, HorasAcademica, Codigo, Url, FotoCertificado)
VALUES ("Yo Programo - Web Full Stack Jr","Argetina Programa 4.0","2024","400 Hs","","", "https://imgur.com/hboYK5c.jpeg");
INSERT INTO Certificaciones (Titulo, InstitucionEducativa, AñoInicio, HorasAcademica, Codigo, Url, FotoCertificado)
VALUES ( "Bases de la Informatica en la nube para administradores","Microsoft","2022","2:05 Hs","", "", "https://imgur.com/5K7ul0n.jpeg");
INSERT INTO Certificaciones (Titulo, InstitucionEducativa, AñoInicio, HorasAcademica, Codigo, Url, FotoCertificado)
VALUES ("Desarrollo Web I","Google Activate","2022","40 Hs","", "","https://imgur.com/HFe0TVq.jpeg");
INSERT INTO Certificaciones (Titulo, InstitucionEducativa, AñoInicio, HorasAcademica, Codigo, Url, FotoCertificado)
VALUES ("Desarrollo Web II","Google Activate","2024","40 Hs","","", "https://imgur.com/5oYKEtO.jpeg");

-- Skills
select *from Skills;
drop table Skills
INSERT INTO Skills (NombreSkill,LogoSkill)
VALUES ("ADO.Net","https://imgur.com/7douG9T.jpeg");
INSERT INTO Skills (NombreSkill,LogoSkill)
VALUES ("CSharp","https://imgur.com/KnuDLQR.jpeg");
INSERT INTO Skills (NombreSkill,LogoSkill)
VALUES ("CSS","https://imgur.com/A6e3XzE.jpeg");
INSERT INTO Skills (NombreSkill,LogoSkill)
VALUES ( "HTML","https://imgur.com/Q8W7e5q.jpeg");
INSERT INTO Skills (NombreSkill,LogoSkill)
VALUES ("MySQL","https://imgur.com/Uz30nvt.jpeg");
INSERT INTO Skills (NombreSkill,LogoSkill)
VALUES ("NodeJs","https://imgur.com/2OJNyVD.jpeg");
INSERT INTO Skills (NombreSkill,LogoSkill)
VALUES ("React","https://imgur.com/7sf8V5L.jpeg");
INSERT INTO Skills (NombreSkill,LogoSkill)
VALUES ("SQL","https://imgur.com/FCdAisS.jpeg");
INSERT INTO Skills (NombreSkill,LogoSkill)
VALUES ("JS","https://imgur.com/E1U2y5g.jpeg");


-- Proyectos

select *from Proyectos
INSERT INTO Proyectos (NombreProyecto,ImagenProyecto, Descripcion, Repositorio)
VALUES ("Porfolio-UTN","https://imgur.com/HHq5PzG.jpeg","Proyecto creado en React-Vite en el cual use, Nodejs,React-Bootstrap,CSS,MySQL,Express,CRUD,Routing,Hook","https://github.com/ChocobarMatias/Portfolio-UTN");
INSERT INTO Proyectos (NombreProyecto,ImagenProyecto, Descripcion, Repositorio)
VALUES ("Calculadora-Windows-Form","https://imgur.com/Wnbuuji.jpeg","Calculadora creada con .Net es una App de escritorio","https://github.com/ChocobarMatias/Calculadora-Simple---Windows-Forms");
INSERT INTO Proyectos (NombreProyecto,ImagenProyecto, Descripcion, Repositorio)
VALUES ("Temporizador Windows Form","https://imgur.com/7EHPszT.jpeg","Temporizador creado con .Net es una App de esccritorio","https://github.com/ChocobarMatias/Temporizador-Hotel-Alojamiento");
INSERT INTO Proyectos (NombreProyecto,ImagenProyecto, Descripcion, Repositorio)
VALUES ("Método de Gaus Jordan Matrices","https://imgur.com/T2NtIgN.jpeg","Aplicación de consola C#(CSharp) calculo del método del sistema de ecuaciones 3x3 con Método de Gaus Jordan Muestra por pantalla el armado del sistema de ecuaciones, de las matrices, la matriz ampleada y los resultados y el cálculo de la verificación.","https://github.com/ChocobarMatias/Metodo-de-Gauss-Jordan-Matriz-3x3");
INSERT INTO Proyectos (NombreProyecto,ImagenProyecto, Descripcion, Repositorio)
VALUES ("Metodo de Cramer Matrices","https://imgur.com/8EncEVu.jpeg","Aplicación de consola C# (CSharp) deL metodo de Cramer para sistemas de ecuaciones 2x2 / 3x3 / 4x4 (cálculo de determinante/Sarrus combinación con Laplace)","https://github.com/ChocobarMatias/Metodo-de-Cramer");


select * from Proyectos

-- Contactame
INSERT INTO Contactame (Nombre, Email, Empresa, Motivo, Comentario)
VALUES (?, ?, ?, ?, ?, ?);
