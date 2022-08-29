USE [Project]
GO

/****** Object:  Table [dbo].[StudentRegistrations]    Script Date: 03-08-2022 00:26:43 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[StudentRegistrations](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[applicationid] [int] NOT NULL,
	[State] [varchar](50) NULL,
	[District] [varchar](50) NULL,
	[Name] [varchar](50) NULL,
	[Dob] [varchar](50) NULL,
	[Gender] [varchar](50) NULL,
	[Email] [varchar](50) NULL,
	[Mobile] [varchar](50) NULL,
	[InstituteCode] [int] NULL,
	[AadharNo] [varchar](50) NULL,
	[BankIfsc] [varchar](50) NULL,
	[BankAccNo] [varchar](50) NULL,
	[BankName] [varchar](50) NULL,
	[PasswordSet] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[applicationid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


