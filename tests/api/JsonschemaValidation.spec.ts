import {test,expect} from '@playwright/test';
import Ajv from 'ajv';
import fs from 'fs';

test('json shcema validation', async ({request})=>{
    const response = await request.get('https://mocktarget.apigee.net/json');
    const responseBody = await response.json();

   const schema = readFileJson('test-data/jsonschema.json');

    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    const isValid = validate(responseBody);

    expect (isValid).toBeTruthy();

})

function readFileJson(path : string){
    const file = fs.readFileSync(path,'utf-8')
    return JSON.parse(file);
}