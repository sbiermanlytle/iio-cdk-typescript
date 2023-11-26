#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { IioCdkTypescriptStack } from '../lib/iio-cdk-typescript-stack';

/* 
  All AWS Construct Library classes are instantiated using three arguments: 
  the scope in which the construct is being defined (its parent in the construct tree), 
  an id, and props. Argument props is a bundle of key/value pairs that the construct
   uses to configure the AWS resources it creates. Other classes and methods also use 
   the "bundle of attributes" pattern for arguments.
   
   https://docs.aws.amazon.com/cdk/v2/guide/work-with-cdk-typescript.html#typescript-cdk-idioms
 */
const app = new cdk.App();
new IioCdkTypescriptStack(app, 'IioCdkTypescriptStack', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  env: { account: '635616249020', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});