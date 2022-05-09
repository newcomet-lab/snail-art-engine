const fs = require('fs');

const img_cnt = 100;

const checkImages = async function(file_idx) {
    fs.readFile(`assets/json/${file_idx}.json`, function(err, data) {
		if(err) console.log(`Failed: #${file_idx}.json ` + err);
		else {
            const json_data = JSON.parse(data);
            const img_idx = json_data.edition;

            console.log(`File : ${file_idx}.png`);
            fs.readFile(`build/images/${img_idx}.png`, function(err1, data1) {
                if(err1) console.log(`Failed: #${img_idx}.png ` + err1);
                else {
                    fs.writeFileSync(`assets/images/${file_idx}.png`, data1);
                }
            });
		}
	});
}

const prepareJson = async function() {
    if (!img_cnt) {
        console.log("IMG_CNT is undefined.");
        return;
    }

    console.log("JSON Checking Started");
    for (let i = 0; i < img_cnt; i++) {
        await checkImages(i);
    }
}

prepareJson();
