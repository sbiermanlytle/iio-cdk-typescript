import { Handler } from "aws-cdk-lib/aws-lambda";

/**
 *
 * @param {LambdaEvent} event
 */
export const handler: Handler = async (event, context) => {
  console.log('EVENT: \n' + JSON.stringify(event, null, 2));
  
  return {
    statusCode: 200,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      success: true,
      message: 'hello'
    })
  };
};
