USE [Project]
GO

/****** Object:  Table [dbo].[Academic_Details_Scholarships]    Script Date: 03-08-2022 00:23:10 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Academic_Details_Scholarships](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[applicationid] [int] NOT NULL,
	[InstituteName] [varchar](50) NULL,
	[PresentCourse] [varchar](50) NULL,
	[PresentYear] [varchar](50) NULL,
	[ModeOfStudy] [varchar](50) NULL,
	[UniversityName] [varchar](50) NULL,
	[ClassStartDate] [varchar](50) NULL,
	[PreviousClass] [varchar](50) NULL,
	[PreviousClassYear] [varchar](50) NULL,
	[PreviousClassPercentage] [varchar](50) NULL,
	[RegisterTimestamp] [varchar](50) NULL,
 CONSTRAINT [PK_Academic_Details_Scholarships] PRIMARY KEY CLUSTERED 
(
	[applicationid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


