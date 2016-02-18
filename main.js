angular.module('sportsViewer', []);

angular.module('sportsViewer')
		.controller('viewTroller', ['$scope', function($scope) {

				$scope.events = [
					{
						business : "Tom Grainey's",
						address : "489 6th Street South",
						city : "Boise",
						state : "ID",
						zip : 83705,
						img : "http://oldboise.com/wp-content/uploads/2015/05/Graineys.jpg",
						title : "Super Bowl Party!",
						date : "Sunday, 2/7/16", 
						sport : "Football",
						age : "21+",
						reoccuring : "One Time Event",
						notes : "DJ FreakBoi spinning that 90's goodness all night."
					},
					{
						business : "Dirty Little Roddey's",
						address : "1201 8th Street East",
						city : "Boise",
						state : "ID",
						zip : 83705,
						img : "http://oldboise.com/wp-content/uploads/2015/08/map_turnverein.jpg",
						title : "Rousey vs Holm Fight",
						date : "Saturday, 12/10/15",
						sport : "Fighting",
						age : "21+ And Up",
						reoccuring : "One Time Event",
						notes : "Yeeeehawwww!"
					},
					{
						business : "Vista Bar",
						address : "129 South Vista Avenue",
						city : "Boise",
						state : "ID",
						zip : 83707,
						img : "http://vistabarboise.com/wp-content/uploads/2015/02/vistabarsign.jpg",
						title : "MLS Cup Championship",
						date : "Sunday, 12/13/2015",
						sport : "Soccer",
						age : "21+",
						reoccuring : "One Time Event",
						notes : "Pet our dog while watching the big game on our 12 inch TV!"
					},
					{
						business : "Legend's Pub and Grill",
						address : "2 Entertainment Way",
						city : "Meridian",
						state : "ID",
						zip : 83642,
						img : "http://media-cdn.tripadvisor.com/media/photo-s/02/da/59/90/legends-sports-pub-and.jpg",
						title : "Vikings Fans, Join Us For Football!",
						date : "Every Vikings Game",
						sport : "Football",
						age : "FamilyFriendly",
						reoccuring : "Reoccuring Event",
						notes : "Purple Fans get $1 off all drinks!"
					},					
					{
						business : "Wahooz!",
						address : "695 S. Overland",
						city : "Meridian",
						state : "ID",
						zip : 83642,
						img : "http://www.wahoozfunzone.com/_upload/landing-page/wahooz-rotator/tiki-fire-teens.jpg",
						title : "March Madness",
						date : "Every College Game",
						sport : "CollegeBasketball",
						age : "FamilyFriendly",
						reoccuring : "One Time Event (During March)",
						notes : "SkeeBall and Sports!"
					},	
					{
						business : "ViewHouse",
						address : "733 Dry Creek",
						city : "Lone Tree",
						state : "CO",
						zip : 80112,
						img : "http://images1.westword.com/imager/u/745x420/6706434/8648622.0.jpg",
						title : "Stanley Cup Game 7",
						date : "Monday, 4/12/16",
						sport : "Hockey",
						age : "AllAges",
						reoccuring : "One Time Event",
						notes : "Come on, bro. Be a bro, bruh. Bro out." 
					},	
					{
						business : "YardHouse",
						address : "11 Park Meadows Drive",
						city : "Lone Tree",
						state : "CO",
						zip : 80112,
						img : "https://wishurhere.files.wordpress.com/2012/05/yard-house-denver-6.jpg",
						title : "NBA Draft Party",
						date : "Thursday, June 23rd, 2016",
						sport : "Basketball",
						age : "AllAges",
						reoccuring : "One Time Event",
						notes : "Check out this classy chain! $2 air!"
					},	
					{
						business : "The RAM",
						address : "3535 Broadway",
						city : "Boise",
						state : "ID",
						zip : 83707,
						img : "http://www.theram.com/wp-content/uploads/2013/07/hero-locations.jpg",
						title : "World Series Game 7 Bash",
						date : "Wednesday, 10/2/16",
						sport : "Baseball",
						age : "AllAges",
						reoccuring : "One Time Event",
						notes : "Enjoy a steak dinner whilst watching the biggeth gameth."
					},	
					{
						business : "The Endzone",
						address : "8952 Broadway",
						city : "Boise",
						state : "ID",
						zip : 83707,
						img : "https://res.cloudinary.com/roadtrippers/image/upload/c_fill,h_316,w_520/v1394645562/the-end-zone-567517.jpg",
						title : "BSU Watch Party!!!",
						date : "Every Boise State Game",
						sport : "CollegeFootball",
						age : "21+",
						reoccuring : "Reoccuring Event",
						notes : "25 Cent PBR's!!!"
					},	
					{
						business : "The Reef",
						address : "442 6th Street",
						city : "Boise",
						state : "ID",
						zip : 83705,
						img : "http://thisisboise.com/wp-content/uploads/2014/06/The-Reef-Patio-Live-Music.png",
						title : "International Soccer",
						date : "Every Saturday, All Day",
						sport : "Soccer",
						age : "21+",
						reoccuring : "Reoccuring Event",
						notes : "Drink Special: $132 for a Mai Tai!"
					},	
					{
						business : "The FireHouse",
						address : "363432 Karcher",
						city : "Nampa",
						state : "ID",
						zip : 83687,
						img : "http://media-cdn.tripadvisor.com/media/photo-s/09/93/f0/f8/firehouse-grill.jpg",
						title : "Silva vs Weidman",
						date : "Saturday, 6/13/16",
						sport : "Fighting",
						age : "21+",
						reoccuring : "One Time Event",
						notes : "Get STD's from sitting on our chairs!"
					},	
					{
						business : "Jump Time",
						address : "12412 Fairview",
						city : "Meridian",
						state : "ID",
						zip : 83642,
						img : "http://thisisboise.com/wp-content/uploads/2013/12/jumptime_2.jpg",
						title : "Super Bowl 50 Party",
						date : "Sunday, 2/7/17",
						sport : "Football",
						age : "FamilyFriendly",
						reoccuring : "One Time Event",
						notes : "Let the kids play while you get wasted!"
					},	
					{
						business : "Sport's Clips",
						address : "45544 Fairview",
						city : "Meridian",
						state : "ID",
						zip : 83642,
						img : "https://lh3.googleusercontent.com/ZZkE-svmreZ01_s5YoJh_CTS7KwQcjZl_qP8f8pOrLYnOe611oQz35hl5hNPpwm__q6Y=s755-fcrop64=1,00000064ffc6ffff",
						title : "Baseball Watch Party",
						date : "Any And All Games",
						sport : "Baseball",
						age : "FamilyFriendly",
						reoccuring : "Reoccuring Event",
						notes : "Watch the games and get a haircut!"
					},	
					{
						business : "Mulligan's",
						address : "256 10th Street",
						city : "Boise",
						state : "ID",
						zip : 83708,
						img : "https://cache.indulgerymedia.com/listing_images/250x250/47698_a3dbbfbbd962a2282cdcf00dce912b91.jpg",
						title : "College Football Natty!!",
						date : "Monday, 1/9/16",
						sport : "CollegeFootball",
						age : "21+",
						reoccuring : "One Time Event",
						notes : "$1 Well Shots"
					},					
				]

				$scope.addEvent = function() {
					$scope.events.push($scope.newEvent)
					$scope.newEvent = {}
				}

				$scope.sportsList = ["Football", "Basketball", "Baseball", "Hockey", "Soccer", "CollegeFootball", "Fighting", "CollegeBasketball"];

				$scope.updateFilter = function(sport) {
					if ($scope.sportsFilter == sport) {
						$scope.sportsFilter = "";
					} else {
						$scope.sportsFilter = sport;
					}
				};

				$scope.agesList = ["FamilyFriendly", "AllAges", "21+"];

				$scope.updateFilterAge = function(age) {
					console.log("Working");
					if ($scope.agesFilter == age) {
						$scope.agesFilter = "";
						console.log("Still Working");
					} else {
						$scope.agesFilter = age;
						console.log("Never worked");
					}
				};
	}])