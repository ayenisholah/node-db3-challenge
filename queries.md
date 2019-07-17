# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
SELECT * FROM Products;

### . Shows 161 records.

### Display all ProductNames anDisplay the OrderID and ShipperName for all orders placed before January 9, 1997
Select OrderID, ShipperName, OrderDate from Orders
join Shippers
on Orders.ShipperID = Orders.ShipperID
where OrderDate <= '1997-01-09';

##Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 