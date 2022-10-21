CREATE DATABASE ReverseAuction
GO
USE ReverseAuction
GO
--Tạo table đăng nhập cho Admin--
CREATE TABLE RA_Admin
(
	Account varchar(20) NOT NULL,
	Pass varchar(20) NOT NULL,
	Quyen BIT DEFAULT 1,
	CONSTRAINT pk_Admin PRIMARY KEY (Account)
)
GO
-- Tạo bảng PROVINCE --
CREATE TABLE PROVINCE
(
  province_id nchar(5),
  province_name nvarchar(30) NOT NULL,
  PRIMARY KEY (province_id),
)
GO
-- Tạo bảng DICTRICT --
CREATE TABLE DISTRICT
(
  district_id nchar(5),
  district_name nvarchar(50) NOT NULL,
  province_id nchar(5) NOT NULL,
  PRIMARY KEY (district_id),
  FOREIGN KEY (province_id)
  REFERENCES province (province_id)
  ON DELETE CASCADE ON UPDATE CASCADE,
)
GO
-- Tạo bảng COMMUNE --
CREATE TABLE COMMUNE
(
  commune_id nchar(5),
  commune_name nvarchar(50) ,
  degree int,
  district_id nchar(5),
  PRIMARY KEY (commune_id),
  FOREIGN KEY (district_id)
  REFERENCES district (district_id)
  ON DELETE CASCADE ON UPDATE CASCADE
);
GO
-- Tạo table thông tin người dùng --
CREATE TABLE RA_User
(
	Phone varchar(10), --Tài khoản--
	Pass varchar(20) NOT NULL,
	Quyen BIT DEFAULT 0,
	First_Name nvarchar(20) NOT NULL ,
	Last_Name nvarchar(10) NOT NULL,
	BirthDay DATE NOT NULL,
	Address_User nvarchar(100) NOT NULL,
	Bank_name varchar(20),
	Bank_number varchar(20),
	Momo varchar(10),
	commune_id nchar(5),
	CONSTRAINT pk_NguoiDung PRIMARY KEY (Phone)
)
GO
-- Tạo table thông tin loại hàng --
CREATE TABLE RA_Category
(
	Category_id varchar(20) UNIQUE,
	Category_name varchar(50) NOT NULL,
	CONSTRAINT pk_Category PRIMARY KEY (Category_id)
)
GO
-- Tạo table thông tin sản phẩm --
CREATE TABLE RA_Product
(
	Product_id varchar(20) UNIQUE,
	Product_name nvarchar(100) NOT NULL,
	Short_Desciption nvarchar(200),
	Description_Details nvarchar(1000),
	Status varchar(20) NOT NULL,
	Color nvarchar(100),
	Size varchar(50),
	Weight_product float,
	image_product TEXT,
	Category_id varchar(20),
	CONSTRAINT pk_Product PRIMARY KEY (Product_id)
)
GO
-- Tạo table những sản phẩm mà người bán có --
CREATE TABLE Products_of_Seller
(
	Product_id varchar(20),
	Phone varchar(10),
	CONSTRAINT pk_PoS PRIMARY KEY (Product_id, Phone) 
)
GO
-- Tạo table giao dịch giữa người bán và người mua khi đấu giá thành công --
CREATE TABLE RA_Transaction
(
	Transaction_id int IDENTITY (1,1),
	Buyer varchar(10),
	Seller varchar(10),
	Address_Buyer nchar(5),
	Address_Seller nchar(5),
	PRICE_Transaction int,
	PRICE_Shipping int,
	Commission int,
	Product_id varchar(20),
	Transaction_Time DATETIME,
	CONSTRAINT pk_Transaction PRIMARY KEY (Transaction_id)
)
GO
-- Tạo table đánh giá cho sản phẩm của người bán của người mua --
CREATE TABLE RA_Comment
(
	Comment_id int IDENTITY(1,1),
	Buyer varchar(10),
	Seller varchar(10),
	Product_id varchar(20),
	Comment_Time DATETIME,
	Comment nvarchar(200),
	Image_Product TEXT,
	CONSTRAINT pk_Comment PRIMARY KEY (Comment_id)
)
GO

-- Tạo khóa ngoại cho bảng RA_User --
alter table RA_User
add constraint Commune_User
foreign key (commune_id)
references COMMUNE(commune_id)
GO
-- Tạo khóa ngoại cho bảng RA_Product --
alter table RA_Product
add constraint Products_of_Category
foreign key (Category_id)
references RA_Category(Category_id)
GO
-- Tạo khóa ngoại cho bảng Products_of_Seller --
	-- Tham chiếu đến Product_id của bảng RA_Product --
alter table Products_of_Seller
add constraint products
foreign key (Product_id)
references RA_Product(Product_id)
GO
	-- Tham chiếu đến Phone của bảng RA_User --
alter table Products_of_Seller
add constraint Sellers
foreign key (Phone)
references RA_User(Phone)
GO
-- Tạo khóa ngoại cho bảng RA_Transaction --
	-- Tham chiếu đến Product_id của bảng RA_Product --
alter table RA_Transaction
add constraint T_products
foreign key (Product_id)
references RA_Product(Product_id)
GO
	-- Tham chiếu đến Phone của bảng RA_User --
alter table RA_Transaction
add constraint T_Sellers
foreign key (Seller)
references RA_User(Phone)
GO

alter table RA_Transaction
add constraint T_Buyers
foreign key (Buyer)
references RA_User(Phone)
GO
	--Tham chiếu đến commune_id của bảng COMMUNE --
alter table RA_Transaction
add constraint AddressS
foreign key (Address_Seller)
references COMMUNE(commune_id)
GO

alter table RA_Transaction
add constraint AddressB
foreign key (Address_Buyer)
references COMMUNE(commune_id)
GO

-- Tạo khóa ngoại cho bảng RA_Comment --
	-- Tham chiếu đến Product_id của bảng RA_Product --
alter table RA_Comment
add constraint C_products
foreign key (Product_id)
references RA_Product(Product_id)
GO
	-- Tham chiếu đến Seller của bảng RA_User --
alter table RA_Comment
add constraint C_Sellers
foreign key (Seller)
references RA_User(Phone)
GO
	-- Tham chiếu đến Buyer của bảng RA_User --
alter table RA_Comment
add constraint C_Buyers
foreign key (Buyer)
references RA_User(Phone)
GO

-- Trigger kiểm tra thời gian comment có sau thời gian mua hàng không --
CREATE TRIGGER check_Time_TranAndCom
ON RA_Comment
AFTER INSERT
AS
BEGIN
DECLARE
		@TimeT DATETIME, @BuyerT varchar(10), @SellerT varchar(10), @Product_idT varchar(20),  
		@TimeC DATETIME, @BuyerC varchar(10), @SellerC varchar(10), @Product_idC varchar(20) 
SELECT  @TimeT = Transaction_Time, 
		@BuyerT = Buyer,
		@SellerT = Seller,
		@Product_idT = Product_id
FROM RA_Transaction
SELECT  @TimeC = Comment_Time, 
		@BuyerC = Buyer,
		@SellerC = Seller,
		@Product_idC = Product_id
FROM RA_Comment
IF (@BuyerT = @BuyerC and @SellerT = @SellerC and @Product_idT = @Product_idC and DATEDIFF(Second,@TimeT,@TimeC) > 0)
BEGIN
PRINT N'Sucess'
END
ELSE
BEGIN
ROLLBACK TRANSACTION
END
END
GO

-- Trigger tính tiền hoa hồng cho sản phẩm đấu giá thành công --
CREATE TRIGGER Commission_Calculation
ON RA_Transaction
FOR INSERT
AS
BEGIN
DECLARE @Price int
SELECT @Price = i.PRICE_Transaction
FROM inserted i

IF (@Price <= 1000000)
BEGIN
UPDATE RA_Transaction
SET Commission = @Price * 5/100
END

ELSE IF (1000000 < @Price AND @Price <= 10000000)
BEGIN
UPDATE RA_Transaction
SET Commission = @Price * 2/100
END

ELSE IF (@Price > 1000000)
BEGIN
UPDATE RA_Transaction
SET Commission = @Price *1/100
END

ELSE
ROLLBACK TRANSACTION
END


