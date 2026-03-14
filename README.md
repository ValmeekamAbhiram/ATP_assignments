###Steps to create backend

1. Generate package.json file
      npm init -y

=>In package.json type should be mentioned to module instead of  common.js because common.js doesnt support import and export functions.

2. Create HTTP server 
   -Install & Import express module
       npm install express

   -Import express module
   
3. DELETE req and GET req doesnt support body of the req obj => they cant pass details.
SO they have to send the data through endpoint.

4. POST req and PUT req should send the data through api as body of req object 


###Create employees collection and insert 5 emp documents with below Structure
{
    empId:"",
    name:"",
    skills:[],
    experiences:[{
        companyName:"",
        yearsOfExp:""
    }]

}