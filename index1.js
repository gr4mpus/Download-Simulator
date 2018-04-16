function downloadFile(url, downloadFn){
    if(!url.startsWith('http')){
        console.log("Error in the link");
    }
    let fileName = url.split('/').pop();
    setTimeout(function(){
        downloadFn(fileName);
    },3000)
}

function decryptFile(dFileName, decryptFn){
    let decryptFileName = dFileName.split('.')[0]+'.mp4';
    setTimeout(function(){
        decryptFn(decryptFileName);
    },2000)
}

function encryptFile(decFileName, encryptFn){
    let encryptFileName = decFileName.split('.')[0]+'.crypt';
    setTimeout(function(){
        encryptFn(encryptFileName);
    },2000)
}

function uploadingFile(eFileName, upURL){
    let putURL= `www.nibba.com/${eFileName}`;
    setTimeout(function(){
        upURL(putURL)
    },4000)
}

downloadFile("http://www.google.com/MyDocument.crypt", function(downloadedFile){
    console.log(`File is downloaded as ${downloadedFile}`);
    decryptFile(downloadedFile, function(decryptedFile){
        console.log(`File is decrypted as ${decryptedFile}`);
        encryptFile(decryptedFile,function(encryptedFile){
            console.log(`File is encrypted as ${encryptedFile}`);
            uploadingFile(encryptedFile, function(uploadURL){
                console.log(`${encryptedFile} is uploaded to ${uploadURL}`)
            })
        })
    })
})