# ASSIGNMENT #1
### Build 3-tier architecture using Apache HTTP Server, Node.js and MySQL

## How to configure Apache (required [ApacheLounge](https://www.apachelounge.com/download/) installed)
To install ApacheLounge, please follow the [instructions](https://www.sitepoint.com/how-to-install-apache-on-windows/)
Then, 
1. Look for and open *<apache_folder>/conf/httpd.conf*
2. Find words: '**ServerRoot**' (without single-quote)
3. Add new line after it: '**ProxyPass /hw1 http://localhost:5000**' (without single-quote)
4. Save and restart Apache

## How to install MySQL
1. Download MySQL (community version) from link: https://dev.mysql.com/downloads/mysql/
2. Open installer
3. Everything should be skipped as default, except:<br/>
a. Type and Networking > Config Type: Server Computer<br/>
b. Account and Roles > *enter your password* which will used to login as **root** user

For Windows, configure environment variables by adding to PATH in System Variables: <mysql_folder>/bin
To test if installation is correct:
- Open cmd and run: ``` mysql -u root -p ```
- Then, type your password<br/><br/>
**Expected output**<br/>
![alt text](https://github.com/javawtee/CS157A/tree/master/hw1/mysql-output.jpg ":(")

## How to run Node.js (required [Node.js](https://nodejs.org/en/download/) installation)
Open cmd (Windows) or terminal (Linux/Ubuntu/Mac)
```
cd <hw1_folder>
npm install
npm start
```

Finally, you can run node.js with Apache by:
1. Open Internet browser
2. Type: http://localhost/hw1
