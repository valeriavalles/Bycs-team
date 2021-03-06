USE [master]
GO
/****** Object:  Database [bdproyectoSyCs]    Script Date: 14/11/2021 18:01:41 ******/
CREATE DATABASE [bdproyectoSyCs]
GO

USE [bdproyectoSyCs]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 14/11/2021 18:01:43 ******/

CREATE TABLE [dbo].[Usuario](
	[id] [int] IDENTITY PRIMARY KEY,
	[nombres] [varchar](100) NULL,
	[apellidos] [varchar](100) NULL,
	[correo] [varchar](50) NULL,
	[direccion] [varchar](100) NULL,
	[tipousuario] [varchar](100) NULL,
	[dni] [char](8) NULL,
	[numeroceltel] [varchar](100) NULL,
	[tiposervicio] [varchar](100) NULL
)

GO
