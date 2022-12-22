USE ReverseAuction
GO

CREATE FUNCTION tinhthoigian
(@id int)
RETURNS datetime
AS
BEGIN
DECLARE @thoigianketthuc datetime
select @thoigianketthuc = DATEADD(day, 2, Auction.time_start) from Auction
where Auction.id = @id
RETURN @thoigianketthuc
END
GO

CREATE FUNCTION giacuoi
(@id int)
RETURNS int
AS 
BEGIN
		DECLARE @price int
		select @price = min(Auction_details.price) from Auction_details
		where Auction_details.auction_id = @id
	RETURN @price
END
GO

CREATE FUNCTION tinhhoahong
(@id int)
RETURNS int
AS
BEGIN 
DECLARE @pricetransaction int
select @pricetransaction = dbo.giacuoi(@id)
DECLARE @commission int
	if (@pricetransaction < 1000000) 
		return @pricetransaction * 5/100
	else if (@pricetransaction >= 1000000) and (@pricetransaction < 10000000)
		return @pricetransaction  *2/100
	return @pricetransaction * 1/100
END
GO

CREATE FUNCTION timnguoibancuoi
(@id int)
RETURNS varchar(20)
AS 
BEGIN
		DECLARE @account_name varchar(20), @price int
		select @price = dbo.giacuoi(@id)
		select @account_name = Auction_details.seller from Auction_details
		where Auction_details.auction_id = @id and Auction_details.price = @price
	RETURN @account_name
END
GO

CREATE FUNCTION tinhgiaship
(@id int)
RETURNS int
AS
BEGIN
	DECLARE @seller_end varchar(20)
	select @seller_end = dbo.timnguoibancuoi(@id)
	DECLARE @address1 int
	select @address1 = DISTRICT.id from 
		(Auction inner join Users on Auction.buyer = Users.account_name
		inner join In4_User on Users.account_name = In4_User.account_name
		inner join WARD on In4_User.ward_id = WARD.id
		inner join DISTRICT on WARD.district_id = DISTRICT.id)
	where Auction.id=@id

	DECLARE @address2 int
		select @address2 = DISTRICT.id from 
		(Auction inner join Users on @seller_end = Users.account_name
		inner join In4_User on Users.account_name = In4_User.account_name
		inner join WARD on In4_User.ward_id = WARD.id
		inner join DISTRICT on WARD.district_id = DISTRICT.id)
	where Auction.id=@id

	DECLARE @priceship int
	select @priceship = Shipping.price from Shipping
	where Shipping.address_start = @address1 and Shipping.address_end = @address2
RETURN @priceship
END
GO

CREATE TRIGGER themtimeend
ON Auction
FOR INSERT, UPDATE
AS
BEGIN
	DECLARE @id int
	Select @id = inserted.id from inserted
	Update Auction
	Set Auction.time_end = dbo.tinhthoigian(@id)
	Where Auction.id = @id
END
GO

CREATE TRIGGER themdulieuauction
ON Auction_details
FOR INSERT, UPDATE
AS
BEGIN
	DECLARE @id int
	Select @id = inserted.auction_id from inserted
	Update Auction
	Set Auction.seller_end = dbo.timnguoibancuoi(@id),
		Auction.price_transaction = dbo.giacuoi(@id),
		Auction.commission = dbo.tinhhoahong(@id),
		Auction.price_shipping = dbo.tinhgiaship(@id)
	Where Auction.id = @id
END
GO