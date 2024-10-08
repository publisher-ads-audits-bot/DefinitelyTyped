import Recipe = require("hummus-recipe");

import fs = require("fs");

// $ExpectType Recipe
const newDoc = new Recipe("new", "test.pdf", {
    version: 1.6,
    author: "John Doe",
    title: "Hummus Recipe",
    subject: "A brand new PDF",
    colorspace: "rgb",
    keywords: ["hummus", "recipe"],
    password: "password",
    userPassword: "userPassword",
    ownerPassword: "ownerPassword",
    userProtectionFlag: "print",
    fontSrcPath: "path/to/fonts",
});

// $ExpectType Recipe
newDoc
    .createPage(595, 842)
    .text("Memento Mori", 100, 100)
    .endPage()
    .endPDF();

// @ts-expect-error
newDoc.createPage("A5")
    .text("Memento Mori", 100, 100)
    .endPage()
    .endPDF();

const inBuffer: Buffer = fs.readFileSync("test.pdf");

const bufferDoc = new Recipe(inBuffer);

bufferDoc
    .createPage(595, 842)
    .text("Memento Mori", 100, 100)
    .endPage()
    .endPDF(
        (outBuffer: Buffer) =>
            // $ExpectType Buffer || Buffer<ArrayBufferLike>
            outBuffer,
    );

// $ExpectType Metadata
bufferDoc.metadata;

// $ExpectType PageInfo
bufferDoc.metadata[1];
