const debug = require('debug')('app:fileUpload-service');
const fs = require('fs');

const resumable = require('../helpers/resumable-node.js')('./uploadedFiles/');
const BaseService = require('./base');
const CSVtoJSON = require('../helpers/transform-csv-to-json');


class FileUploadService extends BaseService {
    constructor({ fileUploadRepository }) {
        super(fileUploadRepository);
        this.path = null;
    }

    async upload(req) {
        if (!req) {
            throw Error('User object shouldn\'t be empty');
        }

        let result;

        resumable.post(req, (status, filename, chunkNumber, identifier, totalChunks) => {
            // debug(`POST: ${identifier}_${chunkNumber}_${filename}, ${status}`);
            // debug(chunkNumber);
            const readStream = fs.createReadStream(`./uploadedFiles/${identifier}_${chunkNumber}_${filename}`, 'utf-8');
            const writeStream = fs.createWriteStream(`./transformedFiles/${filename}.json`, { flags: 'a' });
            readStream.pipe(writeStream);
            if (totalChunks === chunkNumber) {
                // const ws = fs.createWriteStream('./transformedFiles/test.json', { flags: 'a' });
                const rs = fs.createReadStream(`./transformedFiles/${filename}.json`, { encoding: 'utf-8', highWaterMark: 16 }).pipe(new CSVtoJSON());
                // rs.pipe(ws);
                rs.on('error', err => debug(err));
                rs.on('data', (data) => {
                    result = this.repository.upload(data.toString());
                });
                fs.stat(`./transformedFiles/${filename}.json`, (err, stats) => {
                    if (err) {
                        return console.log(err);
                    }

                    fs.unlink(`./transformedFiles/${filename}.json`, (errr) => {
                        if (errr) return console.log(errr);
                        return console.log('file deleted successfully');
                    });
                });
            }
        });
        return result;
    }
}
module.exports = FileUploadService;
