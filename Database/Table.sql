CREATE DATABASE ReverseAuction
GO
USE ReverseAuction
GO
--Tạo table đăng nhập cho Admin--
CREATE TABLE "Admin"
(
	account varchar(20) NOT NULL,
	pass varchar(20) NOT NULL,
	CONSTRAINT pk_Admin PRIMARY KEY (account)
)
GO
-- Tạo bảng DICTRICT --
CREATE TABLE DISTRICT
(
  id int IDENTITY(1,1),
  "name" nvarchar(50) NOT NULL,
  code char(20),
  CONSTRAINT pk_District PRIMARY KEY (id),
)
GO
-- Tạo bảng Ward --
CREATE TABLE WARD
(
	id int IDENTITY(1,1),
	"name" nvarchar(50) NOT NULL,
	code char(20),
	district_id int,
	CONSTRAINT pk_Ward PRIMARY KEY (id)
)
-- Tạo table thông tin người dùng --
CREATE TABLE "User"
(
	account_name varchar(20) unique,
	pass varchar(20) NOT NULL,
	first_name nvarchar(20) NOT NULL ,
	last_name nvarchar(10) NOT NULL,
	birthday DATE NOT NULL,
	email varchar(50),
	status_user bit default 1,
	CONSTRAINT pk_NguoiDung PRIMARY KEY (account_Name)
)
GO
-- Tạo table thông tin chi tiết người dùng --
CREATE TABLE User_details
(
	id int IDENTITY(1,1),  
	account_name varchar(20),
	ward_id int,
	phone char(10),
	address_details nvarchar(100),
	CONSTRAINT pk_User_details PRIMARY KEY (id)
)

-- Tạo table thông tin loại hàng --
CREATE TABLE Category
(
	id int IDENTITY(1,1),
	"name" nvarchar(50) NOT NULL,
	CONSTRAINT pk_Category PRIMARY KEY (id)
)
GO
-- Tạo table thông tin sản phẩm --
CREATE TABLE Product
(
	id int IDENTITY(1,1),
	"name" nvarchar(100) NOT NULL,
	"description" nvarchar(1000),
	manufacturer nvarchar(30),
	image_product TEXT,
	category_id int,
	account_name varchar(20),
	CONSTRAINT pk_Product PRIMARY KEY (id)
)
GO
-- Tạo table phí vận chuyển --
CREATE TABLE Shipping
(
	id int IDENTITY(1,1),
	address_start int,
	address_end int,
	price int,
	CONSTRAINT pk_Shipping PRIMARY KEY (id)
)
GO
-- Tạo table biểu phí thanh toán --
CREATE TABLE Tariff
(
	id int IDENTITY(1,1),
	price_start int,
	price_end int,
	price_commission real,
	CONSTRAINT pk_Tariff PRIMARY KEY (id)
)
GO
-- Tạo table lưu trữ phiên chuẩn bị đấu giá
CREATE TABLE Waiting_auction
(
	id int IDENTITY(1,1),
	product_id int,
	buyer varchar(20),
	CONSTRAINT pk_Waiting_auction PRIMARY KEY (id)
)
GO
-- Tạo table lưu trữ phiên đấu giá --
CREATE TABLE Auction
(
	id int IDENTITY(1,1),
	waiting_auction_id int,
	time_start datetime,
	time_end datetime,
	price_transaction int,
	price_shipping int,
	commission int,
	seller_end varchar(20),
	"status" varchar(10),
	CONSTRAINT pk_Auction PRIMARY KEY (id)
)
GO
-- Tạo table lưu trữ chi tiết phiên đấu giá --
CREATE TABLE Auction_details
(
	id int IDENTITY(1,1),
	auction_id int,
	seller varchar(20),
	price int,
	time_auction datetime,
	CONSTRAINT pk_Auction_details PRIMARY KEY (id)
)
GO

-- Tạo table các trạng thái đơn hàng --
CREATE TABLE "Status"
(
	id int IDENTITY(1,1),
	"status" varchar(20),
	CONSTRAINT pk_Status PRIMARY KEY (id)
)
-- Tạo table thể hiện trạng thái của đơn hàng --
CREATE TABLE Order_status
(
	id int IDENTITY(1,1),
	auction_id int,
	status_id int,
	CONSTRAINT pk_Order_status PRIMARY KEY (id)
)
-- Tạo table đánh giá cho sản phẩm của người bán của người mua --
CREATE TABLE Comment
(
	id int IDENTITY(1,1),
	order_id int,
	comment_time DATETIME,
	comment nvarchar(1000),
	image_Product TEXT,
	CONSTRAINT pk_Comment PRIMARY KEY (id)
)
GO

-- Tạo khóa ngoại cho bảng WARD --
alter table WARD
add constraint ward_District
foreign key (district_id)
references DISTRICT(id)
GO
-- Tạo khóa ngoại cho bảng User_details --
alter table User_details
add constraint ward_User
foreign key (ward_id)
references WARD(id)
GO

alter table User_details
add constraint account_User
foreign key (account_name)
references "User"(account_name)
GO
-- Tạo khóa ngoại cho bảng Product --
alter table Product
add constraint Products_of_Category
foreign key (category_id)
references Category(id)
GO

alter table Product
add constraint Products_of_User
foreign key (account_name)
references "User"(account_name)
GO
-- Tạo khóa ngoại cho bảng Shipping --
alter table Shipping
add constraint address1
foreign key (address_start)
references DISTRICT(id)
GO

alter table Shipping
add constraint address2
foreign key (address_end)
references DISTRICT(id)
GO
-- Tạo khóa ngoại cho bảng Waiting_auction --
alter table Waiting_auction
add constraint product_auction
foreign key (product_id)
references Product(id)
GO

alter table Waiting_auction
add constraint buyer_auction
foreign key (buyer)
references "User"(account_name)
GO

-- Tạo khóa ngoại cho bảng Auction --
alter table Auction
add constraint wait
foreign key (waiting_auction_id)
references Waiting_auction(id)
GO

alter table Auction
add constraint seller_auction
foreign key (seller_end)
references "User"(account_name)
GO

-- Tạo khóa ngoại cho bảng Auction_details --
alter table Auction_details
add constraint auctions
foreign key (auction_id)
references Auction(id)
GO

alter table Auction_details
add constraint sellers
foreign key (seller)
references "User"(account_name)
GO
-- Tạo khóa ngoại cho bảng Comment --
alter table Comment
add constraint cm
foreign key (order_id)
references Order_status(id)
GO
-- Tạo khóa ngoại cho bảng Order_status --
alter table Order_status
add constraint order1
foreign key (auction_id)
references Auction(id)
GO

alter table Order_status
add constraint order2
foreign key (status_id)
references "Status"(id)
GO

-- Trigger tính tiền hoa hồng cho sản phẩm đấu giá thành công --
CREATE TRIGGER Commission_Calculation
ON Auction
FOR INSERT, UPDATE
AS
BEGIN
DECLARE @Price int
SELECT @Price = i.price_transaction
FROM inserted i

IF (@Price <= 1000000)
BEGIN
UPDATE Auction
SET commission = @Price * 5/100
END

ELSE IF (1000000 < @Price AND @Price <= 10000000)
BEGIN
UPDATE Auction
SET commission = @Price * 2/100
END

ELSE IF (@Price > 1000000)
BEGIN
UPDATE Auction
SET commission = @Price *1/100
END

ELSE
ROLLBACK TRANSACTION
END


