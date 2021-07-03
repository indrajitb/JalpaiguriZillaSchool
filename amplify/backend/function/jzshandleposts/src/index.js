// import {DynamoDB} from 'aws-sdk';

const AWS = require('aws-sdk');

AWS.config.update({region: 'ap-south-1'});

let dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});




/* Amplify Params - DO NOT EDIT
	API_SCHOOL_CAROUSELDATATABLE_ARN
	API_SCHOOL_CAROUSELDATATABLE_NAME
	API_SCHOOL_COMMENTTABLE_ARN
	API_SCHOOL_COMMENTTABLE_NAME
	API_SCHOOL_GRAPHQLAPIENDPOINTOUTPUT
	API_SCHOOL_GRAPHQLAPIIDOUTPUT
	API_SCHOOL_MEDIAFILETABLE_ARN
	API_SCHOOL_MEDIAFILETABLE_NAME
	API_SCHOOL_POSTTABLE_ARN
	API_SCHOOL_POSTTABLE_NAME
	API_SCHOOL_PROFILETABLE_ARN
	API_SCHOOL_PROFILETABLE_NAME
	API_SCHOOL_USERTABLE_ARN
	API_SCHOOL_USERTABLE_NAME
	ENV
	FUNCTION_S3TRIGGER387A2CD8_NAME
	REGION
	STORAGE_SCHOOLS3_BUCKETNAME
Amplify Params - DO NOT EDIT */exports.handler = event => {
  //eslint-disable-line
  console.log(JSON.stringify(event, null, 2));
  event.Records.forEach(record => {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('New DynamoDB Record: %j', record.dynamodb);

    if(record.eventName === 'INSERT') {
      if(record. eventSourceARN) {

        const table = record.eventSourceARN;

        if(table.includes('arn:aws:dynamodb:ap-south-1:195155602062:table/Post')) {

          //New Post created

          const newPost = record.dynamodb.NewImage;
          
           console.log('Post: ', {...newPost});
          
          console.log(`New Post by ${newPost.userEmail}`);
          
          const email = newPost['userEmail'];
          
          console.log('Email: ', email);

          var params = {
            // TableName: 'User-vrwofekwjjc7zjppurgk2ko7sa-dev',
            TableName: 'User',
            Key: {
              'email': email
            },
            // ProjectionExpression: 'name'
          };

          // Call DynamoDB to read the item from the table
          dynamodb.getItem(params, function(err, data) {
            if (err) {
              console.error("Error", err);
            } else {
              console.log("Success", data, data.Item);
            }
          });

        }
      }
    }

  });
  return Promise.resolve('Successfully processed DynamoDB record');
};
