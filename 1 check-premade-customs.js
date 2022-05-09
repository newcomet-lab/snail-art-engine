const fs = require('fs');

const img_cnt = 100;

const premadeCustoms = [
    {
        "Background": "Grass",
        "Body": "Log",
        "Shell": "Skeleton Watch",
        "Eye": "Nerd Glasses",
        "Hats": "None"
    }, {
        "Background": "Sahh",
        "Body": "Driftwood",
        "Shell": "Hawaiian Purple",
        "Eye": "Tired",
        "Hats": "None"
    }, {
        "Background": "Grass",
        "Body": "Tiger",
        "Shell": "Royal White",
        "Eye": "DeadEye",
        "Hats": "None"
    }, {
        "Background": "Desert",
        "Body": "Jade Dragon",
        "Shell": "Shrub Shell",
        "Eye" : "Arg",
        "Hats": "Top Hat"
    }, {
        "Background": "Kaiju",
        "Body": "Robot",
        "Shell": "Grey",
        "Eye": "Zuckerberg",
        "Hats": "alien"
    }, {
        "Background": "Space",
        "Body": "Slime Red",
        "Shell": "Pill",
        "Eye": "8 Ball",
        "Hats": "baseball"
    }, {
        "Background": "Clouds",
        "Body": "Muscle",
        "Shell": "KettleBell",
        "Eye": "Zuckerberg",
        "Hats": "None"
    }, {
        "Background": "Grass",
        "Body": "Grey",
        "Shell": "Metal",
        "Eye" : "Tired",
        "Hats": "None"
    }, {
        "Background": "Desert",
        "Body": "Waves",
        "Shell": "fishbowl",
        "Eye" : "Arg",
        "Hats": "None"
    }, {
        "Background": "Spooky",
        "Body": "Mummy",
        "Shell": "Royal Purple",
        "Eye" : "Zombie",
        "Hats": "None"
    }
];

const checkJSON = async function(file_idx) {
	fs.readFile(`build/json/${file_idx}.json`, function(err, data) {
		if(err) console.log("Failed : #" + file_idx + " --- " + err);
		else {
            let json_data = JSON.parse(data);

            let cc = 0;
            for (let i = 0; i < premadeCustoms.length; i++) {
                const one = premadeCustoms[i];

                for (let j = 0; j < json_data.attributes.length; j++) {
                    if (one[json_data.attributes[j].trait_type] == json_data.attributes[j].value) cc++;
                }

                if (cc === 5) {
                    console.log(`${file_idx}.json equals premadeCustom#${i}`);
                    break;
                }
                cc = 0;
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
	for (let i = 0; i < img_cnt; i++) {
		await checkJSON(i);
	}
}

prepareJson();
