import fs from 'fs';
import { parse } from 'csv-parse/sync';
import { json } from 'stream/consumers';

export class DataProvider {

    static getJsonDataFromJson(filePath: string) {
        let data: any = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        return data;

    }

    static getTestDataFromCSVfile(filePath: string) {
        let data: any = parse(fs.readFileSync(filePath), { columns: true, skip_empty_lines: true })
        return data;

    }

}