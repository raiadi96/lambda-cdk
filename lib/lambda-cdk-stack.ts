import * as cdk from 'aws-cdk-lib';
import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class LambdaCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambda = new Function(
      this,
      'LambdaCdkStackLambda',
      {
        runtime: Runtime.NODEJS_14_X,
        code: Code.fromAsset('lambda'),
        handler: 'hello.handler',
      }
    );

    new LambdaRestApi(this, 'LambdaCdkStackApi', {
    handler: lambda,
    });
  }
}
