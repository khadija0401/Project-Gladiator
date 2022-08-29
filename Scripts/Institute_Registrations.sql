USE [Project]
GO

/****** Object:  Table [dbo].[Institute_Registrations]    Script Date: 03-08-2022 00:24:54 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Institute_Registrations](
	[instId] [int] IDENTITY(1,1) NOT NULL,
	[Institute_Category] [varchar](50) NULL,
	[Institute_Name] [varchar](50) NULL,
	[Institute_State] [varchar](50) NULL,
	[Institute_District] [varchar](50) NULL,
	[institute_Code] [int] NOT NULL,
	[Dise_Code] [varchar](50) NULL,
	[Location] [varchar](50) NULL,
	[Institute_Type] [varchar](50) NULL,
	[Affiliated_Uni_State] [varchar](50) NULL,
	[Affiliated_Uni_Name] [varchar](50) NULL,
	[Year_Admission_Start] [varchar](50) NULL,
	[Set_Password] [varchar](50) NULL,
	[Institute_Est_Certificate] [varchar](50) NULL,
	[University_Certificate] [varchar](50) NULL,
	[Address_1] [varchar](50) NULL,
	[Address_2] [varchar](50) NULL,
	[City] [varchar](50) NULL,
	[Address_State] [varchar](50) NULL,
	[Address_District] [varchar](50) NULL,
	[Address_Pincode] [varchar](50) NULL,
	[Principle_Name] [varchar](50) NULL,
	[Principle_MobileNo] [varchar](50) NULL,
	[status] [varchar](50) NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Institute_Registrations] ADD  DEFAULT ('applied') FOR [status]
GO


