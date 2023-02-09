
import { Magic, MAGIC_MIME_ENCODING, MAGIC_MIME_TYPE } from "mmmagic";

console.log('Hello World');

const magic = new Magic(MAGIC_MIME_TYPE | MAGIC_MIME_ENCODING);
magic.detectFile("somefile.txt", (err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    if (result as string) {
        console.log(`Result: ${result}`);
    }
});