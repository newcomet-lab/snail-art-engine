const fs = require('fs');

var img_cnt = 8888;

const changeJSON = async function(file_idx) {
	fs.readFile('assets/json/' + file_idx + '.json', function(err, data) {
		if(err) console.log("Failed : #" + file_idx + " --- " + err);
		else {
			var json_data = JSON.parse(data);
			json_data.name = `Silly Snail #${file_idx}`;
			json_data.image = `${file_idx}.png`;
			json_data.edition = file_idx;
			json_data.properties.files[0].uri = `${file_idx}.png`;
			json_data.collection = {
			    "name": "Silly Snail - NFT",
			    "family": "Silly Snail"
			};
            console.log("File : " + file_idx + ".json");
			fs.writeFileSync('assets/json/' + file_idx + '.json', JSON.stringify(json_data, null, 2), function(erro){
				if(erro) console.log("error : "+erro);
			});
		}
	});
}

const prepareJson = async function() {
    if (!img_cnt) {
        console.log("IMG_CNT is undefined.");
        return;
    }

    console.log("JSON preparing start");
	for (var i = 0; i < img_cnt; i++) {
		changeJSON(i);
	}
}

prepareJson();