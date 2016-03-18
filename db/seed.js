var mongoose = require('mongoose');
var conn = mongoose.connect('mongodb://localhost/homeward');
var Dog = require("../models/dog");
var User = require("../models/user");
Dog.remove({}, function (err) {
  if (err) {
    console.log("ERROR:", err);
  }
});
User.remove({}, function (err) {
  if (err) {
    console.log("error:", err);
  }
});
var dogs = [
 {
    name: "gizmo",
    breed: "cocker spaniel",
    color: "Grey/Black",
    age: 4,
    size: ["medium"],
    location: "1500-1506 7th Ave, San Francisco, CA",
    neighborhoods: ["Inner Richmond"],
    image: "http://mypetsmart.com/sites/default/files/field_image/cavalier-3.jpg",
    reward: "$300",
    contact: "1234567890",
    description: "was found begging for food on the sidewalk",
    status: ["found"],
    //userId: "",
    createdOn: Date.now(),
    isActive: { type: Boolean, default: true }
  },
   {
    name: "gus",
    breed: "Dane",
    color: "Grey/Black",
    age: 4,
    size: ["medium"],
    location: "1500-1506 7th Ave, San Francisco, CA",
    neighborhoods: ["The Mission"],
    image: "http://d21vu35cjx7sd4.cloudfront.net/dims3/MMAH/thumbnail/645x380/quality/90/?url=http%3A%2F%2Fs3.amazonaws.com%2Fassets.prod.vetstreet.com%2F5b%2F52%2F49deed4f440ea965d0ff16fca655%2Fgreat-dane-AP-PFYPXJ-645sm12913.jpg",
    reward: "$300",
    contact: "1234567890",
    description: "was found begging for food on the sidewalk",
    status: ["found"],
    //userId: "",
    createdOn: Date.now(),
    isActive: { type: Boolean, default: true }
  }, {
    name: "missy",
    breed: "Shih Tzu",
    color: "White/Grey",
    age: 4,
    size: ["small"],
    location: "1500-1506 7th Ave, San Francisco, CA",
    neighborhoods: ["Mission to Potrero"],
    image: "http://shihtzucity.com/wp-content/uploads/2015/05/My-shih-tzu-is-a-total-bitch-_fd37f0e45110ea56f45371a03519a35a.jpg",
    reward: "$300",
    contact: "1234567890",
    description: "was found begging for food on the sidewalk",
    status: ["found"],
    //userId: "",
    createdOn: Date.now(),
    isActive: { type: Boolean, default: true }
  }, {
    name: "teddy",
    breed: "Bernese",
    color: "Black/Brown/White",
    age: 4,
    size: ["large"],
    location: "1500-1506 7th Ave, San Francisco, CA",
    neighborhoods: ["Cole Valley"],
    image: "http://www.dogbreedinfo.com/images14/BerneseMountainDogKLEOPATRAHERUSPOSEIDONAS.JPG",    reward: "$300",
    contact: "1234567890",
    description: "was found begging for food on the sidewalk",
    status: ["found"],
    //userId: "",
    createdOn: Date.now(),
    isActive: { type: Boolean, default: true }
  }, {
    name: "tamali",
    breed: "Chiwawa",
    color: "Tan",
    age: 4,
    size: ["small"],
    location: "1500-1506 7th Ave, San Francisco, CA",
    neighborhoods: ["The Marina"],
image: "http://www.chiwawadog.org/wp-content/uploads/2013/06/Chiwawa-Dog.jpg",    reward: "$300",
    contact: "1234567890",
    description: "was found begging for food on the sidewalk",
    status: ["lost"],
    //userId: "",
    createdOn: Date.now(),
    isActive: { type: Boolean, default: true }
  }, {
    name: "bear",
    breed: "Dane",
    color: "White",
    age: 4,
    size: ["small"],
    location: "1500-1506 7th Ave, San Francisco, CA",
    neighborhoods: ["The Haight"],
    image: "https://s-media-cache-ak0.pinimg.com/236x/91/ff/40/91ff40339602a2ea8724dcd5f0033e6e.jpg",    reward: "$300",
    contact: "1234567890",
    description: "was found begging for food on the sidewalk",
    status: ["lost"],
    //userId: "",
    createdOn: Date.now(),
    isActive: { type: Boolean, default: true }
  }, {
    name: "spec",
    breed: "Cocker Spaniel",
    color: "Brown",
    age: 4,
    size: ["small"],
    location: "1500-1506 7th Ave, San Francisco, CA",
    neighborhoods: ["Golden Gate Park"],
    image:"https://s3.graphiq.com/sites/default/files/465/media/images/t2/Cocker_Spaniel_5381908.jpg",    contact: "1234567890",
    description: "was found begging for food on the sidewalk",
    status: ["sighted"],
    //userId: "",
    createdOn: Date.now(),
    isActive: { type: Boolean, default: true }
  }, {
    name: "roustabout",
    breed: "Pit Bull",
    color: "Grey/White",
    age: 4,
    size: ["large"],
    location: "1500-1506 7th Ave, San Francisco, CA",
    neighborhoods: ["Fisherman's Wharf"],
image: "http://cdn.onegreenplanet.org/wp-content/uploads/2010/10//2013/10/Pit-Bull-Saving-People.jpg",   reward: "$300",
    contact: "1234567890",
    description: "was found begging for food on the sidewalk",
    status: ["found"],
    //userId: "",
    createdOn: Date.now(),
    isActive: { type: Boolean, default: true }
  }, {
    name: "carrot",
    breed: "Basset Hound",
    color: "White/Brown",
    age: 4,
    size: ["medium"],
    location: "1500-1506 7th Ave, San Francisco, CA",
    neighborhoods: ["Bernal Heights"],
    image: "http://images.nationalgeographic.com/wpf/media-live/photos/000/346/cache/basset-hound-howard_34698_990x742.jpg",   reward: "$300",
    contact: "1234567890",
    description: "was found begging for food on the sidewalk",
    status: ["found"],
    //userId: "",
    createdOn: Date.now(),
    isActive: { type: Boolean, default: true }
  }, {
    name: "barker",
    breed: "Dane",
    color: "OffWhite/Grey",
    age: 4,
    size: ["small"],
    location: "1500-1506 7th Ave, San Francisco, CA",
    neighborhoods: ["The Castro"],
    image: "http://mypetsmart.com/sites/default/files/field_image/ShihTzu3.jpg",    reward: "$300",
    contact: "1234567890",
    description: "was found begging for food on the sidewalk",
    status: ["sighted"],
    //userId: "",
    createdOn: Date.now(),
    isActive: { type: Boolean, default: true }
  },
  {
    name: "diamond",
    breed: "Dane",
    color: "Grey/Black",
    age: 4,
    size: ["medium"],
    location: "1500-1506 7th Ave, San Francisco, CA",
    neighborhoods: ["Chinatown"],
    image: "http://d21vu35cjx7sd4.cloudfront.net/dims3/MMAH/thumbnail/645x380/quality/90/?url=http%3A%2F%2Fs3.amazonaws.com%2Fassets.prod.vetstreet.com%2F5b%2F52%2F49deed4f440ea965d0ff16fca655%2Fgreat-dane-AP-PFYPXJ-645sm12913.jpg",
    reward: "$300",
    contact: "1234567890",
    description: "was found begging for food on the sidewalk",
    status: ["found"],
    //userId: "",
    createdOn: Date.now(),
    isActive: { type: Boolean, default: true }
  },
  {
    name: "bella",
    breed: "Chihuahua",
    color: "tan",
    age: 4,
    size: ["small"],
    location: "1150 Folsom St, San Francisco, CA",
    neighborhoods: ["SoMa"],
    image: "http://www.woofipedia.com/images/uploads/_0021_Chihuahua.jpg",
    reward: "",
    contact: "0997754321",
    description: "Was found in front of my house wimpering for their owner, looks like her name is Bella",
    status: ["found"],
    //userId: "",
    createdOn: Date.now(),
    isActive: { type: Boolean, default: true }
  },
  {
    name: "charlie",
    breed: "Golden Retriever",
    color: "tan",
    age: 7,
    size: ["medium"],
    location: "2298 Hyde St, San Francisco, CA,",
    neighborhoods: ["Russian Hill"],
    image: "http://2puppies.com/wp-content/uploads/2015/08/golden-retriever-puppies-for-sale.jpg",
    reward: "$600",
    contact: "0988888321",
    description: "ran away during a walk, I hope he's alright",
    status: ["lost"],
    //userId: "",
    createdOn: Date.now(),
    isActive: { type: Boolean, default: true }
  },
  {
    name: "bailey",
    breed: "Labrador Retriever",
    color: "tan",
    age: 2,
    size: ["small"],
    location: "1250 Folsom St, San Francisco, CA",
    neighborhoods: ["SoMa"],
    image: "http://animalsbreeds.com/wp-content/uploads/2015/03/Labrador-Retriever-12.jpg",
    reward: "$100",
    contact: "0999954321",
    description: "she just ran out the door and bolted towards market, she has small legs though so she probably didn't go too far",
    status: ["lost"],
    //userId: "",
    createdOn: Date.now(),
    isActive: { type: Boolean, default: true }
  },
  {
    name: "max",
    breed: "Beagle",
    color: "Brown/Black/White",
    age: 1,
    size: ["small"],
    location: "1-99 Clarion Alley, San Francisco, CA",
    neighborhoods: ["Deco Ghetto"],
    image: "http://petstrollerblog.com/wp-content/uploads/2014/01/beagle-puppies-photos.jpg",
    reward: "$2000",
    contact: "0987654321",
    description: "was last seen running through an alley",
    status: ["lost"],
    //userId: "",
    createdOn: Date.now(),
    isActive: { type: Boolean, default: true }
  },
];
Dog.create(dogs, function (err, docs) {
  if (err) {
      console.log("ERROR:", err);
  } else {
      console.log("Created:", docs);
      mongoose.connection.close();
  }
});
