// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/lifetimejobstats?api-version=2017-09-01.6.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#jobstats/@Element\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/lifetimejobstats\",\"startTime\":\"2017-05-26T16:19:27.0644752Z\",\"lastUpdateTime\":\"2017-10-02T21:00:00Z\",\"userCPUTime\":\"PT2M32.939S\",\"kernelCPUTime\":\"PT0.219S\",\"wallClockTime\":\"PT2M32.939S\",\"readIOps\":\"2\",\"writeIOps\":\"692\",\"readIOGiB\":2.1606683731079102E-07,\"writeIOGiB\":9.5702707767486572E-06,\"numTaskRetries\":\"0\",\"numSucceededTasks\":\"42\",\"numFailedTasks\":\"28\",\"waitTime\":\"PT6M0.993S\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '1f73ec10-fddd-457c-904f-8e4eb4f325d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 02 Oct 2017 21:51:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/lifetimejobstats?api-version=2017-09-01.6.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#jobstats/@Element\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/lifetimejobstats\",\"startTime\":\"2017-05-26T16:19:27.0644752Z\",\"lastUpdateTime\":\"2017-10-02T21:00:00Z\",\"userCPUTime\":\"PT2M32.939S\",\"kernelCPUTime\":\"PT0.219S\",\"wallClockTime\":\"PT2M32.939S\",\"readIOps\":\"2\",\"writeIOps\":\"692\",\"readIOGiB\":2.1606683731079102E-07,\"writeIOGiB\":9.5702707767486572E-06,\"numTaskRetries\":\"0\",\"numSucceededTasks\":\"42\",\"numFailedTasks\":\"28\",\"waitTime\":\"PT6M0.993S\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '1f73ec10-fddd-457c-904f-8e4eb4f325d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 02 Oct 2017 21:51:59 GMT',
  connection: 'close' });
 return result; }]];