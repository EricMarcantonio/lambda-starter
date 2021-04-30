# AWS Lambda Starting Template :cloud_with_lightning:

### Includes:

`node.js` :white_check_mark:

`claudia.js` :white_check_mark:

`express.js` :white_check_mark:

`typescript` :white_check_mark:

### Usage:

1. To get started, you need to create a role for Claudia.js to use. This IAM User needs to have `IAMFullAccess`, `AmazonAPIGatewayAdministrator` and `AWSLambda_FullAccess` policies. When you are creating the new role, take note of the `aws_access_key_id` and `aws_secret_access_key`.

2. Create a `.env` file in the root of the project.

```
aws_access_key_id=<access_key_id>
aws_secret_access_key=<secret>
```

3. `npm install`
4. `npm run generate`
5. `npm run aws:create`

This will create a `lambda.js` file in the root of the project. This is how claudia.js works with AWS. Just leave this file.

It will also create a `claudia.json` file, which contains your file.

### To Update:

1. `npm run aws:update`
2. Done! :white_check_mark:

#### PLEASE EDIT .gitignore to suit your needs!

