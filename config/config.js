/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var user_config = {
	weather_config : {
		location: "Daejeon",
		locationID: "1835224", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
		appid: "719359d9e7443b3d875a770e49902314" //iot-maker api key
	}
	, calendar_config : [
		{url: "https://calendar.google.com/calendar/ical/ko.south_korea%23holiday%40group.v.calendar.google.com/public/basic.ics"} // 대한민국 공휴일
		, { symbol: "calendar-check", url: "https://calendar.google.com/calendar/ical/iot191210%40gmail.com/public/basic.ics"} // iot-maker 일정
	]
	, news_config : [
		{
			title: "JTBC"
			, url: "http://fs.jtbc.joins.com//RSS/newsflash.xml"
			, url: "http://fs.jtbc.joins.com/RSS/economy.xml"
			, ref: 'http://news.jtbc.joins.com/Etc/RssService.aspx' // rss list
		}
	]
};

var config = {
	address: "localhost", 	// Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
	// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "ko",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "다가오는 일정",
			position: "top_left",
			config: {
				calendars: user_config.calendar_config
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: user_config.weather_config
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: user_config.weather_config
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: user_config.news_config,
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
