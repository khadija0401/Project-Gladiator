USE [Project]
GO

/****** Object:  Table [dbo].[Personal_Contact_Details_Scholarships]    Script Date: 03-08-2022 00:25:57 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Personal_Contact_Details_Scholarships](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[applicationid] [int] NOT NULL,
	[IsDisabled] [varchar](50) NULL,
	[TypeOfDisability] [varchar](50) NULL,
	[PercentageOfDisability] [varchar](50) NULL,
	[MaritalStatus] [varchar](50) NULL,
	[ParentsProffession] [varchar](50) NULL,
	[ContactState] [varchar](50) NULL,
	[ContactDistrict] [varchar](50) NULL,
	[ContactBlock] [varchar](50) NULL,
	[HouseNumber] [varchar](50) NULL,
	[StreetNumber] [varchar](50) NULL,
	[PinNumber] [varchar](50) NULL,
	[ChooseScheme] [varchar](50) NULL,
	[RegisterTimestamp] [varchar](50) NULL,
 CONSTRAINT [PK_Personal_Contact_Details_Scholarships] PRIMARY KEY CLUSTERED 
(
	[applicationid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


