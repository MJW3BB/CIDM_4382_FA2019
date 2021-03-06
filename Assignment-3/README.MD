# VATSIM Data Parsing

As demonstrated on 10/07/2019 and 10/09/2019, this assignment is about reading from the VATSIM data files I discussed with you.

Recall that you are asked to read the files labeled "URL0" at this link:  https://status.vatsim.net/

Also recall that this datafile is updated every two minutes.

The objective for this assignment is to read the datafile - http://us.data.vatsim.net/vatsim-data.txt for instance - so that you can parse records for the following roles:

* [Harvester]
* [Controller]
* [Pilot
]
You can find the guide code to help you at https://github.com/ahuimanu/CIDM4382-Fall2019 in the -following projects:

* [VATSIMHarvester](https://github.com/ahuimanu/CIDM4382-Fall2019/tree/master/VATSIMHarvester)

However, using VATSIMHarvester mostly, see how far you can get by continuing to use the code I have in the harvest.js file.

Recall that I use the split method in JavaScript to break the string up:

First by lines
Then by the : delimiting character
And then by looking for all records in the CLIENTS! section
If you can get that far, then print all of the parts for each field and for each row.  Try printing these using console.log statements and also by using a Pug template.

![Press E to embark when ready pilot](https://66.media.tumblr.com/9e71a07c05f18f05c97fcf2cf2765516/tumblr_ol0r9e2Ciq1qgojgxo3_500.gif)

