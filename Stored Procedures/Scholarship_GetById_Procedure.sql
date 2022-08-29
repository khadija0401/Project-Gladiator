USE [Project]
GO

/****** Object:  StoredProcedure [dbo].[Scholarship_GetById_Procedure]    Script Date: 04-08-2022 23:28:50 ******/
DROP PROCEDURE [dbo].[Scholarship_GetById_Procedure]
GO

/****** Object:  StoredProcedure [dbo].[Scholarship_GetById_Procedure]    Script Date: 04-08-2022 23:28:50 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[Scholarship_GetById_Procedure](@applicationid int)
	-- Add the parameters for the stored procedure here
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT dbo.Academic_Details_Scholarships.applicationid, dbo.Academic_Details_Scholarships.InstituteName, dbo.Academic_Details_Scholarships.PresentCourse, dbo.Academic_Details_Scholarships.PresentYear, dbo.Academic_Details_Scholarships.ModeOfStudy, 
             dbo.Academic_Details_Scholarships.UniversityName, dbo.Academic_Details_Scholarships.ClassStartDate, dbo.Academic_Details_Scholarships.PreviousClass, dbo.Academic_Details_Scholarships.PreviousClassYear, dbo.Academic_Details_Scholarships.PreviousClassPercentage, 
             dbo.Academic_Details_Scholarships.RegisterTimestamp, dbo.Basic_Details_Scholarships.Religion, dbo.Basic_Details_Scholarships.Community, dbo.Basic_Details_Scholarships.FatherName, dbo.Basic_Details_Scholarships.MotherName, 
             dbo.Basic_Details_Scholarships.FamAnnualIncome, dbo.Documents_Details_Scholarships.DomicileCertificate, dbo.Documents_Details_Scholarships.InstituteIdCard, dbo.Documents_Details_Scholarships.PreviousYearMarksheet, 
             dbo.Documents_Details_Scholarships.StudentPhoto, dbo.Documents_Details_Scholarships.FeeReceipt, dbo.Documents_Details_Scholarships.BankPassbook, dbo.Documents_Details_Scholarships.AadharCard, dbo.Documents_Details_Scholarships.SscMarksheet, 
             dbo.Documents_Details_Scholarships.HscMarksheet, dbo.Documents_Details_Scholarships.IncomeCertificate, dbo.Personal_Contact_Details_Scholarships.IsDisabled, 
             dbo.Personal_Contact_Details_Scholarships.TypeOfDisability, dbo.Personal_Contact_Details_Scholarships.PercentageOfDisability, dbo.Personal_Contact_Details_Scholarships.MaritalStatus, dbo.Personal_Contact_Details_Scholarships.ParentsProffession, 
             dbo.Personal_Contact_Details_Scholarships.ContactState, dbo.Personal_Contact_Details_Scholarships.ContactDistrict, dbo.Personal_Contact_Details_Scholarships.ContactBlock, dbo.Personal_Contact_Details_Scholarships.HouseNumber, 
             dbo.Personal_Contact_Details_Scholarships.StreetNumber, dbo.Personal_Contact_Details_Scholarships.PinNumber, dbo.Personal_Contact_Details_Scholarships.ChooseScheme, dbo.Marks_Fees_Details_Scholarships.SscRollNo, 
             dbo.Marks_Fees_Details_Scholarships.SscBoardName, dbo.Marks_Fees_Details_Scholarships.SscPassYear, dbo.Marks_Fees_Details_Scholarships.SscClassPercentage, dbo.Marks_Fees_Details_Scholarships.HscRollNo, dbo.Marks_Fees_Details_Scholarships.HscBoardName, 
             dbo.Marks_Fees_Details_Scholarships.HscPassYear, dbo.Marks_Fees_Details_Scholarships.HscClassPercentage, dbo.Marks_Fees_Details_Scholarships.AdmissionFee, dbo.Marks_Fees_Details_Scholarships.TuitionFee, dbo.Marks_Fees_Details_Scholarships.OtherFee,
			  dbo.StudentRegistrations.Dob, dbo.StudentRegistrations.Gender, dbo.StudentRegistrations.Email, dbo.StudentRegistrations.Mobile, dbo.StudentRegistrations.InstituteCode, dbo.StudentRegistrations.AadharNo, dbo.StudentRegistrations.BankIfsc, 
             dbo.StudentRegistrations.BankAccNo, dbo.StudentRegistrations.BankName,  dbo.StudentRegistrations.State, dbo.StudentRegistrations.District, dbo.StudentRegistrations.Name, dbo.Documents_Details_Scholarships.status

FROM   dbo.Academic_Details_Scholarships INNER JOIN
             dbo.Basic_Details_Scholarships ON dbo.Academic_Details_Scholarships.applicationid = dbo.Basic_Details_Scholarships.applicationid INNER JOIN
             dbo.Documents_Details_Scholarships ON dbo.Academic_Details_Scholarships.applicationid = dbo.Documents_Details_Scholarships.applicationid INNER JOIN
             dbo.Marks_Fees_Details_Scholarships ON dbo.Academic_Details_Scholarships.applicationid = dbo.Marks_Fees_Details_Scholarships.applicationid INNER JOIN
             dbo.Personal_Contact_Details_Scholarships ON dbo.Academic_Details_Scholarships.applicationid = dbo.Personal_Contact_Details_Scholarships.applicationid INNER JOIN
             dbo.StudentRegistrations ON dbo.Academic_Details_Scholarships.applicationid = dbo.StudentRegistrations.applicationid

			 WHERE dbo.Academic_Details_Scholarships.applicationid = @applicationid;
END
GO


