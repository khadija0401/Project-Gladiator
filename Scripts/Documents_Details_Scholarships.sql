USE [Project]
GO

/****** Object:  Table [dbo].[Documents_Details_Scholarships]    Script Date: 03-08-2022 00:24:42 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Documents_Details_Scholarships](
	[DomicileCertificate] [varchar](50) NULL,
	[applicationid] [int] NOT NULL,
	[StudentPhoto] [varchar](50) NULL,
	[InstituteIdCard] [varchar](50) NULL,
	[PreviousYearMarksheet] [varchar](50) NULL,
	[FeeReceipt] [varchar](50) NULL,
	[BankPassbook] [varchar](50) NULL,
	[AadharCard] [varchar](50) NULL,
	[SscMarksheet] [varchar](50) NULL,
	[HscMarksheet] [varchar](50) NULL,
	[IncomeCertificate] [varchar](50) NULL,
	[status] [varchar](50) NULL,
 CONSTRAINT [PK_Documents_Details_Scholarships] PRIMARY KEY CLUSTERED 
(
	[applicationid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Documents_Details_Scholarships] ADD  DEFAULT ('applied') FOR [status]
GO


