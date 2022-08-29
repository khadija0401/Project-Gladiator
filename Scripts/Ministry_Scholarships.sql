USE [Project]
GO

/****** Object:  Table [dbo].[Ministry_Scholarships]    Script Date: 03-08-2022 00:25:41 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Ministry_Scholarships](
	[scholarshipid] [int] IDENTITY(1,1) NOT NULL,
	[scholarshipcode] [varchar](50) NULL,
	[scholarshipname] [varchar](50) NULL,
	[ministrycode] [varchar](50) NULL,
	[scholarshipdescription] [text] NULL,
	[incomelimit] [int] NULL,
	[eligibility] [varchar](50) NULL,
 CONSTRAINT [PK_Ministry_Scholarships] PRIMARY KEY CLUSTERED 
(
	[scholarshipid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


