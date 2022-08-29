USE [Project]
GO

/****** Object:  Table [dbo].[Basic_Details_Scholarships]    Script Date: 03-08-2022 00:24:24 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Basic_Details_Scholarships](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[applicationid] [int] NOT NULL,
	[Religion] [varchar](50) NULL,
	[Community] [varchar](50) NULL,
	[FatherName] [varchar](50) NULL,
	[MotherName] [varchar](50) NULL,
	[FamAnnualIncome] [varchar](50) NULL,
	[RegisterTimestamp] [varchar](50) NULL,
 CONSTRAINT [PK_Basic_Details_Scholarship] PRIMARY KEY CLUSTERED 
(
	[applicationid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


