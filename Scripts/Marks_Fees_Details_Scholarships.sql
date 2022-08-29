USE [Project]
GO

/****** Object:  Table [dbo].[Marks_Fees_Details_Scholarships]    Script Date: 03-08-2022 00:25:22 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Marks_Fees_Details_Scholarships](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[applicationid] [int] NOT NULL,
	[SscRollNo] [varchar](50) NULL,
	[SscBoardName] [varchar](50) NULL,
	[SscPassYear] [varchar](50) NULL,
	[SscClassPercentage] [varchar](50) NULL,
	[HscRollNo] [varchar](50) NULL,
	[HscBoardName] [varchar](50) NULL,
	[HscPassYear] [varchar](50) NULL,
	[HscClassPercentage] [varchar](50) NULL,
	[AdmissionFee] [varchar](50) NULL,
	[TuitionFee] [varchar](50) NULL,
	[OtherFee] [varchar](50) NULL,
	[RegisterTimestamp] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[applicationid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


