CREATE DATABASE ReverseAuction
GO
USE ReverseAuction
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
-- Tạo table thông tin đăng nhập --
CREATE TABLE Users
(
	account_name varchar(20) unique,
	pass varchar(1000) NOT NULL,
	image_user TEXT,
	status_user bit default 1,
	roles varchar(20) default N'USER' NOT NULL,
	CONSTRAINT pk_NguoiDung PRIMARY KEY (account_Name)
)
GO
-- Tạo table thông tin người dùng --
CREATE TABLE In4_User
(
	account_name varchar(20),
	first_name nvarchar(20) NOT NULL ,
	last_name nvarchar(20) NOT NULL,
	birthday DATE NOT NULL,
	email varchar(50),
	phone nchar(10),
	ward_id int,
	address_detail nvarchar(100),
	CONSTRAINT pk_In4_User PRIMARY KEY (account_name)
)	
-- Tạo table chat giữa người dùng --
CREATE TABLE Chat
(
	id int IDENTITY (1,1),
	sender varchar(20),
	receiver varchar(20),
	content nvarchar(2000),
	CONSTRAINT pk_Chat PRIMARY KEY (id)
)
GO
-- Tạo table thông tin chi tiết người dùng --
CREATE TABLE Address_Shipping
(
	id int IDENTITY(1,1),  
	account_name varchar(20),
	ward_id int,
	phone char(10),
	full_name nvarchar(50),
	address_details nvarchar(100),
	"status" bit default 1, -- Địa chỉ còn sử dụng hay đã ngưng sử dụng
	CONSTRAINT pk_User_details PRIMARY KEY (id)
)

-- Tạo table thông tin loại hàng --
CREATE TABLE Category
(
	id int IDENTITY(1,1),
	"name" nvarchar(50) NOT NULL,
	image_url char(1000),
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
	amount int, -- số lượng sản phẩm
	category_id int,
	account_name varchar(20),
	"status" bit default 1, -- Còn bán hay đã ngưng --
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
-- Tạo table thể hiện tiến trình đấu giá --
CREATE TABLE Status_auction
(
	id int IDENTITY(1,1),
	"status" nvarchar(20),
	CONSTRAINT pk_Waiting_auction PRIMARY KEY (id)
)
GO
-- Tạo table lưu trữ phiên đấu giá --
CREATE TABLE Auction
(
	id int IDENTITY(1,1),
	buyer varchar(20),
	id_product int,
	time_start datetime,
	time_end datetime,
	price_transaction int,
	price_shipping int,
	commission int,
	seller_end varchar(20),
	"status" int,
	exist bit,
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
	comment nvarchar(50),
	CONSTRAINT pk_Auction_details PRIMARY KEY (id)
)
GO

-- Tạo table các trạng thái đơn hàng --
CREATE TABLE Status_order
(
	id int IDENTITY(1,1),
	"status" nvarchar(30),
	CONSTRAINT pk_Status PRIMARY KEY (id)
)
GO
-- Tạo table thể hiện trạng thái của đơn hàng --
CREATE TABLE Orders
(
	auction_id int,
	status_id int,
	CONSTRAINT pk_Order_status PRIMARY KEY (auction_id, status_id)
)
GO
-- Tạo table lưu thông báo --
CREATE TABLE Notifications
(
	id int IDENTITY(1,1),
	account_name varchar(20),
	"time" datetime,
	auction_id int,
	type bit,
	"status" bit default 1, -- Thông báo xem hay chưa --
)
GO
-- Tạo table đánh giá cho sản phẩm của người bán của người mua --
CREATE TABLE Comment
(
	id int IDENTITY(1,1),
	auction_id int,
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
-- Tạo khóa ngoại cho bảng Chat --
alter table Chat
add constraint Chat_users1
foreign key (sender)
references Users(account_name)
GO

alter table Chat
add constraint Chat_users2
foreign key (receiver)
references Users(account_name)
GO
-- Tạo khóa ngoại cho bảng In4_user --
alter table In4_User
add constraint account_User
foreign key (account_name)
references Users(account_name)
GO

alter table In4_User
add constraint ward_User
foreign key (ward_id)
references WARD(id)
GO
-- Tạo khóa ngoại cho bảng Address_Shipping --
alter table Address_Shipping
add constraint account_Address
foreign key (account_name)
references Users(account_name)
GO

alter table Address_Shipping
add constraint ward_Address
foreign key (ward_id)
references WARD(id)
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
references Users(account_name)
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

-- Tạo khóa ngoại cho bảng Auction --
alter table Auction
add constraint status_Auc
foreign key ("status")
references Status_auction(id)
GO

alter table Auction
add constraint seller_auction
foreign key (seller_end)
references Users(account_name)
GO

alter table Auction
add constraint product_auction
foreign key (id_product)
references Product(id)
GO

alter table Auction
add constraint buyer_auction
foreign key (buyer)
references Users(account_name)
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
references Users(account_name)
GO
-- Tạo khóa ngoại cho bảng Comment --
alter table Comment
add constraint cm
foreign key (auction_id)
references Auction(id)
GO
-- Tạo khóa ngoại cho bảng Orders --
alter table Orders
add constraint order1
foreign key (auction_id)
references Auction(id)
GO

alter table Orders
add constraint order2
foreign key (status_id)
references Status_order(id)
GO
-- Tạo khóa ngoại cho bảng Notifications --
alter table Notifications
add constraint Not_user
foreign key (account_name)
references Users(account_name)
GO

alter table Notifications
add constraint Not_auction
foreign key (auction_id)
references Auction(id)
GO



