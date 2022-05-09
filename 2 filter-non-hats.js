const fs = require('fs');

const img_cnt = 100;
const null_hat_value = 'None';

const checkJSON = async function() {
    fs.readFile(`build/json/_metadata.json`, function(err, data) {
		if(err) console.log("Failed : metadata" + err);
		else {
            const metadata = JSON.parse(data);
            let json_idx = 0;

            for (let i = 0; i < metadata.length; i++) {
                const json_data = metadata[i];
                for (let j = 0; j < json_data.attributes.length; j++) {
                    if (json_data.attributes[j].trait_type == 'Hats' && json_data.attributes[j].value == null_hat_value) {
                        console.log(`File : ${json_idx}.json`);
                        fs.writeFileSync(`assets/json/${json_idx}.json`, JSON.stringify(json_data, null, 2));
                        json_idx++;
                        break;
                    }
                }
            }
		}
	});
}

const prepareJson = async function() {
    if (!img_cnt) {
        console.log("IMG_CNT is undefined.");
        return;
    }

    console.log("JSON Checking Started");
    await checkJSON();
}

prepareJson();
