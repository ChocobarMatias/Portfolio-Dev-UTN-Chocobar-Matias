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

-- Tabla Administradores
CREATE TABLE Administradores (
    id_Administrador INT PRIMARY KEY AUTO_INCREMENT,
    id_Usuario INT,
    FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario),
    Admin_trador BOOLEAN DEFAULT false
);

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


